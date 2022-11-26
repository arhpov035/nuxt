<template>
  <div class="page-product">
<!--    <PageTitle :title="this.product.name"/>-->
    <h1>{{ this.product.name }}</h1>
    <div class="product-desc">
    <img class="img-fluid" :src="`../${product.image}`" :alt="product.image">
    </div>
<!--    <img class="img-fluid" src="@/static/images/196630897_1151373371995541_615135495759398720_n.jpg" :alt="product.image">-->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import PageTitle from '~/components/PageTitle.vue'

export default {
  layout: 'product',
  head() {
    return {
      title: this.metaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
      ],
    }
  },
  data() {
    return {
      metaTitle: '',
      product: '',
    }
  },
  async fetch() {
    this.product = await this.$axios.$get('/product/'+this.$route.params.slug);
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

}
</script>

<style scoped>
  .page-product {
    /*background-color: #fff;*/
    /*padding-left: 20px;*/
    /*padding-right: 20px;*/
    /*padding-bottom: 20px;*/
  }
  .product-desc{
    background-color: #fff;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    box-shadow: 0 2px 7px 0 rgb(0 0 0 / 4%);
    border-radius: 2px;
  }
  .product-desc img{
   width: 100%;
    max-width: 330px;
  }
  h1{
    background-color: #fff;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    box-shadow: 0 2px 7px 0 rgb(0 0 0 / 4%);
    border-radius: 2px;
  }
</style>
