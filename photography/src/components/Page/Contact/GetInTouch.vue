<template>
  <div>
    <HeaderRow :header="header" />
    <CardMain>
      <form @submit="sendMessage">
        <FormField
          v-for="(item, index) of formFieldList"
          :form-field="item"
          v-model="item.value"
          :key="index"
        />
        <div class="form-button-field">
          <button type="submit">
            <span>SEND MESSAGE</span>
          </button>
        </div>
      </form>
    </CardMain>
  </div>
</template>

<script>
import HeaderRow from "@/components/Header/HeaderRow";
import CardMain from "@/components/Card/CardMain";
import FormField from "@/components/Page/Contact/FormField";
export default {
  name: "GetInTouch",
  components: { FormField, CardMain, HeaderRow },
  methods: {
    sendMessage(e) {
      e.preventDefault();
    },
  },
  data() {
    return {
      header: {
        title: "Get in touch",
      },
      formFieldList: [
        {
          tag: "input",
          type: "text",
          name: "name",
          placeholder: "Name",
          value: "",
          icon: "fa-solid fa-user",
        },
        {
          tag: "input",
          type: "email",
          name: "email",
          placeholder: "Email",
          value: "",
          icon: "fa-regular fa-envelope",
        },
        {
          tag: "textarea",
          name: "message",
          placeholder: "Message",
          value: "",
          icon: "fa-regular fa-message",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
button {
  background-color: rgba(255, 0, 0, 1);
  height: 45px;
  padding: 0 35px;
  font-weight: 600;
  font-size: 11px;
  display: grid;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease-in-out;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
  }
  span {
    color: #20202a;
  }
}
</style>
