<template>
  <h1>Категории</h1>
</template>
<script>

import Sidebar from '~/components/Sidebar.vue'

export default {
  layout: 'admin',
  components: {
    Sidebar
  },
  head() {

  },
  data() {
    return {
      category: '',
      slugCanegory: '',
      nameCategory: '',
    }
  },
  // methods: {
  //   async getCategory(){
  //
  //     const req = '/category/'+this.$route.params.slug+'?slug='+this.category.slug+'&name='+this.category.name+'&published=1';
  //     this.dd(req)
  //     const res = await this.$axios.$put(req);
  //
  //     const pathUrl = '/admin/category/' + this.category.slug
  //
  //     // this.dd(pathUrl)
  //     this.$nuxt.$router.replace({ path: pathUrl});
  //
  //
  //
  //   },
  //   async createCategory(){
  //     const res = await this.$axios.$post('categories?slug=new2&name=new2&published=1');
  //
  //
  //     console.log('create')
  //     console.log(res)
  //   },
  //   dd($data) {
  //     console.log($data)
  //   },
  // },
  // async fetch(){
  //   this.category = await this.$axios.$get('/category/'+this.$route.params.slug);
  //   this.dd(this.category)
  // }

}
</script>

<style scoped>
.mb-3 {
  margin-top: 20px;
}
</style>
