<template>
    <div class="app-things-select">
        <div class="app-things-select__content">
            <span v-for="item in listItems" 
                :key="item.id"
                class="app-things-select__item" :class="[selectedItemsId.indexOf(item.id) !== -1 ? 'app-things-select__item--disabled': '']"
                @click="onSelect(item.id)">
                {{ item.name }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import type {IObjItem} from '@/types/index';

    export interface ISelectProps {
        listItems?: IObjItem[];
        selectedItemsId?: number[];
        countSelectedItem?: number;
    }

    const emmit = defineEmits<{
        (e: 'update:selectedItems', value: number[]): void;
    }>();

    const props = withDefaults(defineProps<ISelectProps>(), {
        listItems: () => ([]),
        selectedItemsId: () => ([]),
        countSelectedItem: 6
    })

    const onSelect = (id: number) => {
        const result = props.selectedItemsId;

        result.unshift(id);

        if (result.length > props.countSelectedItem) {
            result.length = props.countSelectedItem;
        }

        emmit('update:selectedItems', result);
    }
</script>

<style lang="scss" scoped>
    .app-things-select {
        overflow: hidden;
        padding: 10px;
        border: 2px solid #000;
    }

    .app-things-select__content {
        display: flex;
        flex-wrap: wrap;
        margin: -5px;
    }

    .app-things-select__item {
        padding: 3px;
        border: 2px solid #000;
        margin: 5px;
        cursor: pointer;

        &--disabled {
            opacity: 0.3;
            pointer-events: none;
        }
    }


</style>