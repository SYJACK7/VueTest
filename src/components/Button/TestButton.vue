<script>
  import pick from 'lodash/pick';
  export default {
    name: 'TestButton',
    functional: true,
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
    render(h, context) {
      const {props, children} = context;
      const AdvanceSetting = props.advanced;
      let clazz = [
        'button',
        props.status ? `button-${props.status}` : '',
        `button-${props.size}`,
        props.shape ? `button-${props.shape}`:'',
        {
          'is-disabled': props.disabled,
        }
      ];
      props.advanced.forEach((item) => {
          clazz.push(`button-${item}`);
      });
      const data = pick(context.data, [
        'class', 'staticClass', 'style', 'staticStyle',
        'attrs', 'domProps', 'directives', 'on'
      ]);
      return props.wrap
        ? <span class={'button-wrap' + ' wrap-' + props.shape}><button type={props.type} disabled={props.disabled} class={clazz}
          {...data}
          {...{on: context.data.nativeOn}}>
          {children}
          </button></span>
        :<button type={props.type} disabled={props.disabled} class={clazz}
          {...data}
          {...{on: context.data.nativeOn}}>
          {children}
        </button>;
    }
  };
</script>
<style scoped>
  @import "../../assets/button.css";
</style>
