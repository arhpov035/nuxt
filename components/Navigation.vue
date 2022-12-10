<template>
    <nav>
      <ul>
        <li><NuxtLink to="/">Главная</NuxtLink></li>
        <li><NuxtLink to="/product">Торты</NuxtLink></li>
        <li><a href="http://api.tortam.ru/admin/login" target="_blank">Админка</a></li>
      </ul>
    </nav>
</template>


<style scoped>
ul{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
}
a{
  color: #010101;
  text-decoration: none;
  text-transform: uppercase;
}
a:hover{
  border-bottom: 2px solid #010101;
}


</style>
