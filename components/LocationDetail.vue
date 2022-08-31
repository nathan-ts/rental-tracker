<template>
  <div class="new-location-detail
    bg-white
    m-4 rounded-lg shadow-xl
    flex flex-col justify-between
  ">
    <div class="card-header
      w-full px-6 py-4
      flex flex-row justify-between items-center
    ">
      <div class="h3 text-base font-bold">{{ detailType }} Location</div>
      <font-awesome-icon
        :icon="['fas', 'xmark']"
        class="text-xl text-gray-300"
        @click="showDetail(false)"
      />
    </div>
    <form v-on:submit.prevent="onSubmit">
      <div class="card-info
        w-full p-6 space-y-6
      ">
        <InputField label="Title *" v-model="data.title"/>
        <InputField label="Enter the address *" v-model="data.address"/>
        <div class="contact-info-header py-2
          border-b-2 border-cyan-100
          text-sm text-cyan-500 tracking-wide
        ">
          CONTACT INFORMATION
        </div>
        <InputField label="Full name *" v-model="data.name"/>
        <InputField label="Job position *" v-model="data.position"/>
        <InputField label="Email address *" v-model="data.email"/>
        <InputField label="Phone *" v-model="data.phone"/>
      </div>
      <div class="card-save
        p-6
        flex flex-row
      ">
        <input type="submit" value="Save"
          class="save-btn rounded-md
          bg-cyan-600 text-white
          px-6 py-2
        " />
      </div>
    </form>
  </div>
  </template>
  
  <script>
  export default {
    name: "LocationDetail",
    props: {
      edit: {
        type: Boolean,
        default: false,
      },
      rental: {
      },
    },
    data() {
      return {
        // Set up header for details section
        detailType: this.edit ? "Edit" : "New",
        // Fill input forms with existing data, if any
        // title: this.rental ? this.rental.title : '',
        // address: this.rental ? this.rental.address : '',
        // name: this.rental ? this.rental.name : '',
        // position: this.rental ? this.rental.position : '',
        // email: this.rental ? this.rental.email : '',
        // phone: this.rental ? this.rental.phone : '',
        data: this.rental ? { ...this.rental } : {
          title: '',
          address: '',
          name: '',
          position: '',
          email: '',
          phone: '',
        },
      };
    },
    methods: {
      showDetail(value) {
        console.log(`LD - show details: ${value}`);
        this.$emit('input', value);
      },
      onSubmit() {
        // const data = {
        // 	title: this.title,
        // 	address: this.address,
        // 	name: this.name,
        // 	position: this.position,
        // 	email: this.email,
        // 	phone: this.phone,
        // }
        console.log(`LD - Submitting data from form: ${JSON.stringify(this.data)}`);
        this.$emit('save', this.data);
        this.$emit('input', false);
      }
    }
  }
  // add save button validation on each input field's values to ensure none are empty
  </script>