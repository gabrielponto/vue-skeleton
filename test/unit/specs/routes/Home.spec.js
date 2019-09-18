import { shallowMount } from '@vue/test-utils'
import Home from '../../../../src/routes/Home'

const factory = (values = {}) => {
    return shallowMount(Home, {
        data: { ...values },
        stubs: ['router-link', 'font-awesome-icon']
    })
}

describe('Home', () => {
    it('Show two links to load own workspaces or create new', () => {
        const wrapper = factory()

        expect(wrapper.find('.home-button').count()).toEqual(2)
    })
})