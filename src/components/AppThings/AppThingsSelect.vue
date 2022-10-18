<template>
    <div class="app-things-select">
        <div class="app-things-select__content">
            <span v-for="item in listItems" 
                :key="item.id"
                class="app-things-select__item" :class="[selectedItems.indexOf(item) !== -1 ? 'app-things-select__item--disabled': '']"
                @click="onSelect(item)">
                {{ item.name }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import type {IObjItem} from '@/types/index';

    export interface ISelectProps {
        listItems?: IObjItem[];
        selectedItems?: IObjItem[];
        countSelectedItem?: number;
    }

    const emmit = defineEmits<{
        (e: 'update:selectedItems', value: IObjItem[]): void;
    }>();

    const props = withDefaults(defineProps<ISelectProps>(), {
        listItems: () => ([]),
        selectedItems: () => ([]),
        countSelectedItem: 6
    })

    const onSelect = (item: IObjItem) => {
        const result = props.selectedItems;

        result.unshift(item);

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