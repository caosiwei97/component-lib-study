<template>
  <div class="lg-input">
    <input :type="type" v-bind="$attrs" @input="handleInput" />
  </div>
</template>

<script>
  export default {
    name: 'SpInput',
    inheriAttrs: false,
    props: {
      type: {
        type: String,
        default: 'text',
      },
      value: {
        type: String,
        default: '',
      },
    },

    data() {
      return {
        errorMessage: '',
      }
    },

    methods: {
      handleInput(e) {
        // 触发 input 事件，进行双向绑定
        this.$emit('input', e.target.value)
        // 查看父组件是否有 LgFormItem ，有通知校验
        const findParent = (parent) => {
          while (parent) {
            if (parent.$options.name === 'LgFormItem') break
            parent = parent.$parent
          }
          return parent
        }
        const parentComp = findParent(this.$parent)
        if (parentComp) {
          parentComp.$emit('validate')
        }
      },
    },
  }
</script>
