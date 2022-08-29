<template>

<div class="text-base">
	<label>
		<div class="pb-1">{{ label }}</div>
		<input
			type="text" :name="name" :value="value"
			@input="$emit('input', $event.target.value)"
			required="required"
			class="w-full border border-gray-400 rounded-md p-2"
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
}
</script>