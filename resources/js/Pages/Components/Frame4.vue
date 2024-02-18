<template>
  <div
    class="w-[26rem] flex flex-col items-center justify-start py-[0rem] px-[1rem] box-border gap-[0.56rem] text-center text-[1.5rem] text-midnightblue-100 font-poppins"
  >
    <img class="w-[4.63rem] relative h-[4.5rem]" alt="" :src="frame17" />
    <div class="relative font-medium">{{prenatalCare}}</div>
    <div class="self-stretch relative text-[1rem] text-slategray-200">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</template>
<script setup>

  defineProps({
    frame17: { type: String },
    prenatalCare: { type: String },
});
</script>
