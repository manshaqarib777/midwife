<template>
  <div
    class="w-[23.38rem] rounded-xl bg-palevioletred overflow-hidden flex flex-col items-center justify-start p-[1.5rem] box-border gap-[0.56rem] min-w-[9.38rem] max-w-full text-center text-[1.31rem] text-world-peas-cremini-base font-poppins"
  >
    <div class="flex flex-col items-center justify-start gap-[0.56rem]">
      <img
        class="w-[3rem] h-[3rem] relative"
        loading="eager"
        alt=""
        :src="healthMedicineuserHeartHe"
      />
      <div
        class="h-[2rem] relative font-medium inline-block mq450:text-[1.06rem]"
      >
        {{prenatalCare}}
      </div>
    </div>
    <div class="self-stretch relative text-[1rem]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</template>
<script setup>


defineProps({
    healthMedicineuserHeartHe: { type: String },
    prenatalCare: { type: String }
});
</script>
