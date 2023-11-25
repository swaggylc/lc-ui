<template>
  <div class="one-radio-group">
    <slot></slot>
  </div>
</template>
<script setup>
import { ref, defineProps, provide, getCurrentInstance } from "vue";

const props = defineProps({
  // 我们需要获取到父组件中传进来的值，那么也要能够改变父组件中传进来的值
  modelValue: null,
});
const radioGroup = getCurrentInstance();
// 在这里传递 radioGroup
provide("radioGroup", radioGroup);
</script>
