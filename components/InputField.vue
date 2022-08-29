<template>

<div class="text-base">
	<label>
		<div class="pb-1">{{ label }}</div>
		<input
			type="text" :name="name" :value="value"
			@input="onInput"
			required="required"
			:class="{
				'w-full': true,
				border: true,
				'border-gray-400': !this.error,
				'border-red-300': this.error,
				'bg-transparent': true,
				'rounded-md': true,
				'p-2': true,
			}"
		/>
		<font-awesome-icon
			:icon="['fas', 'circle-exclamation']"
			class="text-xl text-red-300 float-right mr-3 -mt-8"
			v-show="error"
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
    }
  },
	data() {
    return {
      error: '',
			exclaimVisible: this.error ? "visible" : "hidden",
    };
  },
	methods: {
		// onInput sets an error if the field is changed and empty
    onInput(event) {
			const value = event.target.value;
      if (!value) {
        this.error = 'This field cannot be empty';
      }
      this.$emit('input', value);
    }
  },
	// watcher removes error whenever value is not empty
	watch: {
    value: {
      handler(value) {
        if (value) {
          this.error = '';
        }
      },
    },
  },
}
</script>

<style type="text/css">
	.errspan {
		position: relative;
	}
</style>