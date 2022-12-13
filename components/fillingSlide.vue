<template>
  <div class="page_filling">
  <slick
    ref="slick"
    :options="slickOptions"
    @afterChange="handleAfterChange"
    @beforeChange="handleBeforeChange"
    @breakpoint="handleBreakpoint"
    @destroy="handleDestroy"
    @edge="handleEdge"
    @init="handleInit"
    @reInit="handleReInit"
    @setPosition="handleSetPosition"
    @swipe="handleSwipe"
    @lazyLoaded="handleLazyLoaded"
    @lazyLoadError="handleLazyLoadError"
  >
    <a href="https://avatars.mds.yandex.net/i?id=d8fcb3ed41532eb5dd6726df9cb1314b-5236332-images-thumbs&n=13"
      ><img src="https://avatars.mds.yandex.net/i?id=d8fcb3ed41532eb5dd6726df9cb1314b-5236332-images-thumbs&n=13" alt=""
    /></a>
    <a href="https://avatars.mds.yandex.net/i?id=d8fcb3ed41532eb5dd6726df9cb1314b-5236332-images-thumbs&n=13"
      ><img src="https://avatars.mds.yandex.net/i?id=d8fcb3ed41532eb5dd6726df9cb1314b-5236332-images-thumbs&n=13" alt=""
    /></a>
    <a href="https://avatars.mds.yandex.net/i?id=d8fcb3ed41532eb5dd6726df9cb1314b-5236332-images-thumbs&n=13"
      ><img src="https://avatars.mds.yandex.net/i?id=d8fcb3ed41532eb5dd6726df9cb1314b-5236332-images-thumbs&n=13" alt=""
    /></a>
    <a href="https://avatars.mds.yandex.net/i?id=d8fcb3ed41532eb5dd6726df9cb1314b-5236332-images-thumbs&n=13"
      ><img src="https://avatars.mds.yandex.net/i?id=d8fcb3ed41532eb5dd6726df9cb1314b-5236332-images-thumbs&n=13" alt=""
    /></a>
    <a href="https://avatars.mds.yandex.net/i?id=d8fcb3ed41532eb5dd6726df9cb1314b-5236332-images-thumbs&n=13"
      ><img src="https://avatars.mds.yandex.net/i?id=d8fcb3ed41532eb5dd6726df9cb1314b-5236332-images-thumbs&n=13" alt=""
    /></a>
  </slick>
</div>
</template>

<script>
import Slick from "vue-slick";
export default {
  components: { Slick },

  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        // Any other options that can be got from plugin documentation
      },
    };
  },

  // All slick methods can be used too, example here
  methods: {
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },

    // Events listeners
    handleAfterChange(event, slick, currentSlide) {
      console.log("handleAfterChange", event, slick, currentSlide);
    },
    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      console.log("handleBeforeChange", event, slick, currentSlide, nextSlide);
    },
    handleBreakpoint(event, slick, breakpoint) {
      console.log("handleBreakpoint", event, slick, breakpoint);
    },
    handleDestroy(event, slick) {
      console.log("handleDestroy", event, slick);
    },
    handleEdge(event, slick, direction) {
      console.log("handleEdge", event, slick, direction);
    },
    handleInit(event, slick) {
      console.log("handleInit", event, slick);
    },
    handleReInit(event, slick) {
      console.log("handleReInit", event, slick);
    },
    handleSetPosition(event, slick) {
      console.log("handleSetPosition", event, slick);
    },
    handleSwipe(event, slick, direction) {
      console.log("handleSwipe", event, slick, direction);
    },
    handleLazyLoaded(event, slick, image, imageSource) {
      console.log("handleLazyLoaded", event, slick, image, imageSource);
    },
    handleLazyLoadError(event, slick, image, imageSource) {
      console.log("handleLazeLoadError", event, slick, image, imageSource);
    },
  },
};
</script>

<style scoped>
.page_filling {
  max-width: 724px;
  width: 100%;
}
.slick-slide {
  margin: 0 26px;
}

/* Родительский элемент */
.slick-list {
  margin: 0 -26px;
}
img {
  width: 100%;
}
.item {
}
</style>
