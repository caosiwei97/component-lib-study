<template>
  <button @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'SpButton',
    methods: {
      handleClick(e) {
        this.$emit('click', e)
        e.preventDefault()
      } 
    },
  }
</script>
