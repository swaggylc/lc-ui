<template>
  <div class="lc-input" :class="{ 'lc-input_suffix': inputSuffix }">
    <input
      class="lc-input_inner"
      :class="{ 'is-disabled': disabled }"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :placeholder="placeholder"
      :disabled="disabled"
      :clearable="clearable"
      :name="name"
      :value="modelValue"
      @input="handleInput"
    />
    <span class="lc-input_suffix" v-if="inputSuffix">
      <i
        class="iconfont icon-eye"
        :class="{ 'icon-eye-active': passwordVisible }"
        v-if="showPassword"
        @click="passwordHandle"
      ></i>
      <i
        class="iconfont icon-delete"
        v-if="clearable && modelValue"
        @click="clear"
      ></i>
    </span>
  </div>
</template>

<script setup>
name: "LcInput";
import { ref, defineProps, defineEmits, computed } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
});
const $emits = defineEmits(["update:modelValue"]);

const inputSuffix = computed(() => {
  return props.clearable || props.showPassword;
});
// 控制是否展示密码
let passwordVisible = ref(false);

/**
 * @description: 输入框改变值的回调
 * @param {} object 事件对象
 * @return {}
 */
const handleInput = (e) => {
  $emits("update:modelValue", e.target.value);
};

/**
 * @description: 清空输入框的回调
 * @return {}
 */
const clear = () => {
  $emits("update:modelValue", "");
};
/**
 * @description: 切换是否显示密码
 * @return {}
 */
const passwordHandle = () => {
  passwordVisible.value = !passwordVisible.value;
};
</script>

<style lang="scss" scoped>
.lc-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;

  .lc-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }

    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
// input的后缀图标
.lc-input_suffix {
  .lc-input_inner {
    padding-right: 30px;
  }
  .lc-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .icon-eye-active {
      color: blue;
    }
  }
}
</style>
