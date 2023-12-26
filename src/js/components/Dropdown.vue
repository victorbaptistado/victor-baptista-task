<template>
  <div class="min-h-screen items-center relative align-middle text-lg w-60">
    <Bdrop :selected-option="dropdownName" :is-options-expanded="isOptionsExpanded" @options-expanded="handleDataBdrop"/>
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
  watch: {
    naming(dropwdownName){
      console.log('dropwdownName',dropwdownName)
      this.selectedOption = dropwdownName;
    }
  },
  methods: {
    handleDataBdrop(isOptionsExpanded) {
      //Receives Expanding Boolean from child Bdrop
      this.isOptionsExpanded = isOptionsExpanded;
    },
    handleDataLdrop(selectedOption) {
      //Receives selected option from child Ldrop
      this.dropdownName = selectedOption;
      this.isOptionsExpanded = false;
      isOptionsExpanded = this.isOptionsExpanded;
    },
    
  },
};

</script>

