<template>
  <div>
    <h3>Button</h3>
    <TestButton  size="small" shape="pill" status="primary" @click="routeButton">Button</TestButton>
    <TestButtonT  size="small" shape="pill" status="caution" @click="routeButton">Button2</TestButtonT>
    <h3>Checkbox</h3>
    <TestCheckboxGroup>
      <TestCheckbox size="large" label="Large"></TestCheckbox>
      <TestCheckbox size="" shape="circle" label="Medium"></TestCheckbox>
      <TestCheckbox size="small"  shape="rounded" label="Small"></TestCheckbox>
      <TestCheckbox label="Disabled" disabled></TestCheckbox>
    </TestCheckboxGroup>
    <TestCheckbox label="Disabled" disabled></TestCheckbox>
    <h3>Radio</h3>
    <TestRadio name="test" label="Radio"></TestRadio>
    <TestRadio name="test" label="Radio2"></TestRadio>
  </div>
</template>
<script>
  import TestButton from './Button/TestButton.vue';
  import TestButtonT from './Button/TestButtonTemplate.vue';
  import TestCheckbox from './CheckBox/TestCheckbox.vue';
  import TestCheckboxGroup from './CheckBox/TestCheckboxGroup.vue'
  import TestRadio from './Radio/TestRadio.vue'
  export default {
    name: 'Index',
    components: {
      TestButton,
      TestCheckbox,
      TestButtonT,
      TestCheckboxGroup,
      TestRadio
    },
    methods: {
      routeButton() {
          this.$router.replace('Button');
      }
    }
  }
</script>
