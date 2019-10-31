<!--  -->
<template>
  <div class="recommends">
    <div v-for="item in recommends" class="recommends-item" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommends:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}

</script>
<style scoped>
  .recommends{
    /* margin-top: 40px; */
    display:flex;
    text-align: center;
    font-size:12px;
    box-shadow: 0 5px 0 0 rgba(0, 0, 0, 0.05)
  }

  .recommends-item{
    flex:1;
  }

  .recommends img{
    height: 100%;
    width: 100%;
    padding-top: 8px;
    padding-bottom: 12px;
  }
</style>