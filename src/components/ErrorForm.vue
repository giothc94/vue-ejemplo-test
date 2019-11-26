<template>
  <span v-show="error">
    <small
      v-bind:style="{ display: 'block' }"
      v-for="err in errorList"
      v-bind:key="err"
      class="text-danger"
      >{{ err }}</small
    >
  </span>
</template>
<script>
export default {
    name:'ErrorForm',
    props:{
        error:Boolean,
        errorList:Array
    }
}
</script>
