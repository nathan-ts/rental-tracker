<template>
  <div class="rental-card-open-toggle">
    <div v-if="!showEditDetail" class="rental-card-open
      bg-white
      m-4
      rounded-lg shadow-xl
      flex flex-col justify-between items-center
    ">
      <div class="card-header
        w-full rounded-t-lg shadow-lg
        p-6
        bg-gray-400
        text-white
        flex flex-row justify-between items-center
      ">
        <div class="hq-address">
          <div class="h3 text-2xl font-semibold">{{ rental.title }}</div>
          <div class="h4 text-base">{{ rental.address }}</div>
        </div>
        <font-awesome-icon
          :icon="['fas', 'angle-up']"
          class="text-xl"
          @click="showOpen(false)"
        />
      </div>
      <div class="card-body
        w-full
        py-6 px-8 space-y-2
        text-base
      ">
        <div class="name text-xl font-bold">{{ rental.name }}</div>
        <div class="title">{{ rental.position }}</div>
        <div class="email text-cyan-500">
          <a :href="'mailto:' + rental.email">
            {{ rental.email }}
          </a>
        </div>
        <div class="phone">{{ rental.phone }}</div>
      </div>
      <div class="card-footer
        w-full rounded-b-lg
        pb-6 px-8
      ">
        <div class="line-break
          border-t-2 border-cyan-100
          pt-6
          flex flex-row justify-between
          text-xs tracking-wide
        ">
          <div class="edit-icon flex flex-row content-center space-x-3 text-gray-400">
            <font-awesome-icon
              :icon="['fas', 'pen']"
              class="text-xl"
              @click="showDetail(true)"
            />
            <div>EDIT</div>
          </div>
          <div class="delete-icon flex flex-row content-center space-x-3 text-red-400">
            <font-awesome-icon
              :icon="['fas', 'trash-can']"
              class="text-xl"
              @click="deleteRental()"
            />
            <div>DELETE</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showEditDetail">
      <LocationDetail :edit="true" :rental="rental" @input="e => showDetail(e)"/>
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
        showEditDetail: false,
      }
    },
    methods: {
      showOpen(value) {
        console.log(`RCO - show open rental card: ${value}`);
        this.$emit("input", value);
      },
      showDetail(value) {
        console.log(`RCO - show edit details: ${value}`);
        this.showEditDetail = value;
      },
      deleteRental() {
        console.log(`RCO - deleting rental id ${this.rental.id}`);
        this.$emit('delete');
      }
    },
  };
  </script>