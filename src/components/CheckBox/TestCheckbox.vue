<template>
  <span class="test-checkbox">
    <input :disabled=disabled :checked=checked :id=boxId :class=clazz type="checkbox"/>
    <label  :for=boxId class="checkbox-label">{{label}}</label>
    <slot></slot>
  </span>
</template>
<script>
  import pick from 'lodash/pick';
  var index = 0;
  export default {
    name: 'TestCheckbox',
    props: {
      label: {
        type: String,
        default: ''
      },
      size: {
        type: String || Number,
        default: 'medium'
      },
      checked: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      shape: {
        type: String,
        default: 'square'
      },
      customId: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        clazz: [],
        boxId:''
      }
    },
    computed: {
      isGrouped() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'TestCheckboxGroup') {
            parent = parent.$parent;
          } else {
            this._checkboxGroup = parent;
            return true;
          }
        }
        return false;
      }
    },
    created() {
      this.clazz = [
        this.shape ? `checkbox-${this.shape}` : '',
        this.size ? `checkbox-${this.size}` : '',
      ];
      this.boxId = this.customId ? this.customId : 'checkbox' + index++;
    },
  }
</script>
<style>
  .test-checkbox {
    display: inline-block;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] + label::before{
    content: "\a0";  /*不换行空格*/
    width: 1em;
    line-height: 1;
    display: inline-block;
    margin-right: .3em;
    background-color: white;
    transition: background-color 0.5s;
    -o-transition: background-color 0.5s;
    -moz-transition: background-color 0.5s;
    -webkit-transition: background-color 0.5s;
    box-shadow:inset 0 0em 0 white, 0 0 .1em rgba(0,0,0,0.3), 0 0.1em .1em rgba(0,0,0,0.2);
  }
  input[type="checkbox"]:checked + label::before {
    content: "\2714"; /* 加粗勾号*/
    color: white;
    background-color: deepskyblue;
    align-content: center;
  }
  input[type="checkbox"]:disabled + label::before {
    color: white;
    background-color: #DDDDDD;
    opacity: 0.8;
    align-content: center;
  }
  .checkbox-label {
    margin-right: .5em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .checkbox-square + label::before{
    border-radius: 0;
  }
  .checkbox-rounded + label::before{
    border-radius: .2em;
  }
  .checkbox-circle + label::before{
    border-radius: 50%;
  }
  .checkbox-large + label::before {
    font-size: 1.2em;
  }
  .checkbox-large + label {
    font-size: 1.2em;
  }
  .checkbox-medium + label::before {
    font-size: 1em;
  }
  .checkbox-medium + label {
    font-size: 1em;
  }
  .checkbox-small + label::before {
    font-size: .5em;
  }
  .checkbox-small + label {
    font-size: .5em;
  }
</style>
