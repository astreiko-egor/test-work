import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import AppThingsSelect from '@/components/AppThings/AppThingsSelect.vue';

// @vitest-environment happy-dom

describe('AppThingsSelect', () => {
    it('Отсуствие пунктов, если не передавать пропсы', () => {
        const wrapper = mount(AppThingsSelect);

        expect(wrapper.findAll('.app-things-select__item').length).toBe(0);
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
        const wrapper = mount(AppThingsSelect, { props: { listItems: data } });

        expect(wrapper.findAll('.app-things-select__item').length).toBe(data.length);
        expect(wrapper.findAll('.app-things-select__item')[0].text()).toBe('item 1');
        expect(wrapper.findAll('.app-things-select__item')[1].text()).toBe('item 2');
        wrapper.unmount();
    })

    it('Выбор пункта при клике', async () => {
        const data = [
            {
                id: 0,
                name: 'item 1'
            }
        ];
        const wrapper = mount(AppThingsSelect, { props: { listItems: data } });

        await wrapper.find('.app-things-select__item').trigger('click');

        expect(wrapper.emitted()['update:selectedItems'][0]).toEqual([[0]]);
        wrapper.unmount();
    })

    it('Нельзя выбрать больше элементов, чем заданно пропсами', async() => {
        const data = [
            {
                id: 0,
                name: 'item 1'
            },
            {
                id: 1,
                name: 'item 2'
            }
        ];
        let count = 2;
        const wrapper = mount(AppThingsSelect, { props: { listItems: data, countSelectedItem: count } });

        await wrapper.findAll('.app-things-select__item')[0].trigger('click');
        await wrapper.findAll('.app-things-select__item')[1].trigger('click');

        expect(wrapper.emitted()['update:selectedItems'][0]).toEqual([[1, 0]]);

        await wrapper.setProps({
            countSelectedItem: 1
        })

        await wrapper.findAll('.app-things-select__item')[0].trigger('click');
        await wrapper.findAll('.app-things-select__item')[1].trigger('click');
        expect(wrapper.emitted()['update:selectedItems'][0]).toEqual([[1]]);
        wrapper.unmount();
    })
})