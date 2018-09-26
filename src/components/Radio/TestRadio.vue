<template>
  <span class="test-radio">
    <input :disabled=disabled :name=name :id=radioId :class=clazz type="radio"/>
    <label  :for=radioId class="radio-label">{{label}}</label>
    <slot></slot>
  </span>
</template>
<script>
  import pick from 'lodash/pick';
  var index = 0;
  export default {
    name: 'TestRadio',
    props: {
      label: {
        type: String,
        default: ''
      },
      size: {
        type: String || Number,
        default: 'medium'
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
      },
      name: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        clazz: [],
        radioId:''
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
        this.shape ? `radio-${this.shape}` : '',
        this.size ? `radio-${this.size}` : '',
      ];
      this.radioId = this.customId ? this.customId : 'radio' + index++;
    },
  }
</script>
<style>
  .test-checkbox {
    display: inline-block;
  }
  input[type="radio"] {
    display: none;
  }
  input[type="radio"] + label::before{
    content: "\a0";  /*不换行空格*/
    width: 1em;
    line-height: 1;
    display: inline-block;
    margin-right: .3em;
    background-color: white;
    /*border-radius: 50%;*/
    transition: background-color 0.5s;
    -o-transition: background-color 0.5s;
    -moz-transition: background-color 0.5s;
    -webkit-transition: background-color 0.5s;
    box-shadow:inset 0 0em 0 white, 0 0 .1em rgba(0,0,0,0.3), 0 0.1em .1em rgba(0,0,0,0.2);
  }
  input[type="radio"]:checked + label::before {
    content: "\2022"; /* 点*/
    color: white;
    background-color: deepskyblue;
    align-content: center;
  }
  input[type="radio"]:disabled + label::before {
    color: white;
    background-color: #DDDDDD;
    opacity: 0.8;
    align-content: center;
  }
  .radio-label {
    margin-right: .5em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  /*.checkbox-square + label::before{*/
    /*border-radius: 0;*/
  /*}*/
  /*.checkbox-rounded + label::before{*/
    /*border-radius: .2em;*/
  /*}*/
  /*.checkbox-circle + label::before{*/
    /*border-radius: 50%;*/
  /*}*/
  /*.checkbox-large + label::before {*/
    /*font-size: 1.2em;*/
  /*}*/
  /*.checkbox-large + label {*/
    /*font-size: 1.2em;*/
  /*}*/
  /*.checkbox-medium + label::before {*/
    /*font-size: 1em;*/
  /*}*/
  /*.checkbox-medium + label {*/
    /*font-size: 1em;*/
  /*}*/
  /*.checkbox-small + label::before {*/
    /*font-size: .5em;*/
  /*}*/
  /*.checkbox-small + label {*/
    /*font-size: .5em;*/
  /*}*/
</style>
