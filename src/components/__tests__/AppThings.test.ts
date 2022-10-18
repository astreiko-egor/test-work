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
      const leftData = [
        {
            id: 1,
            name: 'item 1'
        },
        {
            id: 2,
            name: 'item 2'
        },
      ];
        const rightData = [
          {
              id: 3,
              name: 'item 1'
          },
          {
              id: 4,
              name: 'item 2'
          },
        ];
        const wrapper = mount(AppThings);
          await flushPromises();
          await vi.dynamicImportSettled();        

        const leftSelectData = wrapper.find('.app-things__select--left');
        const rightSelectData = wrapper.find('.app-things__select--right');

        (wrapper.vm as any).leftData = leftData;
        (wrapper.vm as any).rightData = rightData;

        await flushPromises();

        expect((wrapper.vm as any).leftSelectedItems.length).toBe(0)
        expect((wrapper.vm as any).leftSelectedItems).toEqual([])
        expect((wrapper.vm as any).rightSelectedItems.length).toBe(0)
        expect((wrapper.vm as any).rightSelectedItems).toEqual([])

        await leftSelectData.find('.app-things-select__item').trigger('click');
        expect((wrapper.vm as any).leftSelectedItems.length).toBe(1)
        expect((wrapper.vm as any).leftSelectedItems).toEqual([leftData[0]])

        await rightSelectData.find('.app-things-select__item').trigger('click');
        expect((wrapper.vm as any).rightSelectedItems.length).toBe(1)
        expect((wrapper.vm as any).rightSelectedItems).toEqual([rightData[0]])
    })
})