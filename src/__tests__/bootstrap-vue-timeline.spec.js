import { createLocalVue, shallowMount } from '@vue/test-utils'
import { BootstrapVue, BSpinner } from 'bootstrap-vue'
import BootstrapVueTimeline from '../bootstrap-vue-timeline.vue'

const sampleItems = [
  {
    timestamp: Date.parse('2021-01-28T20:20:46.123Z'),
    title: 'title 1',
    content: 'content 1'
  },
  {
    timestamp: Date.parse('2021-01-28T20:20:46.456Z'),
    title: 'title 2',
    content: 'content 2'
  },
  {
    timestamp: Date.parse('2021-01-28T20:20:46.444Z'),
    title: 'title 3',
    content: 'content 3'
  }
]

describe('bootstrap vue timeline component', () => {
  let localVue

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(BootstrapVue)
  })

  test('renders a timeline with items in reversed order', () => {
    const wrapper = shallowMount(BootstrapVueTimeline, {
      localVue,
      propsData: {
        items: sampleItems,
        reverse: true
      }
    })
    const text = wrapper.text()
    expect(text).toMatch(/content 3[\s\S]*content 2[\s\S]*content 1/)
  })

  test('renders a timeline with items with a spinner', () => {
    const wrapper = shallowMount(BootstrapVueTimeline, {
      localVue,
      propsData: {
        items: sampleItems,
        reverse: false,
        loading: true
      }
    })
    const text = wrapper.text()
    expect(text).toMatch(/content 1[\s\S]*content 2[\s\S]*content 3/)

    const spinner = wrapper.findComponent(BSpinner)
    expect(spinner.exists()).toBe(true)
  })
})