<template>
    <div class="app-things-view">
        <div class="app-things-view__content">
            <span class="app-things-view__item" v-for="item in listItems" :key="item.id">{{ item.name }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import type {IObjItem} from '@/types/index';

    export interface IViewProps {
        listItems?: IObjItem[];
    }
    
    withDefaults(defineProps<IViewProps>(), {
        listItems: () => ([]),
    })
</script>

<style lang="scss" scoped>
    .app-things-view {
        overflow: hidden;
        padding: 10px;
        border: 2px solid #000;
    }

    .app-things-view__content {
        display: flex;
        flex-wrap: wrap;
        margin: -5px;
    }

    .app-things-view__item {
        padding: 3px;
        border: 2px solid #000;
        margin: 5px;
    }
</style>