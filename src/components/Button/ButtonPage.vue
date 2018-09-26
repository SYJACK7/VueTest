<template>
  <div>
    <div class="default">
      <h3>Default</h3>
      <TestButton size="tiny">tiny</TestButton>
      <TestButton size="small">small</TestButton>
      <TestButton size="normal">normal</TestButton>
      <TestButton size="large">large</TestButton>
      <TestButton size="large" shape="pill">pill</TestButton>
      <TestButton size="large" shape="rounded">rounded</TestButton>
      <TestButton size="large" shape="box">box</TestButton>
      <TestButton size="large" shape="square">square</TestButton>
      <TestButton size="large" shape="circle">circle</TestButton>
    </div>
    <div class="primary">
      <h3>Primary</h3>
      <TestButton size="tiny" status="primary">tiny</TestButton>
      <TestButton size="small" status="primary">small</TestButton>
      <TestButton status="primary" size="normal">normal</TestButton>
      <TestButton status="primary" size="large">large</TestButton>
      <TestButton status="primary" size="large" shape="pill">pill</TestButton>
      <TestButton status="primary" size="large" shape="rounded">rounded</TestButton>
      <TestButton status="primary" size="large" shape="box">box</TestButton>
      <TestButton status="primary" size="large" shape="square">square</TestButton>
      <TestButton status="primary" size="large" shape="circle">circle</TestButton>
    </div>
    <br/>
    <div class="action">
      <h3>Action</h3>
      <TestButton size="tiny" status="action">tiny</TestButton>
      <TestButton size="small" status="action">small</TestButton>
      <TestButton status="action">normal</TestButton>
      <TestButton status="action" size="large">large</TestButton>
      <TestButton status="action" size="large" shape="pill">pill</TestButton>
      <TestButton status="action" size="large" shape="rounded">rounded</TestButton>
      <TestButton status="action" size="large" shape="box">box</TestButton>
      <TestButton status="action" size="large" shape="square">square</TestButton>
      <TestButton status="action" size="large" shape="circle">circle</TestButton>
    </div>
    <div class="highlight">
      <h3>Highlight</h3>
      <TestButton size="tiny" status="highlight">tiny</TestButton>
      <TestButton size="small" status="highlight">small</TestButton>
      <TestButton status="highlight">normal</TestButton>
      <TestButton status="highlight" size="large">large</TestButton>
      <TestButton status="highlight" size="large" shape="pill">pill</TestButton>
      <TestButton status="highlight" size="large" shape="rounded">rounded</TestButton>
      <TestButton status="highlight" size="large" shape="box">box</TestButton>
      <TestButton status="highlight" size="large" shape="square">square</TestButton>
      <TestButton status="highlight" size="large" shape="circle">circle</TestButton>
    </div>
    <div class="caution">
      <h3>Caution</h3>
      <TestButton size="tiny" status="caution">tiny</TestButton>
      <TestButton size="small" status="caution">small</TestButton>
      <TestButton status="caution">normal</TestButton>
      <TestButton status="caution" size="large">large</TestButton>
      <TestButton status="caution" size="large" shape="pill">pill</TestButton>
      <TestButton status="caution" size="large" shape="rounded">rounded</TestButton>
      <TestButton status="caution" size="large" shape="box">box</TestButton>
      <TestButton status="caution" size="large" shape="square">square</TestButton>
      <TestButton status="caution" size="large" shape="circle">circle</TestButton>
    </div>
    <div class="royal">
      <h3>Royal</h3>
      <TestButton size="tiny" status="royal">tiny</TestButton>
      <TestButton size="small" status="royal">small</TestButton>
      <TestButton status="royal">normal</TestButton>
      <TestButton status="royal" size="large">large</TestButton>
      <TestButton status="royal" size="large" shape="pill">pill</TestButton>
      <TestButton status="royal" size="large" shape="rounded">rounded</TestButton>
      <TestButton status="royal" size="large" shape="box">box</TestButton>
      <TestButton status="royal" size="large" shape="square">square</TestButton>
      <TestButton status="royal" size="large" shape="circle">circle</TestButton>
    </div>
    <div class="wrap">
      <h3>Wrap</h3>
      <TestButton size="large" wrap shape="pill">pill</TestButton>
      <TestButton size="large" status="primary" wrap shape="rounded">rounded</TestButton>
      <TestButton size="large" status="action" wrap shape="box">box</TestButton>
      <TestButton size="large" status="highlight" wrap shape="square">square</TestButton>
      <TestButton size="large" status="caution" wrap shape="circle">circle</TestButton>
      <TestButton size="large" status="royal" wrap >wrap</TestButton>
    </div>
    <div class="advanced">
      <h3>Advanced</h3>
      <TestButton :advanced="advanced1">3d</TestButton>
      <TestButton shape="pill" status="primary" :advanced="advanced2">raised</TestButton>
      <TestButton shape="rounded" status="action" :advanced="advanced3">longshadow</TestButton>
      <TestButton shape="rounded" status="action" :advanced="advanced4">3d longshadow</TestButton>
      <TestButton shape="square" status="highlight" :advanced="advanced5">glow</TestButton>
      <TestButton shape="box" size="large" status="caution" :advanced="advanced6">border</TestButton>
      <TestButton shape="pill" status="caution" :advanced="advanced7">3d border</TestButton>
    </div>
    <div style="height: 300px;width: 100%;"></div>
  </div>
</template>

<script>
  import TestButton from './TestButtonTemplate.vue';
  export default {
  name: 'ButtonPage',
  data () {
    return {
      msg: 'Button',
      advanced1:['3d'],
      advanced2:['raised'],
      advanced3:['longshadow'],
      advanced4:['3d','longshadow-right','longshadow-expand'],
      advanced5:['glow'],
      advanced6:['border'],
      advanced7:['3d','border'],
    }
  },
  components: {
      TestButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
