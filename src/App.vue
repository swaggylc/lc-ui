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
</template>

<script setup>
import LcButton from './components/button/LcButton.vue';


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