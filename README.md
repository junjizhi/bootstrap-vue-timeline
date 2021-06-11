# bootstrap-vue-timeline

## Introduction
A simple timeline component similar to [Ant Timeline](https://www.antdv.com/components/timeline/) based on [Bootstrap-Vue](https://bootstrap-vue.org/).

**Note**: This component assumes you use [Bootstrap-Vue (v4)](https://bootstrap-vue.org/) in your project and have installed [the dependencies](https://bootstrap-vue.org/docs).

## Demo

Link: TBD

## Installation

```bash
npm i bootstrap-vue-timeline

# if you use yarn:

yarn add bootstrap-vue-timeline
```

## Usage

```html
<script>
import Vue from 'vue';
import BootstrapVueTimeline from 'bootstrap-vue-timeline'
import { BCard } from 'bootstrap-vue'
Vue.component('b-card', BCard)
Vue.component('b-timeline', BootstrapVueTimeline)

// Uncomment the following to import BootstrapVue CSS files if you
// have not done so when registering BootstrapVue. Order is important.
// Check out: https://bootstrap-vue.org/docs#using-module-bundlers
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'


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
      <b-timeline
        :items="timelineItems"
        :reverse="true"
        :loading="true"
        :date-format="'dd/MM/yy HH:mm:ss'"
      />
    </b-card>
  </div>
</template>
```

## Features
- [x] Loading spinner
- [x] Support `reverse` props
- [x] Custom timestamp format
- [ ] Support item head color variants
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

**Build component**:
```bash
yarn build
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