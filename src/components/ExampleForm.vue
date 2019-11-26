<template>
  <div>
      <slot name="titleForm" ></slot>
    <div class="form-group">
      <label for="id">ID</label>
      <input class="form-control" type="text" name="id" v-model="userData.id" />
      <ErrorForm
        v-bind:error="errorHandler.error"
        v-bind:errorList="errorHandler.errorId"
      ></ErrorForm>
    </div>
    <div class="form-group">
      <label for="name">Nombre</label>
      <input
        class="form-control"
        type="text"
        name="name"
        v-model="userData.name"
      />
      <ErrorForm
        v-bind:error="errorHandler.error"
        v-bind:errorList="errorHandler.errorName"
      ></ErrorForm>
    </div>
    <div class="form-group">
      <label for="apellido">Apellido</label>
      <input
        class="form-control"
        type="text"
        name="apellido"
        v-model="userData.apellido"
      />
      <ErrorForm
        v-bind:error="errorHandler.error"
        v-bind:errorList="errorHandler.errorApellido"
      ></ErrorForm>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input
        class="form-control"
        type="text"
        name="email"
        v-model="userData.email"
      />
      <ErrorForm
        v-bind:error="errorHandler.error"
        v-bind:errorList="errorHandler.errorEmail"
      ></ErrorForm>
    </div>
    <div class="form-group">
      <label for="edad">Edad</label>
      <input
        class="form-control"
        type="text"
        name="edad"
        v-model="userData.edad"
      />
      <ErrorForm
        v-bind:error="errorHandler.error"
        v-bind:errorList="errorHandler.errorEdad"
      ></ErrorForm>
    </div>
    <div class="form-group">
      <label for="position">Posicion</label>
      <input
        class="form-control"
        type="number"
        name="position"
        v-model="userData.position"
      />
      <ErrorForm
        v-bind:error="errorHandler.error"
        v-bind:errorList="errorHandler.errorPosition"
      ></ErrorForm>
    </div>

    <button
      v-if="!updateUser"
      v-on:click="addUser"
      class="form-control btn btn-success"
      type="button"
    >
      Agregar
    </button>
    <button
      v-if="updateUser"
      @click="editUser()"
      class="btn btn-success mr-3"
      type="button"
    >
      Editar
    </button>
    <button
      v-if="updateUser"
      @click="cleanForm()"
      class="btn btn-warning"
      type="button"
    >
      Cancelar
    </button>
  </div>
</template>
<script>
import ErrorForm from "@/components/ErrorForm.vue";
export default {
  name: "ExampleForm",
  props: {
    updateUser: Boolean,
    errorHandler: Object,
    userData: Object
  },
  methods: {
    addUser() {
      this.$emit("addUser");
    },
    editUser() {
      this.$emit("editUser");
    },
    cleanForm() {
      this.$emit("cleanForm");
    }
  },
  components: {
    ErrorForm
  }
};
</script>
