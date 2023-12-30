<template>
  <div class="min-h-screen items-center relative align-middle text-lg w-60">
    <Bdrop :error="error" :selected-option="newDropdownName" :is-options-expanded="expand" @options-expanded="handleDataBdrop" :is-disabled="isDisabled" :icon-hide="iconHide" :icon-hide-btn="iconHideBtn" />
    <Ldrop :options-array="optionsArray" :is-options-expanded="expand" @selected-option="handleDataLdrop" :icon-hide="iconHide" :icon-hide-list="iconHideList" />
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
  
  methods: {
  },
  computed: {
    handleDataBdrop(expand) {
      return (expand) => { 
        this.expand = expand;
      }
    }, 
    handleDataLdrop(data) {
      //Receives selected option from child Ldrop
      return (data) => { 
        //Emits selected option to HTML
        this.$emit('selected-option', data.selectedOption);
        //Dropdown Name Updated to Selected Option
        this.newDropdownName = data.selectedOption;
        //Close Dropdown once Option selected
        this.expand = false;
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

