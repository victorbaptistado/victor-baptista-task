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
    <transition
      enter-active-class="transform transition duration-500 ease-custom"
      enter-class="-translate-y-1/2 scale-y-0 opacity-0"
      enter-to-class="translate-y-0 scale-y-100 opacity-100"
      leave-active-class="transform transition duration-300 ease-custom"
      leave-class="translate-y-0 scale-y-100 opacity-100"
      leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
    >
      <ul
        v-show="isOptionsExpanded"
        class="absolute left-0 right-0 mb-4 bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <li
          v-for="(option, index) in options"
          :key="index"
          class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200"
          @mousedown.prevent="setOption(option)"
        >
          <div class="flex items-center align-middle space-x-2 text-wrap">
            <div>
              <svgicon icon="filler" width="24" height="auto"></svgicon>
            </div>
            <div>
              <p class="text-wrap w-48">{{ option }}</p>
            </div>
          </div>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
//Import svgicon tag
import VueSVGIcon from 'vue-svgicon'
Vue.use(VueSVGIcon)

//Import svg Icon
import "../icons/index"

export default {
  data() {
    return {
      isOptionsExpanded: false,
      selectedOption: "Button",
      options: ["1x", "2x", "3x", "4x or more"]
    };
  },
  methods: {
    setOption(option) {
      console.log('option',option);
      this.selectedOption = option;
      //this.isOptionsExpanded = false;
    }
  },
};

</script>

<style>
.ease-custom {
  transition-timing-function: cubic-bezier(.61,-0.53,.43,1.43);
}
</style>
