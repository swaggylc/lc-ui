<template>
  <div class="row">
    <lc-button>一号按钮</lc-button>
    <lc-button type="primary">primary</lc-button>
    <lc-button type="success">success</lc-button>
    <lc-button type="info">info</lc-button>
    <lc-button type="warning">warning</lc-button>
    <lc-button type="danger">danger</lc-button>
  </div>
  <div class="row">
    <lc-button plain>一号按钮</lc-button>
    <lc-button plain type="primary">primary</lc-button>
    <lc-button plain type="success">success</lc-button>
    <lc-button plain type="info">info</lc-button>
    <lc-button plain type="warning">warning</lc-button>
    <lc-button plain type="danger">danger</lc-button>
  </div>
  <div class="row">
    <lc-button round>一号按钮</lc-button>
    <lc-button round type="primary">primary</lc-button>
    <lc-button round type="success">success</lc-button>
    <lc-button round type="info">info</lc-button>
    <lc-button round type="warning">warning</lc-button>
    <lc-button round type="danger">danger</lc-button>
  </div>
  <div class="row">
    <lc-button circle>圆</lc-button>
    <lc-button circle type="primary">圆</lc-button>
    <lc-button circle type="success">圆</lc-button>
    <lc-button circle type="info">圆</lc-button>
    <lc-button circle type="warning">圆</lc-button>
    <lc-button circle type="danger">圆</lc-button>
  </div>
  <div class="row">
    <lc-button icon="icon-check">一号按钮</lc-button>
    <lc-button icon="icon-check" type="primary">primary</lc-button>
    <lc-button icon="icon-check" type="success">success</lc-button>
    <lc-button icon="icon-check" type="info">info</lc-button>
    <lc-button icon="icon-check" type="warning">warning</lc-button>
    <lc-button icon="icon-check" type="danger">danger</lc-button>
  </div>
  <div class="row">
    <lc-button @btnClick="fn" icon="icon-check" circle></lc-button>
    <lc-button icon="icon-check" circle type="primary"></lc-button>
    <lc-button icon="icon-check" circle type="success"></lc-button>
    <lc-button icon="icon-check" circle type="info"></lc-button>
    <lc-button icon="icon-check" circle type="warning"></lc-button>
    <lc-button icon="icon-check" circle type="danger"></lc-button>
  </div>
  <div class="row">
    <lc-button disabled icon="icon-check" circle></lc-button>
    <lc-button disabled icon="icon-check" circle type="primary"></lc-button>
    <lc-button disabled icon="icon-check" circle type="success"></lc-button>
    <lc-button disabled icon="icon-check" circle type="info"></lc-button>
    <lc-button disabled icon="icon-check" circle type="warning"></lc-button>
    <lc-button disabled icon="icon-check" circle type="danger"></lc-button>
  </div>
  <div class="row">
    <!-- <lc-dialog title="你好"></lc-dialog> -->
    <lc-button type="primary" @click="visible = true">打开弹窗</lc-button>
    <lc-dialog top="200px" width="600px" v-model:visible="visible">
      <template v-slot:title>
        <h3 style="color: red">我是插槽</h3>
      </template>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <lc-button @click="visible = false">取消</lc-button>
        <lc-button type="primary" @click="visible = false">确定</lc-button>
      </template>
    </lc-dialog>
  </div>
  <div class="row">
    <div class="col">
      <lc-input placeholder="请输入用户名" :disabled="true"></lc-input>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <!-- 父组件中通过v-model绑定，子组件中通过value接收 -->
      <lc-input
        placeholder="请输入用户名"
        v-model="userName"
        clearable
      ></lc-input>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <lc-input
        placeholder="请输入密码"
        v-model="passWord"
        showPassword
      ></lc-input>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <lc-switch v-model="switchActive1" :name="switchName"></lc-switch>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <lc-switch
        v-model="switchActive2"
        :name="switchName"
        activeColor="red"
        inactiveColor="#333"
        @change="change"
      ></lc-switch>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <lc-radio label="1" v-model="gender">男</lc-radio>
      <lc-radio label="0" v-model="gender">女</lc-radio>
      <lc-radio></lc-radio>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <lc-radio-group v-model="gender">
        <lc-radio label="1">男</lc-radio>
        <lc-radio label="0">女</lc-radio>
      </lc-radio-group>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <lc-form :model="model" label-width="100px">
        <lc-form-item label="用户名">
          <lc-input placeholder="请输入用户名" v-model="model.userName"></lc-input>
        </lc-form-item>
        <lc-form-item label="密码">
          <lc-input placeholder="请输入密码" v-model="model.passWord" showPassword></lc-input>
        </lc-form-item>
      </lc-form>
    </div>
  </div>
</template>

<script setup>
import LcButton from "./components/button/LcButton.vue";
import LcDialog from "./components/dialog/LcDialog.vue";
import LcInput from "./components/input/LcInput.vue";
import LcSwitch from "./components/switch/LcSwitch.vue";
import LcRadio from "./components/radio/LcRadio.vue";
import LcRadioGroup from "./components/radio-group/LcRadioGroup.vue";
import LcForm from "./components/form/LcForm.vue";
import LcFormItem from "./components/form-item/LcFormItem.vue";
import { ref } from "vue";

let visible = ref(false);
let userName = ref("zs");
let passWord = ref("");
let switchName = ref("swaggy");
let switchActive1 = ref(false);
let switchActive2 = ref(false);
let gender = ref("1");
let model = ref({
  userName: "",
  passWord: "",
});
const fn = () => {
  console.log("123");
};
const close = (value) => {
  visible.value = value;
};
/**
 * @description: switch改变的回调
 * @param {} boolean switch的值
 * @return {}
 */
const change = (value) => {};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  margin-top: 20px;

  .col {
    width: 30%;
  }

  .lc-button {
    margin-right: 20px;
  }
}
</style>
