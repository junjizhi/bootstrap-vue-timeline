# bootstrap-vue-timeline

## Introduction
A simple timeline component similar to [Ant Timeline](https://www.antdv.com/components/timeline/) based on [Bootstrap-Vue](https://bootstrap-vue.org/).

## Demo

Link: TBD

## Installation

```bash
npm i bootstrap-vue-timeline

# or:
yarn add bootstrap-vue-timeline
```

## Usage

```html
<script>
import Vue from 'vue';
import BootstrapVueTimeline from '@/bootstrap-vue-timeline.vue';
import { BCard } from 'bootstrap-vue'
Vue.component('b-card', BCard)

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
          content: 'Esse dolore consectetur aliqua laboris sunt aliqua do non.',
          link: 'https://example1.com'
        },
        {
          timestamp: Date.parse('2021-05-28T20:20:46.444Z'),
          title: 'Voluptate pariatur dolore laborum eu',
          link: '#'
        },
        {
          timestamp: Date.parse('2021-01-28T20:20:46.444Z'),
          title: 'Mollit aliqua velit nostrud ipsum',
          content: 'Magna officia est fugiat sit esse consectetur labore elit nulla duis consectetur. Et sit velit ad ipsum officia.',
          link: '#'
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
      />
    </b-card>
  </div>
</template>
```

## Features
- [ ] Loading spinner
- [ ] Support item head color variants
- [ ] Support `reverse` props
- [ ] Support custom icons
- [ ] Refactor timeline and item into separate components

## Component Reference
### Properties
TBD
### Slots
TBD
### Events
TBD

## Development

**Install dependencies**:
```bash
yarn install --dev
```

**Run example app locally**:
```bash
yarn serve
```

**Lints and fixes files**:
```bash
yarn lint
```

## License

Released under the MIT [License](./LICENSE). Copyright (c) Bootstrap-vue-timeline.