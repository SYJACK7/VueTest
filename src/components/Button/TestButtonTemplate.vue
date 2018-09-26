<template>
  <span v-if="this.wrap" class="button-wrap" :class="'wrap-' + this.shape">
    <button :type=type :disabled=disabled :class=clazz @click="handleClick">
      <slot></slot>
    </button>
  </span>
  <button v-else :type=type :disabled=disabled :class=clazz @click="handleClick">
    <slot></slot>
  </button>
</template>
<script>
  import pick from 'lodash/pick';
  export default {
    name: 'TestButton2',
    data() {
        return {
            clazz: []
        }
    },
    props: {
      status: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        // 'medium', 'large'
        default: 'normal'
      },
      type: {
        type: String,
        default: 'button'
      },
      loading: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      shape: {
        type: String,
        default: ''
      },
      wrap: {
        type: Boolean,
        default: false
      },
      advanced: {
        type: Array,
        default: () => []
      }
    },
    created() {
      this.clazz = [
        'button',
        this.status ? `button-${this.status}` : '',
        `button-${this.size}`,
        this.shape ? `button-${this.shape}`:'',
        {
          'is-disabled': this.disabled,
        }
      ];
      this.advanced.forEach((item) => {
        this.clazz.push(`button-${item}`);
      });
    },
    methods: {
        handleClick() {
            this.$emit("click");
        }
    }
  };
</script>
<style scoped>
  @import "../../assets/button.css";
</style>
