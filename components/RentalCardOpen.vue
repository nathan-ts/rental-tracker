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
          <div class="edit-icon
            flex flex-row content-center
            space-x-3 text-gray-400
            cursor-default
            "
            @click="showDetail(true)"
          >
            <font-awesome-icon
              :icon="['fas', 'pen']"
              class="text-xl"
            />
            <div>EDIT</div>
          </div>
          <div class="delete-icon
            flex flex-row content-center
            space-x-3 text-red-400
            cursor-default
            "
            @click="deleteRental"
          >
            <font-awesome-icon
              :icon="['fas', 'trash-can']"
              class="text-xl"
            />
            <div>DELETE</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showEditDetail">
      <LocationDetail
        :edit="true"
        :rental="rental"
        @input="showDetail"
        @save="editRental"
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
    emits: ['input', 'edit', 'delete'],
    data() {
      return {
        showEditDetail: false,
      }
    },
    methods: {
      showOpen(value) {
        this.$emit("input", value);
      },
      showDetail(value) {
        this.showEditDetail = value;
      },
      editRental(data) {
			  this.$emit('edit', data);
      },
      deleteRental() {
        this.$emit('delete');
      }
    },
  };
  </script>