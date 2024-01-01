<template>
  <div>
    <div class="hidden MD:block" >
      <transition
        enter-active-class="transform transition duration-500 ease-custom"
        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
        enter-to-class="translate-y-0 scale-y-100 opacity-100"
        leave-active-class="transform transition duration-300 ease-custom"
        leave-class="translate-y-0 scale-y-100 opacity-100"
        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
      >
        <ul
          v-show="expand"
          class="absolute left-0 right-0 mb-4 bg-white rounded-sm shadow-lg overflow-hidden"
        >
          <li
            v-for="(option, index) in optionsArray"
            :key="index"
            class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200"
            @mousedown.prevent="setOption(option)"
          >
            <div class="flex items-center align-middle space-x-2 text-wrap">
              <div>
                <svgicon v-if="!iconHide && !iconHideList" icon="filler" width="24" height="auto"></svgicon>
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
      class="transform MD:hidden bg-white shadow-inner left-0 right-0 bottom-0 w-full fixed overflow-auto ease-in-out transition-all duration-300 z-30 py-4"
      :class="expand ? 'translate-y-0' : 'translate-y-full'"
    >
      <ul
        class="left-0 right-0 overflow-hidden"
      >
        <li
          v-for="(option, index) in optionsArray"
          :key="index"
          class="px-3 p-4 py-2 transition-colors duration-300"
          @mousedown.prevent="setOption(option)"
          
        >
          <span
          @click="expand = false"
          class="flex w-full items-center"
          >
            <div class="flex items-center align-middle space-x-2 text-wrap">
              <div>
                <svgicon v-if="!iconHide && !iconHideList" icon="filler" width="24" height="auto"></svgicon>
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
    props: {
      isOptionsExpanded: {
        default: false,
        type: Boolean,
        required: true,
      },
      optionsArray: {
        type: Array,
      },
      iconHide: {
        type: Boolean,
      },
      iconHideList: {
        type: Boolean,
      }  
    },
    methods: {
      //Handles the option selection
      setOption(option) {
        //Sends selected option to parent Bdrop
        this.$emit('handleDataLdrop', {selectedOption: option });
      },
    }, 
    computed: {
      expand: {
        get: function () {
            return this.isOptionsExpanded;
        },
        set: function (isOptionsExpanded) {
          return isOptionsExpanded;
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

