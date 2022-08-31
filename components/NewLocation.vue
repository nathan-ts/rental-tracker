<template>
	<div class="new-location-toggle">
		<transition name="slide-new">
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
	},
};
</script>

<style>
.slide-new-enter-active {
  transition: opacity 0.7s;
}
.slide-new-leave-active {
	transition: opacity 0.7s;
}
.slide-new-enter, .slide-new-leave-to {
  opacity: 0;
}
.slide-new-enter-to, .slide-new-leave {
	opacity: 1;
}
</style>