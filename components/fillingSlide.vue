<template>
  <div class="filling slide">
    <div class="item">
      <img src="/images/filling/nachinka-muss-chernaya-smorodina.jpg" alt="" />
    </div>
    <div class="item">
      <img src="/images/filling/nachinka-napoleon.jpg" alt="" />
    </div>
    <div class="item">
      <img src="/images/filling/nachinka-pancho.jpg" alt="" />
    </div>
    <div class="item">
      <img src="/images/filling/nachinka-tri-shokolada.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          hid: "stripe",
          src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
          defer: true,
        },
        { hid: "stripe", src: "/slick/slick.js", defer: true },
        { hid: "stripe", src: "/js/script.js", defer: true },
      ],
    };
  },
};
</script>

<style scoped>
.filling {
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
img{
  width: 100%;
}
.item {
}
</style>
