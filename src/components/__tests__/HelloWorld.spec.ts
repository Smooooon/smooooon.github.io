import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HeaderSection from '../HeaderSection.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HeaderSection, { props: { title: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
