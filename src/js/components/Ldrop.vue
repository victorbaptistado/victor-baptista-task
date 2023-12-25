<template>
  <div>
    <transition
      enter-active-class="transform transition duration-500 ease-custom"
      enter-class="-translate-y-1/2 scale-y-0 opacity-0"
      enter-to-class="translate-y-0 scale-y-100 opacity-100"
      leave-active-class="transform transition duration-300 ease-custom"
      leave-class="translate-y-0 scale-y-100 opacity-100"
      leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
    >
      <ul
        v-show="expanded"
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
      //isOptionsExpanded: false,
      //selectedOption: "Button",
      options: ["1x", "2x", "3x", "4x or more"]
    };
  },
  props: {
    expanded: Boolean,
  },
  methods: {
    //Handles the option selection
    setOption(option) {

      //Sends selected option to parent Bdrop 
      this.$emit('selected-option', option);
      //this.expanded = false;
    },
  },
};
</script>

<style>
.ease-custom {
  transition-timing-function: cubic-bezier(.61,-0.53,.43,1.43);
}
</style>
