<!--  -->
<template>
  <div>我是详情页</div>
</template>

<script>
import { getHomeMultidata } from "../../network/home";
export default {
  data () {
    return {
      goodsIid:null
    };
  },
  methods:{
    getGoodsDetail(iid){
      getHomeMultidata(iid).then(res=>{
        // console.log(res);
      })
    }
  },
  mounted(){
    this.$bus.$on('goodsDetail',(iid)=>{
      this.goodsIid = iid;
    }),
    this.getGoodsDetail(this.goodsIid)
  }
}

</script>
<style scoped>
</style>