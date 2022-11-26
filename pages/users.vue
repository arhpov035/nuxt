<template>
  <div class="page-user">
    <PageTitle :title="this.title"/>
    <p>This is user page!</p>
  </div>
</template>

<script>
export default {
  layout: 'default',
  head() {
    return {
      title: this.title,
    }
  },
  data() {
    return {
      title: 'Пользователи'
    }
  }
}
</script>
