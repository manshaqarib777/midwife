<template>
  <section
    class="flex flex-row items-start justify-start pt-0 px-5 pb-[33px] box-border max-w-full text-center text-23xl text-midnightblue-100 font-poppins"
  >
    <div
      class="flex flex-col items-center justify-start gap-[48px] max-w-full mq725:gap-[48px]"
    >
      <h1
        class="m-0 relative text-inherit leading-[140%] font-semibold font-inherit inline-block max-w-full mq450:text-6xl mq450:leading-[35px] mq1000:text-15xl mq1000:leading-[47px]"
      >
        More About Me
      </h1>
      <div
        class="w-[1280px] overflow-x-auto flex flex-col items-start justify-start gap-[24px] max-w-full text-lg"
      >
        <!-- <FaqFrame /> -->
        <div class="w-[1280px] flex flex-row items-start justify-start gap-[16px] text-center text-lg text-midnightblue-100 font-poppins">
            <FaqFrame class="flex-1">
            <template #header>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </template>
            <!-- Panel Content -->
            Your content here...
            </FaqFrame>
            <FaqFrame class="flex-1">
            <template #header>
                Another panel header
            </template>
            <!-- Panel Content -->
            More content here...
            </FaqFrame>
        </div>
        <div class="w-[1280px] flex flex-row items-start justify-start gap-[16px] text-center text-lg text-midnightblue-100 font-poppins">
            <FaqFrame class="flex-1">
            <template #header>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </template>
            <!-- Panel Content -->
            Your content here...
            </FaqFrame>
            <FaqFrame class="flex-1">
            <template #header>
                Another panel header
            </template>
            <!-- Panel Content -->
            More content here...
            </FaqFrame>
        </div>
        <div class="w-[1280px] flex flex-row items-start justify-start gap-[16px] text-center text-lg text-midnightblue-100 font-poppins">
            <FaqFrame class="flex-1">
            <template #header>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </template>
            <!-- Panel Content -->
            Your content here...
            </FaqFrame>
            <FaqFrame class="flex-1">
            <template #header>
                Another panel header
            </template>
            <!-- Panel Content -->
            More content here...
            </FaqFrame>
        </div>
      </div>
    </div>

  </section>
</template>
<script setup>
    import { ref } from 'vue';
    import FaqFrame from "./FaqFrame.vue";
</script>
