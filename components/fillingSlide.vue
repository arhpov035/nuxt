<template>
  <div class="filling slide">
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
    <div><h3>5</h3></div>
    <div><h3>6</h3></div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
      { hid: 'stripe', src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js', defer: true },
        { hid: 'stripe', src: '/swiper.js', defer: true },
        { hid: 'stripe', src: '/script.js', defer: true },
      ]
    };
  },
};
</script>

<style scoped>
.filling {
  max-width: 724px;
  width: 100%;
}
</style>
