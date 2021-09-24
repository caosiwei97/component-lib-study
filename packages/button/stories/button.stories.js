import SpButton from '..'

export default {
  title: 'SpButton',
  component: SpButton
} 

export const Submit = () => ({
  components: {
    SpButton
  },
  template: `
    <sp-button @click="handleClick">submit</sp-button>
  `,
  methods: {
    handleClick() {
      alert('submit')
    }
  }
})