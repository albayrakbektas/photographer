<template>
  <div class="container">
    <div class="login">
      <CardMain>
        <form @submit.prevent="login">
          <FormField :form-field="nameField" v-model="nameField.value" />
          <FormField
            :form-field="passwordField"
            v-model="passwordField.value"
          />
          <div class="form-row">
            <div class="form-button-field">
              <ButtonMain :button="button" />
            </div>
          </div>
        </form>
      </CardMain>
      <div v-show="errorMessage" class="error-message">
        <div class="card">
          <h2>Invalid Admin</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormField from "@/components/Page/Contact/FormField";
import ButtonMain from "@/components/Button/ButtonMain";
import axios from "axios";
import CardMain from "@/components/Card/CardMain";
export default {
  name: "LoginView",
  components: { CardMain, ButtonMain, FormField },
  watch: {
    "nameField.value": function (val) {
      this.name = val;
    },
    "passwordField.value": function (val) {
      this.password = val;
    },
  },
  data() {
    return {
      name: "",
      password: "",
      errorMessage: false,
      nameField: {
        tag: "input",
        type: "text",
        name: "name",
        placeholder: "Username",
        value: "",
        icon: "fa-solid fa-user",
      },
      passwordField: {
        tag: "input",
        type: "password",
        name: "password",
        placeholder: "Password",
        value: "",
        icon: "fa-solid fa-user",
      },
      button: {
        type: "submit",
        content: "Login",
      },
    };
  },
  methods: {
    login() {
      let req = axios.create({
        baseURL: "https://photographer-albayrakbektas.vercel.app/api/",
      });
      req
        .post("/login", {
          name: this.name,
          password: this.password,
        })
        .then(() => {
          this.errorMessage = false;
          this.$router.push("/admin");
        })
        .catch((err) => {
          if (err.response.data) {
            this.errorMessage = true;
            this.nameField.value = "";
            this.passwordField.value = "";
          }
        });
    },
  },
  mounted() {
    this.$store.state.isLoading = false;
    this.$store.state.isImageLoaded = true;
  },
};
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
}
.login {
  position: relative;
  width: 50%;
  margin: auto;
  translate: 0 50%;
}
.error-message {
  position: absolute;
  bottom: 30px;
  right: 30px;
}
.card {
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
}
@media (max-width: 500px) {
  .login {
    width: 90%;
  }
}
</style>
