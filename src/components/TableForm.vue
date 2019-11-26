<template>
    <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Edad</th>
              </tr>
            </thead>
            <tr v-for="(user, i) in userList" v-bind:key="i">
              <td>{{ i + 1 }}</td>
              <td>{{ user.nombre }}</td>
              <td>{{ user.apellido }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.edad }}</td>
              <td></td>
              <td>
                <i
                  v-on:click="deleteUser(i)"
                  v-bind:style="{ color: 'red' }"
                  class="far fa-trash-alt"
                ></i>
              </td>
              <td>
                <i
                  v-on:click="selectUser({ i, user })"
                  v-bind:style="{ color: 'green' }"
                  class="fas fa-pen"
                ></i>
              </td>
            </tr>
          </table>
</template>
<script>
export default {
    name:'TableForm',
    props:{
        userList:Array
    },
    methods:{
        deleteUser(index){
            this.$emit('delete',index)
        },
        selectUser(userSelected){
            this.$emit('select',userSelected)
        }
    }
}
</script>