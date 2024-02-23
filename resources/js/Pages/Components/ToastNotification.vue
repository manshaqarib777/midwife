<template>
    <div
        v-if="isVisible"
        class="fixed bottom-5 right-5 p-4 mb-4 text-sm text-white bg-blue-500 rounded-lg shadow-md"
        role="alert"
    >
        {{ message }}
    </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const props = defineProps({
    message: String,
    isVisible: Boolean,
});

watchEffect(() => {
    if (props.isVisible) {
        setTimeout(() => {
            props.isVisible = false;
        }, 3000);
    }
});
</script>

