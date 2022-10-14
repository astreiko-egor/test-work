<template>
  <app-things/>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const AppThings = defineAsyncComponent(() => import('@/components/AppThings/AppThings.vue'))
</script>
