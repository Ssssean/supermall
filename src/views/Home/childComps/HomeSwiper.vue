<template>
  <swiper>
    <swiper-item v-for="item in banners.list" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="loadSwiperImage">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods:{
      loadSwiperImage(){
        this.$emit('loadSwiperImage')
      }
    }
  }
</script>

<style scoped>

</style>
