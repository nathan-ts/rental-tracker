<template>
	<main class="flex p-4 text-lg bg-gray-100 flex-col flex-1">
		<NewLocation @new="newRental"/>
		<div v-for="rental in rentals.slice().reverse()">
			<RentalCard
				:rental="rental"
				@edit="(id, data) => editRental(id, data)"
				@delete="deleteRental"
			/>
		</div>
	</main>
</template>

<script>
import mockData from '../data/mock.js';
export default {
	data() {
    return {
			rentals: mockData,
			nextId: mockData.length,
    }
  },
	methods: {
		newRental(data) {
			const newRental = { ...data, id: this.nextId };
			this.rentals.push(newRental);
			this.nextId++;
		},
		editRental(id, data) {
			for (let i = 0; i < this.rentals.length; i++) {
				if (this.rentals[i].id === id) {
					// Vue only updates component if you splice, not change value directly
					this.rentals.splice(i, 1, { ...this.rentals[i], ...data });
				}
			}
		},
		deleteRental(id) {
			this.rentals = this.rentals.filter(rental => rental.id !== id); // makes a new array
		},
	}
};
</script>