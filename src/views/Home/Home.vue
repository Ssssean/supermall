<!--  -->
<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']" 
                    class="tab-control"
                    :class="{tabcontrol:float}"
                    @tabClick="tabClick"
                    ref="tabControl2"
                    v-show="float"/>
    <scroll class="content"
            ref="scroll"
            @scroll="changeScroll"
            @pullingUp="pullingUp"
            :probeType="3"
            :pulling="true"
            >
      <home-swiper class="home" :banners="banners" @loadSwiperImage='loadSwiperImage'></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" 
                    class="tab-control"
                    @tabClick="tabClick"
                    ref="tabControl"/>
      <goods-list class="goodsList" :goodsListDetail="showGoods"></goods-list>
    </scroll>
    <back-top class="backTop" v-show="showImage" @click.native="backTop"></back-top>

  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goodsList/GoodsList'
  import BackTop from 'components/common/backTop/BackTop'

  import {getHomeMultidata,getHomeGoodsData} from '../../network/home.js'
  import {debounce} from 'common/utils'

export default {
  data () {
    return {
      banners:{},
      recommends:[],
      goods:{
        'pop':{
          page:0,
          list:[]
        },
        'new':{
          page:0,
          list:[]
        },
        'sell':{
          page:0,
          list:[]
        }
      },
      currentGoodsType:'pop',
      showImage:false,
      float:false,
      tabControloffsetTop:0,
      leavePosition:0
    };
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created(){
    this.getHomeMultidata()
  
    this.getHomeGoodsData('pop')
    this.getHomeGoodsData('new')
    this.getHomeGoodsData('sell')
    

  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh,500);
    this.$bus.$on('imageLoad',()=>{
      refresh();
    })
  },
  computed:{
    showGoods(){
      return this.goods[this.currentGoodsType]
    }
  },
  methods:{

    loadSwiperImage(){
      this.tabControloffsetTop = this.$refs.tabControl.$el.offsetTop
    },

    getHomeMultidata(){
      getHomeMultidata().then(res =>{
        this.banners = res.data.banner;
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoodsData(type){
      let page = this.goods[type]['page'] + 1;

      getHomeGoodsData(type,page).then(res =>{
        // console.log(res);
        
        this.goods[type]['list'].push(...res.data.list)
        this.goods[type]['page'] += 1
      })
    },
    tabClick(index){
      switch(index){
        case 0:
          this.currentGoodsType='pop'
          break;
        case 1:
          this.currentGoodsType='new'
          break;
        case 2:
          this.currentGoodsType='sell'
          break;
      }
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    changeScroll(emit){
      this.showImage = emit.position<-1000;
      this.float = this.tabControloffsetTop < (-emit.position)
      // this.leavePosition = emit.position;
    },
    pullingUp(){
      this.getHomeGoodsData(this.currentGoodsType);

      this.$refs.scroll.finishPull()
    },
    backTop(){
      this.$refs.scroll.backTop()
    }
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.leavePosition,0)
    // console.log(this.leavePosition+'-----------------scrollTo');
    this.$refs.scroll.refresh()
  },
  deactivated(){
    this.leavePosition = this.$refs.scroll.scroll.y;
    // console.log(this.leavePosition);
  }
}

</script>
<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  /* line-height: 40px; */

  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */

}

/* .home{
  top:44px;
  left: 0;
  right: 0;
  overflow: hidden;

  position: absolute;
} */

.tabcontrol {
    position: relative;
    z-index: 9;
    left: 0;
    right: 0;
    background-color: #fff;
  }
  .goodsList{
    font-size: 8px;
  }
  .content{
    /* height: 600px; */
    top:44px;
    bottom:49px;
    right: 0px;
    left: 0px;
    overflow: hidden;
    position: absolute;
    /* overflow-y: scroll */
  }
  
</style>