<template>
  <section
    class="w-[74.75rem] flex flex-col items-center justify-start pt-[0rem] px-[1.25rem] pb-[2.69rem] box-border gap-[1.69rem] max-w-full text-center text-[2.63rem] text-midnightblue-100 font-poppins mq1000:pb-[1.75rem] mq1000:box-border"
  >
    <div
      class="w-[32.75rem] flex flex-col items-center justify-start gap-[0.56rem] max-w-full"
    >
      <h1
        class="m-0 relative text-inherit leading-[140%] font-semibold font-inherit mq450:text-[1.56rem] mq450:leading-[2.19rem] mq1000:text-[2.13rem] mq1000:leading-[2.94rem]"
      >
        Services
      </h1>
      <div
        class="self-stretch h-[4.88rem] relative text-[1rem] leading-[160%] text-slategray-200 inline-block"
      >
        I offer a range of comprehensive midwifery services tailored to meet the
        unique needs of each mother and family. These services include:
      </div>
    </div>
    <div
      class="self-stretch flex flex-row flex-wrap items-start justify-center gap-[2.31rem_0.75rem] min-h-[32.56rem] max-w-full text-[1.31rem] text-world-peas-cremini-base"
    >
      <EmailCallFrame
        healthMedicineuserHeartHe="/images/health-medicineuserhearthealth.svg"
        prenatalCare="Prenatal care"
      /><EmailCallFrame
        healthMedicineuserHeartHe="/images/baby-children-toystoyspuzzle.svg"
        prenatalCare="Childbirth education"
      /><EmailCallFrame
        healthMedicineuserHeartHe="/images/baby-children-toysbabychild.svg"
        prenatalCare="Labor support"
      /><EmailCallFrame
        healthMedicineuserHeartHe="/images/beautylistdietheart.svg"
        prenatalCare="Postpartum care"
      />
      <div
        class="w-[23.38rem] rounded-xl bg-palevioletred overflow-hidden flex flex-col items-center justify-start p-[1.5rem] box-border gap-[0.56rem] min-w-[9.38rem] max-w-full"
      >
        <img
          class="w-[3rem] h-[3rem] relative"
          loading="eager"
          alt=""
          src="/images/baby-children-toysbottle.svg"
        />
        <div class="flex flex-col items-center justify-start">
          <div
            class="h-[2rem] relative font-medium inline-block mq450:text-[1.06rem]"
          >
            Breastfeeding support
          </div>
        </div>
        <div class="self-stretch relative text-[1rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <EmailCallFrame
        healthMedicineuserHeartHe="/images/baby-children-toystrolley.svg"
        prenatalCare="Newborn care"
      />
    </div>
  </section>
</template>
<script setup>
  import EmailCallFrame from "./EmailCallFrame.vue";


</script>
