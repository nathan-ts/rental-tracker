<template>
	<main class="flex p-4 text-lg bg-gray-100 flex-col flex-1">
		<NewLocation />
		<div v-for="rental in rentals">
			<RentalCard :rental="rental" @delete="deleteRental"/>
		</div>
	</main>
</template>

<script>
import mockData from '../data/mock.js';
export default {
	data() {
    return {
			rentals: mockData,
    };
  },
	methods: {
		deleteRental(id) {
			console.log(`Deleting rental id ${id}`);
			this.rentals = this.rentals.filter(rental => rental.id !== id); 
		},
	}
};
</script>