<template>
    <nav>
      <ul>
        <li><NuxtLink to="/">Главная</NuxtLink></li>
        <li><NuxtLink to="/admin/categories">Категори</NuxtLink></li>
        <li><NuxtLink to="/admin/products">Продукты</NuxtLink></li>
      </ul>
    </nav>
</template>

<script>
export default {
  layout: 'admin',
}
</script>

<style scoped>

</style>
