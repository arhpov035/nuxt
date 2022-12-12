<template>
  <div class="page-product">
    <div class="container">
      <div class="product-desc">
        <div class="img">
          <img
            class="img-fluid"
            :src="`../images/${product.image}`"
            :alt="product.image"
          />
        </div>
        <div class="rigth">
          <h1>{{ this.product.name }}</h1>
          <div class="price_block">
            <div class="before item">
              <div class="currency">₽</div>
              <div class="info">
                <div class="num">1400 руб/кг до 4 кг</div>
                <div class="desc">декор и фигурки не входят в цену</div>
              </div>
            </div>
            <div class="after item">
              <div class="currency">₽</div>
              <div class="info">
                <div class="num">2150 руб/кг от 4 кг</div>
                <div class="desc">декор и фигурки входят в цену</div>
              </div>
            </div>
          </div>
          <Weight />
          <fillingSlide />
        </div>
      </div>
      <orderLeftSideBar/>
    </div>
    <!--  -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Weight from "~/components/Weight.vue";
import fillingSlide from "~/components/fillingSlide.vue";

export default {
  layout: "product",
  components: {
    Weight,
    fillingSlide
  },
  head() {
    return {
      title: this.metaTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description,
        },
      ],
    };
  },
  data() {
    return {
      metaTitle: "",
      product: "",
    };
  },
  async fetch() {
    this.product = await this.$axios.$get(
      "/product/" + this.$route.params.slug
    );
    this.metaTitle = this.product.intro_text;
    this.description = this.product.description;
  },
  // components: { PageTitle },
  // methods: {
  //   async getProduct(){
  //     console.log(this.$route);
  //     console.log(this.$route.params.id);
  //    this.product = await this.$axios.$get('/product/'+this.$route.params.id);
  //    this.title = this.product.name;
  //   },
  //
  // },
  // mounted() {
  //   this.getProduct();
  // }
};
</script>

<style scoped>
.page-product {
  /*background-color: #fff;*/
  /*padding-left: 20px;*/
  /*padding-right: 20px;*/
  /*padding-bottom: 20px;*/
}
.product-desc {
  background-color: #fff;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  box-shadow: 0 2px 7px 0 rgb(0 0 0 / 4%);
  border-radius: 2px;
  display: flex;
  gap: 20px;
}
.product-desc .img {
  max-width: 330px;
}
.product-desc img {
  width: 100%;
}
.product-desc .rigth {
  width: 100%;
}
h1 {
  /* background-color: #fff;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    box-shadow: 0 2px 7px 0 rgb(0 0 0 / 4%);
    border-radius: 2px; */
  color: #414141;
}

.price_block {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.price_block .item {
  display: flex;
  align-items: center;
}

.currency {
  font-size: 45px;
  padding-right: 10px;
}
.before .currency {
  color: #f33;
}
.after .currency {
  color: #009ce6;
}
.num {
  font-size: 14px;
  font-weight: bold;
}
.desc {
  font-size: 12.5px;
  color: #414141;
}
</style>
