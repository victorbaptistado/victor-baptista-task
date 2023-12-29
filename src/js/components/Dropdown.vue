<template>
  <div class="min-h-screen items-center relative align-middle text-lg w-60">
    <Bdrop :error="error" :selected-option="newDropdownName" :is-options-expanded="updatedOptions" @options-expanded="handleDataBdrop" :is-disabled="isDisabled" :icon-hide="iconHide" :icon-hide-btn="iconHideBtn" />
    <Ldrop :options-array="optionsArray" :is-options-expanded="updatedOptions" @selected-option="handleDataLdrop" :icon-hide="iconHide" :icon-hide-list="iconHideList" />
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
      default: false,
    },
    dropdownName: {
      type: String,
      default: "Button", 
    },
    optionsArray: {
      type: Array,
      //required: true,
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
    iconHideList: {
      type: Boolean,
    },
  },
  
  methods: {
    handleDataBdrop(isOptionsExpanded) {
      //Receives Expanding Boolean from child Bdrop
      this.updatedOptions = isOptionsExpanded;
    },
    handleDataLdrop(data) {
      //Receives selected option from child Ldrop
      
      //Emits selected option to HTML
      this.$emit('selected-option', data.selectedOption);
      this.newDropdownName = data.selectedOption;

      this.updatedOptions = false;
    },
  },
  computed: {
    error: {
      // getter
      get: function () {
        if(this.optionsArray.length === 0){
          return this.error = true;
        } 
        return this.error = false;
      },
      // setter
      set: function (optionsArray) {
        return optionsArray;
      }
    }
  },
};

</script>

