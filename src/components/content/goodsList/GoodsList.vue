<!--  -->
<template>
  <div class="goods">
    <goods-list-item v-for="item in goodsListDetail.list" :key=item.id :goodsItem="item" :show="show">
    </goods-list-item>
  </div>
  
</template>

<script>

import GoodsListItem from './GoodsListItem'

export default {
  data () {
    return {
      scroll:null,
      show:false
    };
  },

  components: {GoodsListItem},
  props:{
    goodsListDetail:{
      type:Object,
      default(){
        return {};
      }
    }
  }
}

</script>
<style scoped>

.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }

</style>