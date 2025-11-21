import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InlineCode from './InlineCode.vue'

describe('InlineCode Component', () => {
	it('should render code text correctly', () => {
		const wrapper = mount(InlineCode, {
			props: {
				code: 'npm install',
			},
		})

		expect(wrapper.text()).toContain('npm install')
		expect(wrapper.find('code').exists()).toBe(true)
		expect(wrapper.find('mark').exists()).toBe(true)
	})

	it('should accept code prop', () => {
		const testCode = 'git commit -m "test"'
		const wrapper = mount(InlineCode, {
			props: {
				code: testCode,
			},
		})

		expect(wrapper.props('code')).toBe(testCode)
	})

	it('should accept disableCopy prop', () => {
		const wrapper = mount(InlineCode, {
			props: {
				code: 'test',
				disableCopy: true,
			},
		})

		expect(wrapper.props('disableCopy')).toBe(true)
	})

	it('should render with proper structure', () => {
		const wrapper = mount(InlineCode, {
			props: {
				code: 'test command',
			},
		})

		const code = wrapper.find('code')
		expect(code.classes()).toContain('position-relative')

		const mark = wrapper.find('mark')
		expect(mark.exists()).toBe(true)
		expect(mark.text()).toContain('test command')
	})
})
