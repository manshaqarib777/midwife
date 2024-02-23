<script setup>
    import HeaderFrame from "./Components/HeaderFrame.vue";
    import ServicesFrameTop from "./Components/ServicesFrameTop.vue";
    import AboutMeFrame from "./Components/AboutMeFrame.vue";
    import FaqsFrame from "./Components/FaqsFrame.vue";
    import SliderFrame from "./Components/SliderFrame.vue";
    import MessageBox from "./Components/MessageBox.vue";
    import FooterFrame from "./Components/FooterFrame.vue";
    import ServicesFrameBottom from "./Components/ServicesFrameBottom.vue";
    defineProps({
        RECAPTCHAV3_SITEKEY: String,
    });
</script>

<template>
    <div
      class="w-full relative bg-world-peas-cremini-base overflow-hidden flex flex-col items-center justify-start pt-4 px-0 pb-0 box-border gap-[111px] tracking-[normal] mq725:gap-[111px] mq450:gap-[111px]"
    >
        <HeaderFrame />
        <AboutMeFrame />
        <section
            class="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[7px] box-border gap-[16px] max-w-full text-center text-37xl text-midnightblue-100 font-poppins"
        >
        <div
            class="self-stretch h-[844px] bg-snow overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[61px] pb-0 pr-[21px] pl-5 box-border gap-[50px] max-w-full mq725:gap-[50px] mq725:pt-[26px] mq725:box-border mq450:h-auto mq1000:pt-10 mq1000:box-border"
            >
            <div class="w-[1440px] h-[844px] relative bg-snow hidden max-w-full" />
            <div
                class="w-[1009px] flex flex-col items-center justify-start gap-[31px] max-w-full shrink-0 z-[1] mq725:gap-[31px]"
            >
                <h1
                class="m-0 self-stretch h-[156px] relative text-inherit leading-[140%] inline-block font-inherit mq450:text-15xl mq450:leading-[47px] mq1000:text-26xl mq1000:leading-[63px]"
                >
                <span class="font-medium">Empowering Birth Experiences with </span>
                <span class="font-semibold text-palevioletred"
                    >Compassionate Midwifery Care</span
                >
                </h1>
            </div>
            <div
                class="w-[989.6px] h-[591.7px] relative z-[1] flex items-center justify-center"
            >
                <img
                class="w-full h-full max-w-full z-[1] object-contain absolute left-[0px] top-[-7px] [transform:scale(1.022)]"
                loading="eager"
                alt=""
                src="/images/group-52509@2x.png"
                />
            </div>
            </div>
        </section>
        <ServicesFrameTop />
        <SliderFrame />

      <!-- <ServicesFrameBottom /> -->
      <!-- <section
        class="self-stretch flex flex-col items-center justify-start gap-[82px] max-w-full mq725:gap-[82px] mq450:gap-[82px]"
      >
        <section
      class="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[3.81rem] box-border max-w-full text-center text-[2.63rem] text-midnightblue-100 font-poppins mq725:pb-[2.5rem] mq725:box-border"
    >
      <div
        class="flex-1 bg-snow flex flex-row items-center justify-center max-w-full"
      >
        <div class="self-stretch w-[90rem] relative bg-snow hidden max-w-full" />
        <div
          class="w-[64.88rem] flex flex-col items-start justify-start pt-[0rem] px-[1.25rem] pb-[0rem] box-border max-w-full"
        >
          <div
            class="self-stretch flex flex-col items-center justify-start pt-[7.63rem] pb-[7.88rem] pr-[1.25rem] pl-[1.31rem] box-border relative gap-[2.25rem] max-w-full shrink-0 mq725:gap-[2.25rem] mq725:pt-[4.94rem] mq725:pb-[5.13rem] mq725:box-border"
          >
            <img
              class="w-full h-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[-0.01rem] left-[0rem] max-w-full overflow-hidden max-h-full z-[1]"
              alt=""
              src="/images/group.svg"
            />
            <div
              class="w-[40.94rem] flex flex-col items-center justify-start gap-[1.38rem] max-w-full"
            >
              <h1
                class="m-0 relative text-inherit leading-[140%] font-semibold font-inherit z-[2] mq450:text-[1.56rem] mq450:leading-[2.19rem] mq1000:text-[2.13rem] mq1000:leading-[2.94rem]"
              >
                Any Question?
              </h1>
              <h3
                class="m-0 self-stretch h-[4.75rem] relative text-[1.5rem] leading-[160%] font-normal font-inherit text-slategray-200 inline-block z-[2] mq450:text-[1.19rem] mq450:leading-[1.94rem]"
              >
                I would be happy to call you back and take the time to answer your
                questions in a personal conversation!
              </h3>
            </div>
            <img
              class="w-[7.25rem] h-[7.25rem] relative z-[2]"
              loading="eager"
              alt=""
              src="/images/frame-427318584.svg"
            />
          </div>
        </div>
      </div>
    </section>
      </section>-->
      <MessageBox :RECAPTCHAV3_SITEKEY="RECAPTCHAV3_SITEKEY" />

      <FooterFrame />
    </div>
  </template>
