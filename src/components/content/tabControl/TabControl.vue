<!--  -->
<template>
  <div >
    <div class="tab-control-item" 
    :class="{active:index==currentIndex}" 
    v-for="(item,index) in titles" 
    :key="item.id" 
    @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentIndex:0
    };
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    itemClick(index){
      
      // this.currentIndex = index;
console.log(this.currentIndex+'---------------currentIdex');

      this.$emit('tabClick',index)
    }
  }
}

</script>
<style scoped>
  .tab-control{
    display: flex;
    height:40px;
    line-height: 40px;
    text-align: center;
    font-size:12px;
  }

  .tab-control-item{
    flex: 1;
  }

  .active span{
    border-bottom: 3px solid var(--color-tint);
    padding : 5px
  }

  .active{
    color: var(--color-high-text)
  }
</style>