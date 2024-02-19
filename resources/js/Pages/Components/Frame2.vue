<template>
    <div
      class="rounded-2xl bg-world-peas-cremini-base box-border flex flex-col items-start justify-start py-6 px-[15px] max-w-full border-[1px] border-solid border-midnightblue-200"
    >
      <div
        @click="isOpen = !isOpen"
        class="self-stretch cursor-pointer flex flex-row items-center justify-between gap-[20px]"
      >
        <div class="font-medium">
          <slot name="header">Default Header</slot>
        </div>
        <div
          class="h-6 w-6 rounded-xl bg-plum flex items-center justify-center transition-transform"
          :class="{'rotate-180': isOpen}"
        >
          <!-- You can replace this with your arrow icon -->
          <img
            class="h-6 w-6"
            alt=""
            src="/images/arrows-diagramsarrow-2.svg"
          />
        </div>
      </div>
      <div v-if="isOpen" class="mt-4">
        <slot>
          Default panel content.
        </slot>
      </div>
    </div>
  </template>

  <script setup>
   import { ref } from 'vue';

  const isOpen = ref(false);
  </script>

  <style scoped>
  .rotate-180 {
    transform: rotate(180deg);
  }
  </style>
