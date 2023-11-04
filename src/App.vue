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