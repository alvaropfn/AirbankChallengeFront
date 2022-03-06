<template>
  <a-spin v-if="loading" />

  <div v-else-if="error">
    {{ openNotification() }}
  </div>

  <a-descriptions
    bordered
    :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
  >
    <a-descriptions-item label="Account">
      {{ data?.account || noData }}
    </a-descriptions-item>
    <a-descriptions-item label="Description">
      {{ data?.description || noData }}
    </a-descriptions-item>
    <a-descriptions-item label="Amount">
      {{ data?.amount?.toFixed(2) || noData }}
    </a-descriptions-item>
    <a-descriptions-item label="Reference">
      {{ data?.reference || noData }}
    </a-descriptions-item>
    <a-descriptions-item label="Created At">
      {{ parseDate(data?.createdAt) || noData }}
    </a-descriptions-item>
    <a-descriptions-item label="Currency">
      {{ data?.currency || noData }}
    </a-descriptions-item>
    <a-descriptions-item label="Transaction Date">
      {{ parseDate(data?.transactionDate) || noData }}
    </a-descriptions-item>
    <a-descriptions-item label="Updated At">
      {{ parseDate(data?.updatedAt) || noData }}
    </a-descriptions-item>
    <a-descriptions-item label="Status">
      {{ data?.status || noData }}
    </a-descriptions-item>
    <a-descriptions-item label="Category">
      {{ data?.category || noData }}
    </a-descriptions-item>
  </a-descriptions>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import { notification } from "ant-design-vue";
import { parseDate } from "@/utils/utils";
import type { Transactions } from "@/models/transactions";
import { GETTRANSACTIONBYID } from "@/api/api";

const openNotification = () => {
  notification.error({
    message: "An Error Occur",
    description: "Connections problems, try again later",
  });
};

const { id } = useRoute().params;

const { result, loading, error } = useQuery(GETTRANSACTIONBYID, {
  transactionId: id,
});

const data = computed((): Transactions => {
  return result.value?.getTransactionById || null;
});

const noData = "---";
</script>

<style scoped></style>
