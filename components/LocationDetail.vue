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
        <InputField label="Title *" ref="titleInput" v-model="data.title"/>
        <InputField label="Enter the address *" ref="addressInput" v-model="data.address"/>
        <div class="contact-info-header py-2
          border-b-2 border-cyan-100
          text-sm text-cyan-500 tracking-wide
        ">
          CONTACT INFORMATION
        </div>
        <InputField label="Full name *" ref="nameInput" v-model="data.name"/>
        <InputField label="Job position *" ref="positionInput" v-model="data.position"/>
        <InputField label="Email address *" ref="emailInput" v-model="data.email"/>
        <InputField label="Phone *" ref="phoneInput" v-model="data.phone"/>
      </div>
      <div class="card-save
        p-6
        flex flex-row
      ">
        <input type="submit" value="Save"
          cl="save-btn rounded-md
          text-white
          bg-cyan-600
          px-6 py-2"
          :class="{
            'bg-cyan-600': this.validInputs,
            'bg-gray-300': !this.validInputs,
            'save-btn rounded-md text-white px-6 py-2': true,
          }"
        />
      </div>
    </form>
  </div>
  </template>
  
  <script>
  export default {
    props: {
      edit: {
        type: Boolean,
        default: false,
      },
      rental: {
      },
    },
    emits: ['input', 'save'],
    data() {
      return {
        // Set up header for details section
        detailType: this.edit ? "Edit" : "New",
        // Fill input forms with existing data, if any
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
        this.$emit('input', value);
      },
      onSubmit() {
        if (this.validInputs) {
          this.$emit('save', this.data); // sends data object up to parent
				  this.$emit('input', false); // closes detail vue
        } else {
          // Forces all input field children to run their error check
          this.$refs.titleInput.validateInput(this.data.title);
          this.$refs.addressInput.validateInput(this.data.address);
          this.$refs.nameInput.validateInput(this.data.name);
          this.$refs.positionInput.validateInput(this.data.position);
          this.$refs.emailInput.validateInput(this.data.email);
          this.$refs.phoneInput.validateInput(this.data.phone);
        }
      }
    },
    computed: {
      // Checks if any field is blank (computed for cached performance)
      validInputs: function() {
        if (!this.data.title || !this.data.address || !this.data.name ||
          !this.data.position || !this.data.email || !this.data.phone) {
            return false;
        }
        return true;
      }
    }
  }
  </script>