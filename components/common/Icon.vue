<template>
        <span v-html="icons[name]"></span>
</template>
<script setup>
import { defineProps } from 'vue';
import icons from '../../composables/icons';
const props = defineProps({
    name:{}
})
</script>