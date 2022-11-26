<template>
  <div class="page-index-admin">
    <h3>Продукты</h3>
    <form v-on:submit.prevent>
      {{ product.name }}
      <div class="mb-3">
        <label for="slug"><span class="for">Slug</span></label>
        <input
          type="text"
          name="slug"
          v-model="product.slug"
          class="form-control"
          id="slug"
        />
      </div>
      <div class="mb-3">
        <label for="slug"><span class="for">Категории</span></label>
        <select name="category">
          <!--          <option v-for="category of categories"-->

          <!--          <option v-for="category of categories"-->

          <!--          <option v-for="category of allCategories"-->
          <!--              :value="category.slug"-->
          <!--                  :selected="product.category.name === category.name"-->
          <!--          >{{ category.name }}</option>-->
        </select>
      </div>
      <div class="mb-3">
        <label for="slug"><span class="for">Название</span></label>
        <input
          type="text"
          v-model="product.name"
          class="form-control"
          id="name"
        />
      </div>
      <div class="mb-3">
        <label for="slug"><span class="for">Публикация</span></label>
        <input
          type="text"
          v-model="product.published"
          class="form-control"
          id="name"
        />
      </div>

      <div class="mb-3">
        <label for="image"><span class="for">Картинка</span></label>
        <input
          type="text"
          v-model="product.image"
          class="form-control"
          id="image"
        />
      </div>

      <div class="mb-3">
        <label for="intro_text"><span class="for">Превью</span></label>
        <textarea>

          {{ product.intro_text }}
        </textarea>
      </div>
      <div class="mb-3">
        <label for="intro_text"
          ><span class="for">Детельное описание</span></label
        >
        <textarea>
          {{ product.description }}
        </textarea>
      </div>
      <div class="mb-3">
        <label for="article"><span class="for">article</span></label>
        <input
          type="text"
          v-model="product.article"
          class="form-control"
          id="article"
        />
      </div>
      <div class="mb-3">
        <label for="price_up"><span class="for">price_up</span></label>
        <input
          type="text"
          v-model="product.price_up"
          class="form-control"
          id="price_up"
        />
      </div>
      <div class="mb-3">
        <label for="price_after"><span class="for">price_after</span></label>
        <input
          type="text"
          v-model="product.price_after"
          class="form-control"
          id="price_after"
        />
      </div>
      <div class="mb-3">
        <label for="type_products"
          ><span class="for">type_products</span></label
        >
        <input
          type="text"
          v-model="product.type_products"
          class="form-control"
          id="type_products"
        />
      </div>
      <div class="mb-3">
        <label for="coverage"><span class="for">coverage</span></label>
        <input
          type="text"
          v-model="product.coverage"
          class="form-control"
          id="coverage"
        />
      </div>
      <div class="mb-3">
        <label for="weight_photo"><span class="for">weight_photo</span></label>
        <input
          type="text"
          v-model="product.weight_photo"
          class="form-control"
          id="weight_photo"
        />
      </div>
      <div class="mb-3">
        <label for="number_tiers"><span class="for">number_tiers</span></label>
        <input
          type="text"
          v-model="product.number_tiers"
          class="form-control"
          id="number_tiers"
        />
      </div>
      <div class="mb-3">
        <label for="congratulatory_signature"
          ><span class="for">congratulatory_signature</span></label
        >
        <input
          type="text"
          v-model="product.congratulatory_signature"
          class="form-control"
          id="congratulatory_signature"
        />
      </div>

      <div class="mb-3">
        <input type="checkbox" class="checkbox" id="published" />
      </div>

      <button
        @click="updateProduct"
        type="submit"
        class="btn"
        style="background-color: #000"
      >
        Обновить
      </button>
      <button
        @click="createCategory"
        type="submit"
        class="btn"
        style="background-color: #000"
      >
        Создать
      </button>
    </form>
  </div>
</template>

<script>
export default {
  layout: "admin",

  head() {},
  data() {
    return {
      product: "",
      categories: "",
    };
  },
  methods: {
    async getCategory() {
      const req =
        "/category/" +
        this.$route.params.slug +
        "?slug=" +
        this.category.slug +
        "&name=" +
        this.category.name +
        "&published=1";
      this.dd(req);
      const res = await this.$axios.$put(req);

      const pathUrl = "/admin/category/" + this.category.slug;

      // this.dd(pathUrl)
      this.$nuxt.$router.replace({ path: pathUrl });
    },
    async createCategory() {
      const res = await this.$axios.$post(
        "categories?slug=new2&name=new2&published=1"
      );

      console.log("create");
      console.log(res);
    },
    async updateProduct() {
      const res = await this.$axios.$post(
        "categories?slug=new2&name=new2&published=1"
      );

      console.log("create");
      console.log(res);
    },
    dd($data) {
      console.log($data);
    },
  },
  async fetch() {
    this.product = await this.$axios.$get(
      "/product/" + this.$route.params.slug
    );
    this.categories = await this.$axios.$get(
      "/categories/"
    );



    this.dd(this.$route.params.slug);
    this.dd(this.categories);
  },
};
</script>

<style scoped>
.mb-3 {
  margin-top: 20px;
}
</style>
