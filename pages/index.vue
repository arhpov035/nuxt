<template>
  <div class="page-product">
    <PageTitle :title="this.title" />
    <section class="products">
      <div
        class="product-item box-shadow"
        v-for="product of allProducts"
        :key="product.id"
      >
        <div class="product-row row">
          <div class="product-content col-9">
            <div class="product-header">
              <NuxtLink :to="'product/' + product.slug">{{
                product.name
              }}</NuxtLink>
            </div>
            <div class="product-body">{{ product.intro_text }}</div>
            <div class="product-footer">{{ product.category.name }}</div>
          </div>
          <div class="product-image col-3">
            <img
              class="img-fluid"
              :src="`../images/${product.image}`"
              :alt="product.image"
            />
          </div>
        </div>
      </div>
    </section>
    <Button
      class="btn yelow"
      :action="fetchProducts"
      :btnValue="'Загрузить ещё'"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PageTitle from "~/components/PageTitle.vue";
import Button from "~/components/Button.vue";

export default {
  layout: "product",
  components: {
    PageTitle,
    Button,
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Самый лучший сайт о тортах и не только",
        },
      ],
    };
  },
  data() {
    return {
      title: "Торты",
    };
  },
  computed: {
    ...mapGetters({
      allProducts: "products/getProducts",
    }),
  },
  methods: {
    ...mapActions({
      fetchProducts: "products/fetchProducts",
    }),
  },
  async fetch({ store }) {
    const countProducts = await store.dispatch("products/countProducts");
    if (countProducts === 0) await store.dispatch("products/fetchProducts");
  },
};
</script>

<style scoped>
h1 {
  background: #fff;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  box-shadow: 0 2px 7px 0 rgb(0 0 0 / 4%);
  border-radius: 2px;
}
.page-product {
  max-width: 1380px;
  margin: 0 auto;
}
.products {
  display: grid;
  /*grid-template-columns: repeat(auto-fill, 23%);*/
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.product-item {
  display: flex;
  /*margin: 15px 0;*/
  /*box-shadow: 0 0 10px 5px rgb(221 221 221);*/
  /*border-radius: 10px;*/
  padding: 15px;
}

.product-row {
  display: grid;
  /*grid-template-columns: 1fr 1fr;*/
}
.product-image {
  align-self: end;
  margin-top: 15px;
}
.product-image img {
  width: 100%;
  border-radius: 8px;
}

.product-header a {
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.product-header a:hover {
  border-bottom: 2px solid #010101;
}
@media (max-width: 1016px) {
  .products {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 768px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .products {
    grid-template-columns: 1fr;
  }
}
</style>
