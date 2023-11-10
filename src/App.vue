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
    <lc-button icon="icon-delete">一号按钮</lc-button>
    <lc-button icon="icon-delete" type="primary">primary</lc-button>
    <lc-button icon="icon-delete" type="success">success</lc-button>
    <lc-button icon="icon-delete" type="info">info</lc-button>
    <lc-button icon="icon-delete" type="warning">warning</lc-button>
    <lc-button icon="icon-delete" type="danger">danger</lc-button>
  </div>
  <div class="row">
    <lc-button @btnClick="fn" icon="icon-delete" circle></lc-button>
    <lc-button icon="icon-delete" circle type="primary"></lc-button>
    <lc-button icon="icon-delete" circle type="success"></lc-button>
    <lc-button icon="icon-delete" circle type="info"></lc-button>
    <lc-button icon="icon-delete" circle type="warning"></lc-button>
    <lc-button icon="icon-delete" circle type="danger"></lc-button>
  </div>
  <div class="row">
    <lc-button disabled icon="icon-delete" circle></lc-button>
    <lc-button disabled icon="icon-delete" circle type="primary"></lc-button>
    <lc-button disabled icon="icon-delete" circle type="success"></lc-button>
    <lc-button disabled icon="icon-delete" circle type="info"></lc-button>
    <lc-button disabled icon="icon-delete" circle type="warning"></lc-button>
    <lc-button disabled icon="icon-delete" circle type="danger"></lc-button>
  </div>
  <div class="row">
    <!-- <lc-dialog title="你好"></lc-dialog> -->
    <lc-button type="primary" @click="visible = true">打开弹窗</lc-button>
    <lc-dialog top='200px' width="600px" v-model:visible="visible">
      <template v-slot:title>
        <h3 style="color:red;">我是插槽</h3>
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
</template>

<script setup>
import LcButton from './components/button/LcButton.vue';
import LcDialog from './components/dialog/LcDialog.vue';
import { ref } from 'vue';

let visible = ref(false)

const fn = () => {
  console.log('123');
}
const close = (value) => {
  visible.value = value
}

</script>

<style lang="scss" scoped>
.row {
  display: flex;
  margin-top: 20px;

  .lc-button {
    margin-right: 20px;
  }
}
</style>