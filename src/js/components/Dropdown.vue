<template>
  <div class="min-h-screen items-center relative align-middle text-lg w-60">
    <Bdrop/>
    
  </div>
</template>


<script>

  import Ldrop from './Ldrop.vue'
  import Bdrop from './Bdrop.vue'

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
      this.selectedOption = option;
      this.isOptionsExpanded = false;
    }
  },
};

</script>