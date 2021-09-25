import SpInput from '../src/SpInput'
import { shallowMount, mount } from '@vue/test-utils'

describe('SpInput', () => {
  it(`render a password input when type is 'password' `, () => {
    const wrapper = mount(SpInput, {
      propsData: {
        type: 'password',
      },
    })
    expect(wrapper.find('input').html()).toContain('input type="password"')
  })
})
