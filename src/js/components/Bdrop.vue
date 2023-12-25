<template>
  <!--<div
    class="flex items-center justify-center bg-gray-100 
    min-h-screen"
  >-->
  <div class="min-h-screen items-center relative align-middle text-lg w-60">
    <button
      class="flex items-center justify-between px-3 py-2 bg-grey-100 w-36 text-white rounded-sm"
      @click="isOptionsExpanded = !isOptionsExpanded"
      @blur="isOptionsExpanded = false"
    >
      <svgicon icon="filler" color="white" width="24" height="auto"></svgicon>
      <span><p class="text-white">{{ selectedOption }}</p></span>
      <svgicon icon="icon-arrow" color="white" width="20" height="auto" class="h-4 w-4 transform transition-transform duration-200 ease-in-out"
        :class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'"></svgicon>
    </button>
    <Ldrop :expanded="isOptionsExpanded" @selected-option="handleDataLdrop"  />
  </div>
  
</template>

<script>
//Import svgicon tag
import VueSVGIcon from 'vue-svgicon'
Vue.use(VueSVGIcon)

//Import svg Icon
import "../icons/index"

import Ldrop from "./Ldrop.vue"

export default {
  data() {
    return {
      isOptionsExpanded: false,
      selectedOption: "Button",
    };
  },
  
  methods: {
    handleDataLdrop(option) {
      //Receives selected option from child Ldrop
      this.selectedOption = option;
    },
  },
};

</script>

<style>
.ease-custom {
  transition-timing-function: cubic-bezier(.61,-0.53,.43,1.43);
}
</style>
