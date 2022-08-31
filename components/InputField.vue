<template>
  <div class="text-base">
    <label>
      <div class="pb-1">{{ label }}</div>
      <input
        type="text"
        v-model="model"
        :class="{
          'border-gray-400': !this.error,
          'border-red-300': this.error,
          'border w-full bg-transparent rounded-md p-2': true,
        }"
      />
      <font-awesome-icon
        v-if="error"
        :icon="['fas', 'circle-exclamation']"
        class="text-xl text-red-300 float-right mr-3 -mt-8"
      />
    </label>
    <div v-if="error" class="text-sm text-red-300 pt-1">{{ error }}</div>
  </div>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        required: true,
        type: String,
      },
      value: {
        type: String,
      },
      default: {
        type: String,
      },
    },
    computed: {
      model: {
        get() {
          return this.value;
        },
        set(value) {
          // error checking
          this.validateInput(value);
          // emit value so parent can read it
          this.$emit('input', value);
        },
      },
    },
    data() {
      return {
        error: '',
      };
    },
    methods: {
      validateInput(value) {
        if (!value) {
          this.error = 'This field cannot be empty';
          return false;
        }
        this.error = '';
        return true;
      }
    },
  }
  </script>
  
  <style>
  </style>