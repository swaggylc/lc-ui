<template>
  <label class="lc-radio" :class="{ 'is-checked': label == modelValue }">
    <span class="lc-radio_input">
      <span class="lc-radio_inner"></span>
      <input
        :value="label"
        :name="name"
        type="radio"
        class="lc-radio_original"
        v-model="model"
      />
    </span>
    <span class="lc-radio_label">
      <slot></slot>
      <template v-if="!$slots.default">
        {{ label }}
      </template>
    </span>
  </label>
</template>

<script setup>
name: "LcRadio";
import { ref, defineProps, computed, defineEmits } from "vue";

// 提供一个计算属性以绑定input，同时能够更改父组件中传进来的值
let model = computed({
  // 获取值时，直接从传进来的modelValue拿
  get: () => {
    return props.modelValue;
  },
  // 改变值时，需要改变父组件中的值
  set: (value) => {
    emits("update:modelValue", value);
  },
});

const props = defineProps({
  label: {
    type: [String, Number, Boolean],
    default: "我是label",
  },
  // 由于我们真正获取的是label值，所以v-model绑定的值可以不做校验
  modelValue: null,
  name: {
    type: String,
    default: "",
  },
});
const emits = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
.lc-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;

  .lc-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .lc-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;

      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }

    .lc-radio_original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }

  .lc-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
}

// 选中的样式
.lc-radio.is-checked {
  .lc-radio_input {
    .lc-radio_inner {
      border-color: #409eff;
      background-color: #409eff;

      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }

  .lc-radio_label {
    color: #409eff;
  }
}
</style>
