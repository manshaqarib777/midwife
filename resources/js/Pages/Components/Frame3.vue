<template>
  <div
    class="w-[416px] flex flex-col items-center justify-start py-0 px-4 box-border gap-[9px] max-w-full text-center text-5xl text-midnightblue-100 font-poppins"
  >
    <img
      class="w-[74px] h-[72px] relative"
      loading="eager"
      alt=""
      :src="frame17"
    />
    <h3
      class="m-0 h-9 relative text-inherit font-medium font-inherit inline-block mq450:text-lgi"
    >
      {{prenatalCare}}
    </h3>
    <div class="self-stretch relative text-base text-slategray-200">
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
