<template>
  <div>
    <div v-if="!showOpenCard" class="rental-card
      bg-white
      m-4 p-6
      rounded-lg
      shadow-xl
      flex flex-row justify-between items-center
    ">
      <div class="rental-address">
        <div class="h3 text-2xl font-semibold">Rental</div>
        <div class="h4 text-base text-gray-500">1-1 Chiyoda</div>
      </div>
      <font-awesome-icon
        :icon="['fas', 'angle-down']"
        class="text-cyan-600 text-xl"
        @click="showDetail(true)"
      />
    </div>
    <div v-if="showOpenCard">
      <RentalCardOpen @input="e => showDetail(e)"/>
    </div>
  </div>
  </template>
  
  <script>
  export default {
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