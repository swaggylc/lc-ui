<template>
  <div
    class="lc-switch"
    :class="{ 'is-checked': modelValue }"
    @click="changeActive"
  >
    <span class="lc-switch_core" ref="core">
      <span class="lc-switch_button"></span>
    </span>
  </div>
</template>

<script setup>
import {
  ref,
  defineProps,
  defineEmits,
  computed,
  onMounted,
  nextTick,
} from "vue";
const props = defineProps({
  name: {
    type: String,
    default: "switch",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  activeColor: {
    type: String,
    default: "#1ec63b",
  },
  inactiveColor: {
    type: String,
    default: "#dd001b",
  },
});

let core = ref(null);

let $emits = defineEmits(["update:modelValue", "change"]);

const changeActive = () => {
  $emits("update:modelValue", !props.modelValue);
  //   在数据发生变化后，但dom还未更新，造成第一次点击不会出现变色的bug，应该在nextTick中调用
  nextTick(() => {
    changeColor();
  });
  $emits("change", !props.modelValue);
};
/**
 * @description: 更改颜色的方法
 * @return {}
 */
const changeColor = () => {
  if (props.activeColor != "#1ec63b" || props.inactiveColor != "#dd001b") {
    // 改变switch的颜色
    let color = props.modelValue ? props.activeColor : props.inactiveColor;
    core.value.style.borderColor = color;
    core.value.style.backgroundColor = color;
  }
};

onMounted(() => {
  changeColor();
});
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
