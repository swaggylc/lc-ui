<template>
  <div class="one-radio-group">
    <slot></slot>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  modelValue: null,
});
</script>
