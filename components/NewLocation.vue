<template>
	<div>
		<!-- Add New Location visible by default -->
		<div v-if="!showNewLocation" class="new-location
			bg-cyan-600
			text-white
			text-base
			m-4 px-6 py-4
			rounded-lg
			shadow-xl
			flex flex-row justify-between items-center
		">
			<p>Add New Location</p>
			<font-awesome-icon
				:icon="['fas', 'plus']"
				class="text-xl"
				@click="showDetail(true)"
			/>
		</div>
		<!-- New Location Details visible if '+' button clicked -->
		<div v-if="showNewLocation">
			<LocationDetail :edit="false" @input="e => showDetail(e)"/>
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
		showDetail(value) {
			this.showNewLocation = value;
		},
	},
};
</script>