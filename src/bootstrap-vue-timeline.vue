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
    variant: String,
  },
  methods: {
    bsVariant() {
      return this.variant || 'primary'
    },
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
      <div :class="`item-head ${bsVariant()}`" />
      <div
        v-if="index !== itemsCount() - 1"
        class="item-tail"
      />

      <b-spinner
        v-if="item.spinner"
        :variant="bsVariant()"
        class="ml-4"
      />

      <div
        v-if="!item.spinner"
        class="item-content"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">
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

.primary {
  background-color: #007bff;
  color: #007bff;
  border-color: #007bff;
}

.secondary {
  background-color: #6c757d;
  color: #6c757d;
  border-color: #6c757d;
}

.success {
  background-color: #28a745;
  color: #28a745;
  border-color: #28a745;
}

.info {
  background-color: #17a2b8;
  color: #17a2b8;
  border-color: #17a2b8;
}

.warning {
  background-color: #ffc107;
  color: #ffc107;
  border-color: #ffc107;
}

.danger {
  background-color: #dc3545;
  color: #dc3545;
  border-color: #dc3545;
}

.light {
  background-color: #f8f9fa;
  color: #f8f9fa;
  border-color: #f8f9fa;
}

.dark {
  background-color: #343a40;
  color: #343a40;
  border-color: #343a40;
}
</style>
