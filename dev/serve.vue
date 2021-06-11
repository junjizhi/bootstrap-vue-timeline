<script>
import Vue from 'vue';
import BootstrapVueTimeline from '@/bootstrap-vue-timeline.vue';
import { BCard } from 'bootstrap-vue'
Vue.component('b-card', BCard)

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    BootstrapVueTimeline
  },
  data() {
    return {
      timelineItems: [
        {
          timestamp: Date.parse('2021-05-29T20:20:46.444Z'),
          title: 'Dolore ullamco exercitation commodo',
          content: 'Esse dolore consectetur aliqua laboris sunt aliqua do non.'
        },
        {
          timestamp: Date.parse('2021-05-28T20:20:46.444Z'),
          title: 'Voluptate pariatur dolore laborum eu'
        },
        {
          timestamp: Date.parse('2021-01-28T20:20:46.444Z'),
          title: 'Mollit aliqua velit nostrud ipsum',
          content: 'Magna officia est fugiat sit esse consectetur labore elit nulla duis consectetur. Et sit velit ad ipsum officia.'
        }
      ]
    }
  }
});
</script>

<template>
  <div id="app">
    <b-card
      title="Event Timeline"
    >
      <bootstrap-vue-timeline
        :items="timelineItems"
        :reverse="false"
        :loading="true"
        :date-format="'dd/MM/yy HH:mm:ss'"
      />
    </b-card>
  </div>
</template>
