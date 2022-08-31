<template>
	<div class="new-location-toggle">
		<!-- Add New Location visible by default -->
		<div v-if="!showNewLocation"
			@click="showDetail(true)"
			class="new-location
				bg-cyan-600
				text-white
				text-base
				m-4 px-6 py-4
				rounded-lg
				shadow-xl
				flex flex-row justify-between items-center"
		>
			<p>Add New Location</p>
			<font-awesome-icon
				:icon="['fas', 'plus']"
				class="text-xl"

			/>
		</div>
		<!-- New Location Details visible if '+' button clicked -->
		<div v-if="showNewLocation">
			<LocationDetail
				:edit="false"
				@input="showDetail"
				@save="newRental"
			/>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showNewLocation: false,
		}
	},
	methods: {
		newRental(data) {
			console.log(`NL - adding new rental`);
			this.$emit('new', data);
		},
		showDetail(value) {
			console.log(`NL - show new location detail: ${value}`);
			this.showNewLocation = value;
		},
	},
};
</script>