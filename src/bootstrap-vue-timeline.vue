<script>
import Vue from 'vue'
import { BListGroup, BListGroupItem, BSpinner, BTooltip } from 'bootstrap-vue'
import { format, formatDistanceToNow } from 'date-fns'

Vue.component('b-list-group', BListGroup)
Vue.component('b-list-group-item', BListGroupItem)
Vue.component('b-tooltip', BTooltip)
Vue.component('b-spinner', BSpinner)

export default /*#__PURE__*/{
  name: 'BootstrapVueTimeline',
  props: {
    items: Array,
    reverse: Boolean,
    loading: Boolean,
    dateFormat: String,
  },
  methods: {
    orderedItems() {
      let items = this.items
      if (this.loading) {
        items = [...items, {spinner: true, timestamp: "time", title: "loading"}]
      }

      if (this.reverse) {
        items.reverse()
      }

      return items
    },
    itemsCount() {
      if (this.loading) {
        return this.items.length + 1
      }

      return this.items.length
    },
    formatAgo(timestamp) {
      return formatDistanceToNow(timestamp, { addSuffix: true })
    },
    formatFull(timestamp) {
      const dateFormat = this.dateFormat || 'yyyy-MM-dd HH:mm:ss'
      return format(timestamp, dateFormat)
    },
    timestampElementId(item) {
      return item.timestamp + item.title + '-timestamp'
    }
  }
};
</script>

<template>
  <b-list-group>
    <b-list-group-item
      v-for="(item, index) in orderedItems()"
      :key="item.timestamp + item.title"
      class="flex-column align-items-start"
    >
      <div class="item-head" />
      <div
        v-if="index !== itemsCount() - 1"
        class="item-tail"
      />

      <b-spinner
        v-if="item.spinner"
        variant="primary"
        class="ml-4"
      />

      <div
        v-if="!item.spinner"
        class="item-content"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mt-2 mb-1">
            {{ item.title }}
          </h5>
          <small
            :id="timestampElementId(item)"
            class="mt-2"
          > {{ formatAgo(item.timestamp) }}</small>

          <b-tooltip
            :target="timestampElementId(item)"
            triggers="hover"
          >
            {{ formatFull(item.timestamp) }}
          </b-tooltip>
        </div>

        <small class="mb-1">
          {{ item.content || '' }}
        </small>
      </div>
    </b-list-group-item>
  </b-list-group>
</template>

<style scoped>
.list-group-item {
  position: relative;
  border: none;
  margin: 0;
  padding: 0 0 20px;
  box-sizing: border-box;
}

.item-head {
  background-color: #1890ff;
  color: #1890ff;
  border-color: #1890ff;
  position: absolute;
  width: 10px;
  height: 10px;
  border: 2px solid transparent;
  border-radius: 100px;
}

.item-tail {
  position: absolute;
  top: 10px;
  left: 4px;
  height: calc(100% - 10px);
  border-left: 2px solid #e8e8e8;
}

.item-content {
  position: relative;
  top: -6px;
  margin: 0 0 0 18px;
  word-break: break-word;
}
</style>
