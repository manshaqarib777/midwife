<template>
  <section
    class="w-[1320px] flex flex-row items-center justify-center pt-0 px-5 pb-11 box-border max-w-full text-center text-23xl text-midnightblue-100 font-poppins mq725:pb-[29px] mq725:box-border"
  id="services">
    <div
      class="flex-1 flex flex-col items-center justify-center gap-[80px] max-w-full mq725:gap-[80px] mq450:gap-[80px]"
    >
      <div
        class="w-[601px] flex flex-col items-center justify-center gap-[9px] max-w-full"
      >
        <h1
          class="m-0 relative text-inherit leading-[140%] font-semibold font-inherit mq450:text-6xl mq450:leading-[35px] mq1000:text-15xl mq1000:leading-[47px]"
        >
          Services
        </h1>
        <div
          class="self-stretch relative text-base leading-[160%] text-slategray-200"
        >
          I offer a range of comprehensive midwifery services tailored to meet
          the unique needs of each mother and family. These services include:
        </div>
        <div
          class="flex flex-row items-center justify-center gap-[24px] max-w-full text-base mq450:flex-wrap"
        >
          <button
            class="cursor-pointer [border:none] py-2 px-[22px] bg-plum h-12 rounded-6xs flex flex-row items-center justify-center box-border gap-[4px] whitespace-nowrap hover:bg-darkslateblue"
          >
            <a
                href="#contact-us"
                class="relative text-base leading-[160%] font-poppins text-world-peas-cremini-base text-center"
            >
              Get a Quote
            </a>
            <img
              class="h-6 w-6 relative"
              alt=""
              src="/images/arrows-diagramsarrow.svg"
            />
          </button>
          <div
            class="rounded-12xl flex flex-row items-center justify-center gap-[4px]"
          >
            <a href="#services" class="relative leading-[160%]">View Services</a>
            <img
              class="h-6 w-6 relative"
              alt=""
              src="/images/arrows-diagramsarrow-1.svg"
            />
          </div>
        </div>
      </div>
      <div
        class="self-stretch flex flex-row flex-wrap items-center justify-center gap-[56px_12px] min-h-[452px] max-w-full text-5xl"
      >
        <ServiceFrame frame17="/images/frame-17.svg" prenatalCare="Prenatal care" /><ServiceFrame
          frame17="/images/frame-17-1.svg"
          prenatalCare="Childbirth education"
        /><ServiceFrame
          frame17="/images/frame-17-2.svg"
          prenatalCare="Labor support"
        /><ServiceFrame
          frame17="/images/frame-17-3.svg"
          prenatalCare="Postpartum care"
        /><ServiceFrame
          frame17="/images/frame-17-4.svg"
          prenatalCare="Breastfeeding support"
        /><ServiceFrame frame17="/images/frame-17-5.svg" prenatalCare="Newborn care" />
      </div>
    </div>
  </section>
</template>
<script setup>
  import ServiceFrame from "./ServiceFrame.vue";


</script>
