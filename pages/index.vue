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
			console.log(`Adding new rental: ${JSON.stringify(newRental)}`);
			this.rentals.push(newRental);
			this.nextId++;
		},
		editRental(id, data) {
			console.log(`Editing rental id ${id} with data: ${JSON.stringify(data)}`);
			for (let i = 0; i < this.rentals.length; i++) {
				if (this.rentals[i].id === id) {
					console.log(`Updating rental (old): ${JSON.stringify(this.rentals[i])}`)
					// Vue only updates component if you splice, not change value directly
					this.rentals.splice(i, 1, { ...this.rentals[i], ...data });
					console.log(`Updated rental (new): ${JSON.stringify(this.rentals[i])}`)
				}
			}
		},
		deleteRental(id) {
			console.log(`Deleting rental id ${id}`);
			this.rentals = this.rentals.filter(rental => rental.id !== id); // makes a new array
		},
	}
};
</script>