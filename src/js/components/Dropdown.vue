<template>
  <div class="min-h-screen items-center relative align-middle text-lg w-60">
    <Bdrop :selected-option="newName" :is-options-expanded="isOptionsExpanded" @options-expanded="handleDataBdrop"/>
    <Ldrop :options-array="optionsArray" :is-options-expanded="isOptionsExpanded" @selected-option="handleDataLdrop"  />
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
      isOptionsExpanded: false,
      newName: this.dropdownName
    };
  },
  props: {
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
      this.isOptionsExpanded = isOptionsExpanded;
    },
    handleDataLdrop(selectedOption) {
      //Receives selected option from child Ldrop
      this.newName = selectedOption;
      this.isOptionsExpanded = false;
      isOptionsExpanded = this.isOptionsExpanded;
    },
  },
};

</script>

