<!--<template>-->
<!--  <div class="page-index-admin">-->
<!--  <h3>Категории</h3>-->
<!--    <form v-on:submit.prevent>-->
<!--      {{ category.name }}-->
<!--      <div class="mb-3">-->
<!--        <label for="slug"><span class="for">Slug</span></label>-->
<!--        <input type="text" name="slug" v-model="category.slug" class="form-control" id="slug">-->
<!--      </div>-->
<!--      <div class="mb-3">-->
<!--        <label for="slug"><span class="for">Название</span></label>-->
<!--        <input type="text" v-model="category.name" class="form-control" id="name">-->
<!--      </div>-->
<!--      <div class="mb-3">-->
<!--        <input type="checkbox" class="checkbox" id="published">-->
<!--      </div>-->

<!--      <button  @click="getCategory" type="submit" class="btn" style="background-color: #000">Отправить</button>-->
<!--      <button  @click="createCategory" type="submit" class="btn" style="background-color: #000">Создать</button>-->
<!--    </form>-->
<!--  </div>-->
<!--</template>-->
<template>
  <Sidebar/>
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
