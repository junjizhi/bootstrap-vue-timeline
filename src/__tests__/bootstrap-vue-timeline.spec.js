import { createLocalVue, mount } from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import BootstrapVueTimeline from '../bootstrap-vue-timeline.vue'

const sampleItems = [
  {
    timestamp: Date.parse('2021-01-28T20:20:46.123Z'),
    title: 'title 1',
    content: 'content 1',
    link: 'link 1'
  },
  {
    timestamp: Date.parse('2021-01-28T20:20:46.456Z'),
    title: 'title 2',
    content: 'content 2',
    link: 'link 1'
  },
  {
    timestamp: Date.parse('2021-01-28T20:20:46.444Z'),
    title: 'title 3',
    content: 'content 3',
    link: 'link 3'
  }
]

test('renders a timeline with items', () => {
  const localVue = createLocalVue()
  localVue.use(BootstrapVue)

  const wrapper = mount(BootstrapVueTimeline, {
    localVue,
    attachTo: document.body,
    propsData: {
      items: sampleItems,
      reverse: false
    }
  })
  const text = wrapper.text()
  expect(text).toMatch(/content 1[\s\S]*content 2[\s\S]*content 3/)
})

test('renders a timeline with items in reversed order', () => {
  const localVue = createLocalVue()
  localVue.use(BootstrapVue)

  const wrapper = mount(BootstrapVueTimeline, {
    localVue,
    attachTo: document.body,
    propsData: {
      items: sampleItems,
      reverse: true
    }
  })
  const text = wrapper.text()
  expect(text).toMatch(/content 3[\s\S]*content 2[\s\S]*content 1/)
})
