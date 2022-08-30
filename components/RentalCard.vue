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
        @click="showDetail(true)"
      />
    </div>
    <!-- Open Rental Card visible if '﹀' button clicked -->
    <div v-if="showOpenCard">
      <RentalCardOpen :rental="rental" @input="e => showDetail(e)"/>
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
      showDetail(value) {
        this.showOpenCard = value;
      },
    },
  };
  </script>