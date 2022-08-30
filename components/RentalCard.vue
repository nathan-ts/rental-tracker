<template>
  <div class="rental-card-toggle">
    <!-- Add Closed Rental Card visible by default -->
    <div v-if="!showOpenCard" class="rental-card
      bg-white
      m-4 p-6
      rounded-lg
      shadow-xl
      flex flex-row justify-between items-center
    ">
      <div class="hq-address">
        <div class="h3 text-2xl font-semibold">{{ rental.title }}</div>
        <div class="h4 text-base text-gray-500">{{ rental.address }}</div>
      </div>
      <font-awesome-icon
        :icon="['fas', 'angle-down']"
        class="text-cyan-600 text-xl"
        @click="showOpen(true)"
      />
    </div>
    <!-- Open Rental Card visible if '﹀' button clicked -->
    <div v-if="showOpenCard">
      <RentalCardOpen
        :rental="rental"
        @input="e => showOpen(e)"
        @delete="deleteRental()"
      />
    </div>
  </div>
  </template>
  
  <script>
  export default {
    props: {
      rental: {
      }
    },
    data() {
      return {
        showOpenCard: false,
      };
    },
    methods: {
      showOpen(value) {
        console.log(`RC - show open rental card: ${value}`);
        this.showOpenCard = value;
      },
      deleteRental() {
        console.log(`RC - deleting rental: ${this.rental.id}`);
        this.showOpenCard = false;
        this.$emit('delete', this.rental.id);
      }
    },
  };
  </script>
  