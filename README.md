# bootstrap-vue-timeline

## Introduction
A simple timeline component similar to [Ant Timeline](https://www.antdv.com/components/timeline/) based on [Bootstrap-Vue](https://bootstrap-vue.org/).

## Demo

Link: TBD

## Dependencies


* [Vue.js 2.6+](https://vuejs.org/2016/04/27/announcing-2.0/)
* [Bootstrap-Vue (v2.21.2+)](https://bootstrap-vue.org/)
* [Other Bootstrap-Vue dependencies](https://bootstrap-vue.org/docs).

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
        :reverse="false"
        date-format="dd/MM/yy HH:mm:ss"
        variant="primary"
        loading
      />
    </b-card>
  </div>
</template>
```

## Features
- [x] Loading spinner
- [x] Support `reverse` props
- [x] Custom timestamp format
- [x] Support item head color variants
- [ ] Support custom icons
- [ ] Refactor timeline and item into separate components
- [ ] Emit events

## Component Reference
### Props

| Name          | Type      | Description                                                                                                                                                                                              |
| ------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`       | `Array`   | A list of timeline items to display. Supported keys include: `timestamp`, `title`, `content`.                                                                                                            |
| `reverse`     | `Boolean` | The component displays a vertical timeline in the order of the `items` prop. If `reserve` is set to false, it displays items in reverse order.<br/> Default: false.                                      |
| `loading`     | `Boolean` | If true, display a loading spinner in the last item.                                                                                                                                                     |
| `date-format` | `String`  | Controls the date format in the tooltip when you hover the human friendly time.  Default: 'yyyy-MM-dd HH:mm:ss'                                                                                          |
| `variant`     | `String`  | Color variant. It supports [Bootstrap color variants](https://bootstrap-vue.org/docs/reference/color-variants#color-variants-and-css-class-mapping), including 'primary', 'success'.  Default: 'primary' |
### Slots
N/A
### Events
N/A

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

**Generate component documentation**:
```bash
yarn doc src/bootstrap-vue-timeline.vue
```

## License

Released under the MIT [License](./LICENSE). Copyright (c) Bootstrap-vue-timeline.