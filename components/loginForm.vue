<template>
  <div class="login-form">

  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.focus {
  display: none;
  border: 1px solid green;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 5px 10px 5px 5px;
  font-size: 14px;
}

.email,
.password {
  display: none;
  color: darkred;
  border: 1px solid darkred;
  font-size: 12px;
  padding: 2px;
  width: 100%;
  border-radius: 2px;
  background-color: #f3f3f4;
}

.error,
.errorFocus {
  display: block;
}

.login-form {
  background-color: #fff;
  box-shadow: 0 2px 7px 0 rgb(0 0 0 / 4%);
  border-radius: 2px;
  padding: 0px 15px 10px 15px;
}

h3 {
  padding-top: 1rem;
}

.emailCorrect {
  color: #4cae4c;
}

.error,
.errorFocus {
  display: block;
}
.enter {
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
}
@media (max-width: 480px) {
  .login-form {
    position: fixed;
    width: 100%;
    background-color: #fff;
  }
  h3 {
    padding-top: inherit;
  }
  form {
    display: none;
  }
}
</style>
