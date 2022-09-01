<template>
	<div class="new-location-toggle">
		<transition name="slide-new">
			<!-- Add New Location visible by default -->
			<div v-if="!showNewLocation"
				@click="showDetail(true)"
				class="new-location
					bg-cyan-600
					text-white text-base
					m-4 px-6 py-4
					rounded-lg shadow-xl
					flex flex-row justify-between items-center"
			>
				<p>Add New Location</p>
				<font-awesome-icon
					:icon="['fas', 'plus']"
					class="text-xl"
				/>
			</div>
		</transition>
		<transition name="slide-new-deets">
			<!-- New Location Details visible if '+' button clicked -->
			<div v-if="showNewLocation">
				<LocationDetail
					:edit="false"
					@input="showDetail"
					@save="newRental"
				/>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	emits: ['new'],
	data() {
		return {
			showNewLocation: false,
		}
	},
	methods: {
		newRental(data) {
			this.$emit('new', data);
		},
		showDetail(value) {
			this.showNewLocation = value;
		},
		// Note: this showDetail toggle could also be accomplished with
		//       v-bind:is="LocationDetail"
	},
};
</script>

<style>
.slide-new-enter, .slide-new-leave, .slide-new-leave-to, .slide-new-deets-enter {
	opacity: 0;
}
.slide-new-leave-active {
	transition: all 0.0s;
}
.slide-new-enter-to, .slide-new-deets-enter-to {
	opacity: 1;
}
.slide-new-deets-enter-active {
	transition: all 0.5s;
}
</style>