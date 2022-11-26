<template>
<!--  <div class="layout-admin">-->
    <main class="page-admin">
      <div class="container-admin">
        <div class="sidebar">
          <div class="category">
            <div class="category-items">
              <div class="category-item">
                <div class="h2">Категории</div>
                <div class="block-category" v-for="category of categories" :key="category.id">
                  <nav>
                    <ul class="admin-menu">
                      <li>
                        <NuxtLink :to="'/admin/category/'+category.slug">{{ category.name }}</NuxtLink>
                        <ul class="children" v-for="product of  category.products" :key="products.id">
                          <li><NuxtLink :to="'/admin/category/product/'+product.slug" :dataName="'productData'">{{ product.name }}</NuxtLink></li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content">

        </div>
      </div>
    </main>
<!--  </div>-->
</template>




<script>



export default {

  data() {
    return {
      categories: '',
      products: '',
      user: {
        email: '',
        password: '',
      },
      metaTitle: '',
      product: '',
    }
  },
  methods: {

  },
  async fetch(){
    this.categories = await this.$axios.$get('/categories/');
    // let numCallbackRuns = 0
    // this.categories.forEach((element) => {
    //   let numCallbackRuns2 = 0
    //   element.products.forEach((product) => {
    //     this.categories[numCallbackRuns]
    //     numCallbackRuns++
    //     numCallbackRuns2++
    //   })
    //
    // })
    this.products = await this.$axios.$get('/products/');

    console.log(this.categories)
  }

}
</script>
