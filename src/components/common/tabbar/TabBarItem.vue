<!--  -->
<template>
  <div class="tabbar-item" @click="btnClick">
    <slot  v-if="!checked" name="item-icon"></slot>
    <slot  v-else name="item-icon-active"></slot>
    <div :class="{isActive:checked}">
      <slot name="item-text"></slot>
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  computed:{
    checked(){
      return this.path==this.$route.path
    }
  },

  methods: {
    btnClick(){
      if(!this.checked){
        this.$router.replace(this.path)
      }
    }
  },
  props:{
    path:String
  }
}

</script>
<style scoped>

  .tabbar-item{
    flex: 1;
    text-align: center;
    height:49px;
    font-size:14px
  }

  #tabbar img{
    height: 24px;
    width: 24px;
  }

    .isActive{
    color:red;
  }
</style>