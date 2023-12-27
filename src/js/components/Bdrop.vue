<template>
  <div>
    <button
      class="flex items-center justify-between px-3 py-2 bg-grey-100 w-36 text-white rounded-sm"
      @click="setExpanded()"
      @blur="isOptionsExpanded = false"
    >
      <svgicon icon="filler" color="white" width="24" height="auto"></svgicon>
      <span><p class="text-white">{{ selectedOption }}</p></span>
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
    }
  },
  methods: {
    setExpanded() {
      //Makes expand equals the coming props isOptionsExpanded 
      this.expand = !this.isOptionsExpanded;
      this.$emit('options-expanded', this.expand);
    },
  },
  /*
  computed: {
    isOptionsExpandedUpdate(){
      return this.isOptionsExpanded;
    },
  }
  */
};

</script>

<style>
.ease-custom {
  transition-timing-function: cubic-bezier(.61,-0.53,.43,1.43);
}
</style>
