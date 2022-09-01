<template>
<div class="text-base">
  <label>
    <div class="pb-1">{{ label }}</div>
    <input
      type="text"
      v-model="model"
      ref="inputField"
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
  emits: ['input'],
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        // Check if the input field is empty
        this.validateInput(value);
        // Emit value so parent can read it
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
    // Validation placed in method so parent can access if necessary
    validateInput(value) {
      if (!value) {
        this.error = 'This field cannot be empty';
        return false;
      }
      this.error = '';
      return true;
    },
    focusInput() {
      // Focus input on input field (called by parent)
			this.$nextTick(() => {
				this.$refs.inputField.focus();
  		});
		},
  },
}
</script>
