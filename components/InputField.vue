<template>

<div class="text-base">
	<div class="pb-1">{{ label }}</div>
	<input
		v-model="text"
		class="w-full border-2 border-gray-400 rounded-md p-2"
	/>
</div>

</template>

<script>
export default {
  props: {
    label: {
			required: true,
      type: String
    },
  }
}
</script>