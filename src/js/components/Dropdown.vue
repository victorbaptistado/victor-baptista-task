<template>
  <div class="min-h-screen items-center relative align-middle text-lg w-60">
    <Bdrop :selected-option="newDropdownName" :is-options-expanded="updatedOptions" @options-expanded="handleDataBdrop" :isdisabled="isdisabled" />
    <Ldrop :options-array="optionsArray" :is-options-expanded="updatedOptions" @selected-option="handleDataLdrop"  />
  </div>
  
</template>

<script>
//Import svgicon tag and icon
import VueSVGIcon from 'vue-svgicon'
Vue.use(VueSVGIcon)
import "../icons/index"

export default {
  data() {
    return {
      newDropdownName: this.dropdownName,
      updatedOptions: this.isOptionsExpanded
    };
  },
  props: { 
    isOptionsExpanded: {
      type: Boolean,
      default: false
    },
    dropdownName: {
      type: String,
      default: "Button", // Default value if not provided
    },
    optionsArray: {
      type: Array,
      required: true,
    },
    isdisabled: {
      type: Boolean,
    }
  },
  
  methods: {
    handleDataBdrop(isOptionsExpanded) {
      //Receives Expanding Boolean from child Bdrop
      this.updatedOptions = isOptionsExpanded;
    },
    handleDataLdrop(data) {
      //Receives selected option from child Ldrop
      this.newDropdownName = data.selectedOption;
      this.updatedOptions = false;
      //updatedOptions = this.updatedOptions;
    },
  },
};

</script>

