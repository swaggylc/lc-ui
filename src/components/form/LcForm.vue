<template>
  <div class="lc-form">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, defineProps, provide, getCurrentInstance } from "vue";

const props = defineProps({
  model: {
    type: Object,
    default() {
      return {};
    },
  },
  labelWidth: {
    type: String,
    default: "50px",
  },
});

const form = getCurrentInstance();

// 将form组件传递给任何的form-item
provide("form", form);
</script>

<style lang="scss" scoped></style>
