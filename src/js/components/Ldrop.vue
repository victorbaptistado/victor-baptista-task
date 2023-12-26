<template>
  <div>
    <div class="hidden MD:block">
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
            v-for="(option, index) in optionsArray"
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
      

    <aside
      class="transform MD:hidden bottom-0 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOptionsExpanded ? 'translate-y-0' : '-translate-y-full'"
    >
      <ul
        class="left-0 right-0 mb-4 bg-grey-100 overflow-hidden"
      >
        <li
          v-for="(option, index) in optionsArray"
          :key="index"
          class="px-3 p-4 py-2 transition-colors duration-300"
          @mousedown.prevent="setOption(option)"
          @click="isOptionsExpanded = false"
        >
          <span
          @click="isOptionsExpanded = false"
          class="flex w-full items-center"
          >
            <div class="flex items-center align-middle space-x-2 text-wrap">
              <div>
                <svgicon icon="filler" width="24" height="auto"></svgicon>
              </div>
              <div>
                <p class="text-wrap w-48">{{ option }}</p>
              </div>
            </div>
          </span>
        </li>      
      </ul>
    </aside>
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
      //isOpen: false,
    };
  },
  props: {
    isOptionsExpanded: {
      type: Boolean,
      required: true,
    }, 
    optionsArray: {
      type: Array,
      required: true,
    }    
  },
  methods: {
    //Handles the option selection
    setOption(option) {
      //Sends selected option to parent Bdrop 
      this.$emit('selected-option', option);
    },
    drawer() {
      this.isOptionsExpanded = !this.isOptionsExpanded;
    }
  },
  watch: {
    isOptionsExpanded: {
      immediate: true,
      handler(isOptionsExpanded) {
        if (process.client) {
          if (isOptionsExpanded) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27 && this.isOptionsExpanded) this.isOptionsExpanded = false;
    });
  }

};
</script>

<style>

</style>
