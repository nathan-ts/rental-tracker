<template>
		<div class="new-location-detail
		bg-white
		m-4
		rounded-lg
		shadow-xl
		flex flex-col justify-between
	">
		<div class="card-header
			w-full
			p-6
			flex flex-row justify-between items-center
		">
			<div class="h3 text-base font-bold">{{title}} Location</div>
			<!-- change New Location to a variable depending on edit status passed in -->
			<font-awesome-icon :icon="['fas', 'xmark']" class="text-xl text-gray-300"/>
		</div>
		<form>
			<div class="card-info
				w-full
				p-6
				space-y-6
			">
				<InputField label="Title *"/>
				<InputField label="Enter the address *"/>
				<div class="contact-info-header py-2
					border-b-2 border-cyan-100
					text-sm text-cyan-500 tracking-wide
				">
					CONTACT INFORMATION
				</div>
				<InputField label="Full name *"/>
				<InputField label="Job position *"/>
				<InputField label="Email address *"/>
				<InputField label="Phone *"/>
				<InputField :label="label" v-model="model" />
				<p>The value is: {{ model }}</p>
			</div>
			<div class="card-save
				p-6
				flex flex-row
			">
				<input type="submit" value="Save"
					class="save-btn rounded-md
					bg-cyan-600 text-white
					px-6 py-2
				" />
			</div>
		</form>

	</div>
</template>

<script>
export default {
	props: {
		edit: {
				type: Boolean,
				default: false,
		},
	},
	data() {
		return {
			label: "Test",
			model: "",
			title: this.edit ? "Edit" : "New",
		};
	},
}
</script>