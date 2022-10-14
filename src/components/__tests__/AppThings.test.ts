import { describe, it, expect, vi } from 'vitest';

import { flushPromises, mount } from '@vue/test-utils';
import AppThings from '@/components/AppThings/AppThings.vue';

// @vitest-environment jsdom

describe('AppThings', () => {

    it('Рендер компонента', async() => {
        const wrapper = mount(AppThings);
          await flushPromises();
          await vi.dynamicImportSettled();

          expect(wrapper.find('.app-things').exists()).toBe(true)

          expect(wrapper.find('.app-things__view--left').exists()).toBe(true);
          expect(wrapper.find('.app-things__view--right').exists()).toBe(true);
          expect(wrapper.find('.app-things__select--left').exists()).toBe(true);
          expect(wrapper.find('.app-things__select--right').exists()).toBe(true);
          wrapper.unmount();
    })

    it('Отображение выбранных элементов левого блока', async () => {
        const wrapper = mount(AppThings);
          await flushPromises();
          await vi.dynamicImportSettled();

        const leftSelectData = wrapper.find('.app-things__select--left');
        const rightSelectData = wrapper.find('.app-things__select--right');

          expect(wrapper.vm.leftSelectedItemsId.length).toBe(0)
          expect(wrapper.vm.leftSelectedItemsId).toEqual([])
          expect(wrapper.vm.rightSelectedItemsId.length).toBe(0)
          expect(wrapper.vm.rightSelectedItemsId).toEqual([])

          await leftSelectData.find('.app-things-select__item').trigger('click');
          expect(wrapper.vm.leftSelectedItemsId.length).toBe(1)
          expect(wrapper.vm.leftSelectedItemsId).toEqual([1])

          await rightSelectData.find('.app-things-select__item').trigger('click');
          expect(wrapper.vm.rightSelectedItemsId.length).toBe(1)
          expect(wrapper.vm.rightSelectedItemsId).toEqual([11])

    })
})