<template>
  <div>
    <button
      ref="dropdownContainer"
      class="flex items-center justify-around px-3 py-2 bg-grey-100 text-white rounded-sm"
      :disabled="isDisabled"
      :class="[isDisabled ? 'bg-grey-100/[.12]' : 'bg-grey-100', error ? 'border-2 border-red-500/80' : '', iconHide ? 'w-32' : 'w-36']"
      @click="setExpanded()"
    >
      <svgicon v-if="!iconHide && !iconHideBtn" icon="filler" color="white" width="24" height="auto"></svgicon>
      <span><p class="text-white font-ceraproMedium">{{ selectedOption }}</p></span>
      <svgicon icon="icon-arrow" color="white" width="20" height="auto" class="h-4 w-4 transform transition-transform duration-200 ease-in-out"
        :class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'"></svgicon>
    </button>
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
      expand: false, 
    };
  },
  props: {
    selectedOption: {
      type: String,
      required: true,
    },     
    isOptionsExpanded: {
      default: false,
      type: Boolean,
      required: true,
    },
    isDisabled: {
      type: Boolean,
    },
    iconHide: {
      type: Boolean,
    },
    iconHideBtn: {
      type: Boolean,
    },
    error: {
      type: Boolean,
    }
  },
  methods: {
    setExpanded() {
      //Makes expand equals the coming props isOptionsExpanded 
      this.expand = !this.isOptionsExpanded;
      this.$emit('handleDataBdrop', this.expand);
    },
    handleClickAway(event) {
      // Checks if the clicked element is outside the dropdown container
      if (!this.$refs.dropdownContainer.contains(event.target)) {
        //Close Dropdown with any click outside the Button tag, including the selection of the option
        this.expand = false;
        this.$emit('handleDataBdrop', this.expand);
      }
    },
  },

  mounted() {
    // Click event listener to the entire document
    window.addEventListener("click", this.handleClickAway);
  },
  destroyed() {
    // Remove click event when the component is destroyed
    window.removeEventListener("click", this.handleClickAway);
  },

  
};

</script>

<style>
.ease-custom {
  transition-timing-function: cubic-bezier(.61,-0.53,.43,1.43);
}
</style>
