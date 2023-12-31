<template>
  <div class="min-h-screen items-center relative align-middle text-lg w-60" ref="dropdownContainer" >
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
  
  mounted() {
    // Attach a click event listener to the document
    document.addEventListener("click", this.handleClickAway);
  },
  destroyed() {
    // Remove the click event listener when the component is destroyed
    document.removeEventListener("click", this.handleClickAway);
  },
  
  methods: {
    handleClickAway(event) {
      // Check if the clicked element is outside the dropdown container
      if (!this.$refs.dropdownContainer.contains(event.target)) {
        // Handle the click outside logic here
        this.expand = false;
        
      }
    },
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

