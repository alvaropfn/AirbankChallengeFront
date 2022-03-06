<template>
  <div v-if="loading">
    <a-spin />
  </div>

  <div v-else-if="error">
    {{ openNotification() }}
  </div>

  <a-table
    :columns="columns"
    :data-source="data"
    :row-key="(record: Transactions) => record.id"
  >
    <template #filterDropdown="{ confirm }">
      <div style="padding: 8px">
        <a-space direction="vertical" align="end">
          <a-range-picker
            v-model:value="dataPickerValue"
            @change="onChangeDataPicker"
          />
          <a-button type="primary" size="small" @click="handleSearch(confirm)">
            <template #icon><CloseCircleOutlined /></template>
            Close
          </a-button>
        </a-space>
      </div>
    </template>
    <template #filterIcon="filtered">
      <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
    </template>
    <template #amount="{ text: amount }">
      <span>
        {{ amount.toFixed(2) }}
        <a v-if="amount < 0"> <DownOutlined style="color: red" /> </a>
        <a v-else-if="amount > 0">
          <UpOutlined />
        </a>
      </span>
    </template>
    <template #currency="{ text: currency }">
      <span>{{ currency === "EUR" ? "€" : "£" }}</span>
    </template>
    <template #transactionDate="{ text: transactionDate }">
      <span>{{ parseDate(transactionDate) }}</span>
    </template>
    <template #status="{ text: status }">
      <span>
        <a-tag :color="status === 'booked' ? 'volcano' : 'green'">
          {{ status.toUpperCase() }}
        </a-tag>
      </span>
    </template>
    <template #action="{ text: id }">
      <span>
        <a class="ant-dropdown-link" @click="pushWithQuery(id)">
          Detail
          <RightOutlined />
        </a>
      </span>
    </template>
  </a-table>
</template>

<script setup lang="ts">
import { computed, ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import { Moment } from "moment";
import { parseDate } from "@/utils/utils";
import type { Transactions } from "@/models/transactions";

import { GETTRANSACTIONSBYDATE } from "@/api/api";

import {
  UpOutlined,
  DownOutlined,
  RightOutlined,
  SearchOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons-vue";

import { notification } from "ant-design-vue";

const openNotification = () => {
  notification.error({
    message: "An Error Occur",
    description: "Connections problems, try again later",
  });
};

const router = useRouter();
const pushWithQuery = (id: string): void => {
  router.push({
    name: `transaction`,
    params: { id },
  });
};

const state = reactive({
  startMonth: "",
  endMonth: "",
});

const { result, loading, error } = useQuery(GETTRANSACTIONSBYDATE, state);

const data = computed((): Array<Transactions> => {
  return result.value?.getTransactionsByDate || [];
});

const dataPickerValue = ref<Moment[]>([]);
const onChangeDataPicker = (value: Moment[], dateString: string[]): void => {
  state.startMonth = dateString[0];
  state.endMonth = dateString[1];
};

const handleSearch = (confirm: Function): void => {
  confirm();
};

const columns = [
  {
    title: "Account",
    dataIndex: "account",
    key: "account",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    slots: { customRender: "amount" },
  },
  {
    title: "Currency",
    dataIndex: "currency",
    key: "currency",
    slots: { customRender: "currency" },
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    slots: { customRender: "status" },
  },
  {
    title: "Date",
    dataIndex: "transactionDate",
    key: "transactionDate",
    slots: {
      filterDropdown: "filterDropdown",
      filterIcon: "filterIcon",
      customRender: "transactionDate",
    },
  },
  {
    title: "Actions",
    key: "actions",
    dataIndex: "id",
    slots: { customRender: "action" },
  },
];
</script>
