<template>
  <div class="ejemplo text-center">
    {{ message }}
    <button @click="envio()">Click me!</button>
    <div class="container">
      <div class="row text-left mt-5">
        <div class="col-md-6">
          <TableForm
            v-bind:userList="listaUsers"
            v-on:delete="eliminarRegistro"
            v-on:select="seleccionarRegistro"
          ></TableForm>
        </div>
        <div class="offset-md-1 col-md-5 card p-3">
          <ExampleForm
            v-on:addUser="agregarRegistro"
            v-on:editUser="editarUser"
            v-on:cleanForm="limpiarRegistro"
            v-bind:updateUser="updateUser"
            v-bind:userData="userData"
            v-bind:errorHandler="errorHandler"
          >
            <h1 slot="titleForm">Registrar</h1>
          </ExampleForm>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TableForm from "@/components/TableForm.vue";
import ExampleForm from "@/components/ExampleForm.vue";
import { lista } from "../../utils/mocks";
import validator from "../../utils/validators";
export default {
  data() {
    return {
      message: "Hola mundo feliz!",
      listaUsers: lista,
      userData: {
        id: null,
        name: "",
        apellido: "",
        edad: null,
        position: null,
        email: "",
        oldPosition: null
      },
      updateUser: false,
      errorHandler: {}
    };
  },
  components: {
    TableForm,
    ExampleForm
  },
  methods: {
    envio() {
      this.message = "Has dado un click";
      setTimeout(() => {
        this.message = "Hola mundo Feliz";
      }, 1000);
    },
    agregarRegistro() {
      this.errorHandler = validator(this.userData);
      if (this.errorHandler.error) {
        return;
      }
      this.listaUsers.splice(this.userData.position - 1, 0, {
        id: this.userData.id,
        nombre: this.userData.name,
        apellido: this.userData.apellido,
        edad: this.userData.edad,
        email: this.userData.email
      });
      this.limpiarRegistro();
    },
    eliminarRegistro(data) {
      if (this.updateUser) {
        return;
      }
      this.listaUsers.splice(data, 1);
    },
    seleccionarRegistro(data) {
      this.updateUser = true;
      this.userData.position = data.i + 1;
      this.userData.oldPosition = data.i;
      this.userData.id = data.user.id;
      this.userData.name = data.user.nombre;
      this.userData.apellido = data.user.apellido;
      this.userData.edad = data.user.edad;
      this.userData.email = data.user.email;
    },
    editarUser() {
      this.updateUser = false;
      this.eliminarRegistro(this.userData.oldPosition);
      this.agregarRegistro();
    },
    limpiarRegistro() {
      this.updateUser = false;
      this.userData.id = null;
      this.userData.name = "";
      this.userData.apellido = "";
      this.userData.edad = null;
      this.userData.position = null;
      this.userData.email = "";
    }
  }
};
</script>
