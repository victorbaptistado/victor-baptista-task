<template>
  <div class="min-h-screen items-center relative align-middle text-lg w-60"  >
    <Bdrop :is-options-expanded="expand" :selected-option="newDropdownName" @handleDataBdrop="handleDataBdrop" :is-disabled="isDisabled" :icon-hide="iconHide" :icon-hide-btn="iconHideBtn" :error="error" />
    <Ldrop :is-options-expanded="expand" :options-array="optionsArray" @handleDataLdrop="handleDataLdrop" :icon-hide="iconHide" :icon-hide-list="iconHideList" />
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
      expand: false, 
    };
  },
  props: { 
    dropdownName: {
      type: String,
      default: "Button", 
    },
    optionsArray: {
      type: Array,
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
  
  

  computed: {
    handleDataBdrop() {
      //Receives expand Boolean from child Bdrop
      return (expand) => { 
        this.expand = expand;
      }
    }, 
    handleDataLdrop() {
      //Receives selected option String from child Ldrop
      return (data) => { 
        //Emits selected option to HTML
        this.$emit('selected-option', data.selectedOption);
        //Dropdown Name Updated to Selected Option
        this.newDropdownName = data.selectedOption;
      }
    }, 

    error: {
      get: function () {
        if(this.optionsArray.length === 0){
          return this.error = true;
        } 
        return this.error = false;
      },
      set: function (optionsArray) {
        return optionsArray;
      }
    }
  },
};

</script>

