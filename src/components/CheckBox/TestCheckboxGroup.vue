<template>
  <div class="test-checkbox-group" role="group" aria-label="Checkbox-Group">
    <slot></slot>
  </div>
</template>
<script>
  import pick from 'lodash/pick';
  export default {
    name: 'TestCheckboxGroup',
    componentName: 'TestCheckboxGroup',
    props: {
      disabled: Boolean,
    },
    data() {
        return {
          value: [],
          groupData: []
        }
    }
  }
</script>
