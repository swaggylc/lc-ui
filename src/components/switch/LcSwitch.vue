<template>
  <div
    class="lc-switch"
    :class="{ 'is-checked': modelValue }"
    @click="changeActive"
  >
    <span class="lc-switch_core">
      <span class="lc-switch_button"></span>
    </span>
  </div>
</template>

<script setup>
name: "LcSwitch";
import { ref, defineProps, defineEmits, computed } from "vue";
const props = defineProps({
  name: {
    type: String,
    default: "switch",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

let $emits = defineEmits(["update:modelValue"]);

const changeActive = () => {
  $emits("update:modelValue", !props.modelValue);
};
</script>

<style lang="scss" scoped>
.lc-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .lc-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .lc-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
// 选中样式
.is-checked {
  .lc-switch_core {
    border-color: #409eff;
    background-color: #409eff;
    .lc-switch_button {
      transform: translateX(20px);
    }
  }
}
</style>
