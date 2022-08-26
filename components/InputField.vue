<template>

<div class="text-base">
	<div class="pb-1">Input: {{}} *</div>
	<input
		v-model="text" placeholder={{}}
		class="border-2 border-gray-500 rounded-md p-2"
	/>
</div>

</template>

<script>
export default {
	name: "InputField",
  props: {
    label: {
			required: true,
      type: String
    },
		placeholder: {
			required: true,
      type: String
    }
  }
}
</script>