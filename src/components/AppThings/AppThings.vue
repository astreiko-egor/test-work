<template>
    <div class="app-things">
        <app-things-view :list-items="leftViewItems" class="app-things__view app-things__view--left"/>
        <app-things-view :list-items="rightViewItems" class="app-things__view app-things__view--right"/>
        <app-things-select :list-items="leftData" v-model:selected-items-id="leftSelectedItemsId" class="app-things__select app-things__select--left"/>
        <app-things-select :list-items="rightData" v-model:selected-items-id="rightSelectedItemsId" :count-selected-item="1" class="app-things__select app-things__select--right"/>
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref, computed, defineComponent } from 'vue';
import type {IObjItem} from '@/types/index';

    const AppThingsSelect = defineAsyncComponent(() => import('@/components/AppThings/AppThingsSelect.vue'));
    const AppThingsView = defineAsyncComponent(() => import('@/components/AppThings/AppThingsView.vue'));

    const leftData = ref<IObjItem[]>([
        {
            "id": 1,
            "name": "Shoes 1"
        },
        {
            "id": 2,
            "name": "Shoes 2"
        },
        {
            "id": 3,
            "name": "Shoes 3"
        },
        {
            "id": 4,
            "name": "Shoes 4"
        },
        {
            "id": 5,
            "name": "T-shirt 1"
        },
        {
            "id": 6,
            "name": "T-shirt 2"
        },
        {
            "id": 7,
            "name": "T-shirt 3"
        },
        {
            "id": 8,
            "name": "T-shirt 4"
        }
    ]);
    const rightData = ref<IObjItem[]>([
        {
            "id": 11,
            "name": "Jacket 1"
        },
        {
            "id": 12,
            "name": "Jacket 2"
        },
        {
            "id": 13,
            "name": "Jacket 3"
        },
        {
            "id": 14,
            "name": "Jacket 4"
        },
        {
            "id": 15,
            "name": "Hoodie 1"
        },
        {
            "id": 16,
            "name": "Hoodie 2"
        },
        {
            "id": 17,
            "name": "Hoodie 3"
        },
        {
            "id": 18,
            "name": "Hoodie 4"
        }
    ]);
    const leftSelectedItemsId = ref<number[]>([]);
    const rightSelectedItemsId = ref<number[]>([]);
    const leftViewItems = computed(() => createViewArray(leftData.value, leftSelectedItemsId.value))
    const rightViewItems = computed(() => createViewArray(rightData.value, rightSelectedItemsId.value))

    const createViewArray = (allItems: IObjItem[], selectedItemsId: number[]) => {
        const result:IObjItem[] = [];
        selectedItemsId.forEach((selectedItemId: number) => {
            const findItem = allItems.find((item: IObjItem) => item.id === selectedItemId)
            if (findItem) {
                result.push(findItem)
            }
        })
        return result;
    }
</script>

<style lang="scss" scoped>
    .app-things {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: max-content auto;
        grid-gap: 30px;
    }

    .app-things__view {
        min-height: 250px;
    }
</style>