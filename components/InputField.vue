<template>

<div class="text-base">
	<label>
		<div class="pb-1">{{ label }}</div>
		<input
			type="text" :name="name" :value="value"
			@input="onInput"
			required="required"
			class="w-full border border-gray-400 bg-transparent rounded-md p-2"
		/>
		<font-awesome-icon
			:icon="['fas', 'circle-exclamation']"
			class="text-xl text-red-300 float-right mr-3 -mt-8"
			visibility=hidden
		/>
	</label>
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
	methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    }
  },
}
</script>

<style type="text/css">
	.errspan {
		position: relative;
	}
</style>