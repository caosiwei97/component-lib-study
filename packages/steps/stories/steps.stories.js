import SpSteps from '../src/steps.vue'
import SpButton from '../../button/src/SpButton'

export default {
  title: 'SpSteps',
  component: SpSteps,
}

export const Steps = (_) => ({
  components: { SpSteps, SpButton },
  template: `
    <div>
      <sp-steps :active="active" :count="count"></sp-steps>
      <sp-button @click="handleClick">next</sp-button>
    </div>
  `,
  data() {
    return {
      active: 1,
      count: 3,
    }
  },
  methods: {
    handleClick() {
      this.active = this.active < this.count ? this.active + 1 : this.count
    },
  },
})
