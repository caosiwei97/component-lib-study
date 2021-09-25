<template>
  <form class="spp-form">
    <slot></slot>
  </form>
</template>

<script>
  export default {
    name: 'SppForm',

    props: {
      model: Object,
      rules: Object,
    },

    provide() {
      return {
        form: this,
      }
    },

    methods: {
      validate(cb) {
        // 通知所有表单项进行校验
        const tasks = this.$children
          .filter((child) => child.prop)
          .map((child) => child.validate())
        Promise.all(tasks)
          .then(() => cb(true))
          .catch(() => cb(false))
      },
    },
  }
</script>
