import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils'
import AppThingsView from '@/components/AppThings/AppThingsView.vue'

// @vitest-environment happy-dom

describe('AppThingsView', () => {
    it('Отсуствие пунктов, если не передавать пропсы', () => {
        const wrapper = mount(AppThingsView);

        expect(wrapper.findAll('.app-things-view__item').length).toBe(0);
        wrapper.unmount();
    })
    it('Рендер пунктов при передаче пропсов', () => {
        const data = [
            {
                id: 0,
                name: 'item 1'
            },
            {
                id: 0,
                name: 'item 2'
            },
        ];
        const wrapper = mount(AppThingsView, { props: { listItems: data } });

        expect(wrapper.findAll('.app-things-view__item').length).toBe(data.length);
        expect(wrapper.findAll('.app-things-view__item')[0].text()).toBe('item 1');
        expect(wrapper.findAll('.app-things-view__item')[1].text()).toBe('item 2');
        wrapper.unmount();
    })
})