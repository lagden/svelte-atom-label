/* globals describe, afterEach, test, expect */

import {cleanup, render} from '@testing-library/svelte'
import {Label} from '../src/label.js'
import Slot from './Slot.svelte'

describe('Label', () => {
	afterEach(cleanup)

	test('should match snapshot default', () => {
		const {container} = render(Label)
		expect(container).toMatchSnapshot()
	})

	test('should match snapshot props', () => {
		const {container} = render(Label, {
			props: {
				class: 'customCss',
				for: 'inputID',
				required: true,
				disabled: false,
				'data-test': 1
			}
		})
		expect(container).toMatchSnapshot()
	})

	test('should match snapshot with slot', () => {
		const {container} = render(Slot)
		expect(container).toMatchSnapshot()
	})
})
