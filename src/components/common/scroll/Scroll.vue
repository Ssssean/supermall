<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll";

export default {
  data () {
    return {
      scroll:null,
      emit:{
        position:0,
        pullingUp:false
      }
    };
  },
  props:{
    probeType:{
      type:Number,
      default(){
        return 0;
      }
    },
    pulling:{
      type:Boolean,
      default(){
        return false
      }
    }
  },

  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pulling
    })

    this.scroll.on('scroll',(position)=>{
      this.emit.position=position.y
      this.$emit('scroll',this.emit)
    })

    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
    
  },
  methods:{
    backTop(){
      this.scroll.scrollTo(0,0,500)
    },
    finishPull(){
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll.refresh()
    },
    scrollTo(x,y,time=500){
    console.log('-----------------scrollTo');
      this.scroll.scrollTo(x,y,time)
    }
  }
}

</script>
<style scoped>

</style>