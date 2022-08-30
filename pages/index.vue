<template>
	<main class="flex p-4 text-lg bg-gray-100 flex-col flex-1">
		<NewLocation />
		<div v-for="rental in rentals">
			<RentalCard :rental="rental"/>
		</div>
	</main>
</template>

<script>
import mockData from '../data/mock.js';
console.log(mockData);
export default {
	data() {
    return {
			rentals: mockData,
    };
  },
};
</script>