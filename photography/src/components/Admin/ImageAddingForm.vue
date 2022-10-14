<template>
  <div class="image-adding-form-container">
    <CardMain>
      <form @submit.prevent="submitFiles">
        <div class="form-row row-file">
          <span class="selected-file">{{ files[0] ? files[0].name : "" }}</span>
          <label class="label-file" for="file"></label>
          <input type="file" name="file" @change="changeFiles" required />
          <i class="fa-solid fa-cloud-arrow-up"></i>
        </div>
        <!--        <div class="form-row">-->
        <!--          <div class="label-row"></div>-->
        <!--          <input type="text" name="album" v-model="album" required />-->
        <!--        </div>-->
        <FormField :form-field="albumField" v-model="albumField.value" />
        <FormField :form-field="textareaField" v-model="textareaField.value" />
        <!--        <div class="form-row">-->
        <!--          <div class="label-row"></div>-->
        <!--          <input-->
        <!--            type="text"-->
        <!--            name="description"-->
        <!--            v-model="description"-->
        <!--            required-->
        <!--          />-->
        <!--        </div>-->
        <div class="form-row">
          <div class="form-button-field">
            <ButtonMain :button="button" />
          </div>
        </div>
      </form>
    </CardMain>
  </div>
</template>

<script>
import axios from "axios";
import CardMain from "@/components/Card/CardMain";
import FormField from "@/components/Page/Contact/FormField";
import ButtonMain from "@/components/Button/ButtonMain";

export default {
  name: "ImageAddingForm",
  components: { ButtonMain, FormField, CardMain },
  data() {
    return {
      album: "",
      description: "",
      files: [],
      albumField: {
        tag: "input",
        type: "text",
        name: "album",
        placeholder: "Album",
        value: "",
        icon: "fa-solid fa-user",
      },
      textareaField: {
        tag: "textarea",
        name: "description",
        placeholder: "Description",
        value: "",
        icon: "fa-solid fa-user",
      },
      button: {
        type: "submit",
        content: "Save",
      },
    };
  },
  methods: {
    changeFiles(e) {
      this.files = e.target.files;
    },
    submitFiles(e) {
      e.preventDefault();
      let formData = new FormData();
      formData.append("file", this.files[0]);
      formData.append("album", this.albumField.value);
      formData.append("description", this.textareaField.value);
      axios.post(
        "https://photographer-albayrakbektas.vercel.app/api/upload/image",
        formData
      );
      // fetch("https://photographer-albayrakbektas.vercel.app/api/upload/image", {
      //   method: "post",
      // })
      //   .then((response) => console.log(response))
      //   .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped lang="scss">
.image-adding-form-container {
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% 50%;
  width: 50vw;
  height: 50vh;
  margin: auto;
}
.form-row {
  position: relative;
}
.row-file {
  height: 50px;
  margin-bottom: 30px;
  * {
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
  }
}
input {
  width: 100%;
}
input[type="file"],
input[type="file"]::-webkit-file-upload-button {
  position: absolute;
  height: 50px;
  width: 70px;
  opacity: 0;
  pointer-events: all;
  cursor: pointer;
  z-index: 9999;
}
.label-file {
  font-size: 50px;
  cursor: pointer;
}
.fa-cloud-arrow-up {
  font-size: 50px;
  cursor: pointer;
}
.selected-file {
  font-size: 0.8rem;
  translate: -50% 25px;
}
button {
  cursor: pointer;
}
</style>
