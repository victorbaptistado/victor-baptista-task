<template>
  <div class="min-h-screen items-center relative align-middle text-lg w-60">
    <Bdrop :selected-option="newName" :is-options-expanded="updatedOptions" @options-expanded="handleDataBdrop"/>
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
      newName: this.dropdownName,
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
  },
  
  methods: {
    handleDataBdrop(isOptionsExpanded) {
      //Receives Expanding Boolean from child Bdrop
      this.updatedOptions = isOptionsExpanded;
    },
    handleDataLdrop(data) {
      //Receives selected option from child Ldrop
      this.newName = data.selectedOption;
      this.updatedOptions = false;
      //updatedOptions = this.updatedOptions;
    },
  },
};

</script>

