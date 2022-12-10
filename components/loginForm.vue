<template>
  <div class="login-form">
    <div class="enter">
      <h3>Привет: {{ nameUser }}</h3>
      <a href="" @click.prevent="showForm" class="showForm">Войти</a>
    </div>

    <form v-on:submit.prevent>
      <div class="mb-3">
        <label for="email">Email</label>
        <!--        <div :class="{ error: isActiveEmail }" class="email">Введите корректный email: <span class="emailCorrect">admin@site.ru</span>-->
        <!--        </div>-->
        <!--        <div :class="{ errorFocus: isActiveFocus }" class="focus">образец email: <span class="emailCorrect">admin@site.ru</span>-->
        <!--        </div>-->
        <input
          v-model="user.email"
          v-on:input="valideFocus('email', '#email')"
          type="text"
          class="form-control"
          id="email"
        />
      </div>

      <div class="mb-3">
        <label for="password">Пароль</label>

        <div :class="{ error: error.isActiveErrorClass }" class="password">
          {{ error.messageError }}
        </div>

        <input
          v-model="user.password"
          type="password"
          v-on:input="valideFocus('password', '#password')"
          class="form-control pass"
          id="password"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Remember me</label>
      </div>
      <button @click="userLogin" type="submit" class="btn green">Login</button>
      <button @click="userLogout" type="submit" class="btn gray">Logout</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameUser: "Гость",
      user: {
        email: "",
        password: "",
      },
      error: {
        result: false,
        isActiveErrorClass: false,
        messageError: false,
        email: {
          text: "`Введите корректный email: admin@site.ru`",
          empty: false,
          value: false,
        },
        password: "",
      },
      isActiveEmail: false,
      isActivePassword: false,
      isActiveFocus: false,
      currentCountCharactersFromString: 0,
      loggedUser: {},
    };
  },
  methods: {
    async userLogin() {
      await this.$axios.get("http://api.tortam.ru/public/api/v1/sanctum/csrf-cookie").then((response) => {
        this.$axios
          .post("/auth/login", {
            email: this.user.email,
            password: this.user.password,
          })
          .then((response) => {
            this.loggetUser = response.data;
            console.log(this.user.email);
            console.log(this.user.password);
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error.data);
          });
      });

      // await this.$axios.get('http://api.tortam.ru/public/api/v1/sanctum/csrf-cookie').then(response => {
      //   console.log(response)
      // });

      // if (this.error.result) {
      //   await this.$axios.get('/sanctum/csrf-cookie').then(response => {
      //     this.$axios.post('/auth/login', {
      //       email: this.user.email,
      //       password: this.user.password,
      //     }).then((response) => {
      //       this.dd(this.user.email)
      //       this.getUser()
      //     }).catch((error) => {
      //       console.log(error.data)
      //     })
      //   })
      // } else {
      //   this.dd('Не прошел проверку')
      // }
    },
    async userLogout() {
      await this.$axios.$delete("http://api.tortam.ru/public/api/v1/auth/logout");
      this.loggedUser = "Гость";
    },
    async getUser() {
      this.loggedUser = await this.$axios.$get("http://api.tortam.ru/public/api/v1/auth/user");
      this.user.name = this.loggedUser.name;
    },
    dd($data) {
      console.log($data);
    },
    valideFocus(type = "", classEl = "") {
      const messageError = document.createElement("div");
      const messageSample = document.createElement("div");

      if (type == "email") {
        // div.setAttribute('class', 'myclass');
        if (document.querySelector(".messageSample") == null) {
          messageError.innerHTML =
            '<div  class="messageError">Введите корректный email</span></div>';
          messageSample.innerHTML =
            '<div  class="messageSample">образец email: <span class="emailCorrect">admin@site.ru</span></div>';
          document
            .querySelector("#email")
            .insertAdjacentElement("beforebegin", messageSample);
        }
        if (document.querySelector(".messageError") == null) {
          document
            .querySelector("#email")
            .insertAdjacentElement("beforebegin", messageError);
        }
      } else if (type == "password") {
        // if (document.querySelector('.messageError') == null){
        //   document.querySelector('#password').insertAdjacentElement('beforebegin', messageError);
        // }
      }

      if (this.user.email.length > this.currentCountCharactersFromString) {
        this.fadeIn(".messageSample", 500, "flex");
        this.fadeOut(".messageError", 1);

        this.currentCountCharactersFromString = this.user.email.length;

        // if (this.user.email) {
        if (this.user.email) {
          const messageSample = document.querySelector(".messageSample");
          if (
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
              this.user.email
            )
          ) {
            // focus.innerHTML = 'Эмейл введён корректно'
            messageSample.innerHTML = "Эмейл введён корректно";
            // this.error.email.value = true
            this.error.result = true;
          } else {
            messageSample.innerHTML =
              'образец email: <span class="emailCorrect">admin@site.ru</span>';
            this.error.result = false;
          }
        } else {
          messageSample.innerHTML =
            'образец email: <span class="emailCorrect">admin@site.ru</span>';
          this.error.result = false;
        }
      } else if (
        this.user.email.length <= this.currentCountCharactersFromString
      ) {
        messageSample.innerHTML =
          'образец email: <span class="emailCorrect">admin@site.ru</span>';

        this.currentCountCharactersFromString = this.user.email.length;
        this.fadeIn(".messageError", 500, "flex");
        this.fadeOut(".messageSample", 1);
        this.error.result = false;
      }
    },
    showForm() {
      this.fadeIn("form", 1000, "block");
    },
    valideHideShow() {
      this.dd(messageError.style.display);
    },
    fadeIn(element, timeout, display) {
      const el = document.querySelector(element);
      el.style.opacity = 0;
      el.style.display = display || "block";
      el.style.transition = `opacity ${timeout}ms`;
      setTimeout(() => {
        el.style.opacity = 1;
      }, 10);
    },
    fadeOut(element, timeout) {
      const el = document.querySelector(element);
      el.style.opacity = 1;
      el.style.transition = `opacity ${timeout}ms`;
      el.style.opacity = 0;

      setTimeout(() => {
        el.style.display = "none";
      }, timeout);
    },
  },
  mounted() {
    this.getUser();
  },
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
