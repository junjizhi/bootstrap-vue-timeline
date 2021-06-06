<script>
import Vue from 'vue';
import BootstrapVueTimeline from '@/bootstrap-vue-timeline.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    BootstrapVueTimeline
  }
});
</script>

<template>
  <div id="app">
    <bootstrap-vue-timeline />
  </div>
</template>
