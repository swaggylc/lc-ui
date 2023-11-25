<template>
  <div class="lc-form-item">
    <label :style="{ width: form.ctx.labelWidth }" class="lc-form-item_label">{{
      label
    }}</label>
    <div class="lc-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, inject } from "vue";
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
});
// 接收form传过来的实例
const form = inject("form", undefined);
</script>

<style lang="scss" scoped>
lc-form-item {
  margin-bottom: 25px;
  .lc-form-item_label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .lc-form-item_content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidde;
  }
}
</style>
