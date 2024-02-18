<script setup>
  import TextNode from "./Components/TextNode.vue";
  import TextList from "./Components/TextList.vue";
  import FrameComponent2 from "./Components/FrameComponent2.vue";
  import FrameComponent1 from "./Components/FrameComponent1.vue";
  import Frame1 from "./Components/Frame1.vue";
  import Frame from "./Components/Frame.vue";
  import FrameComponent from "./Components/FrameComponent.vue";
  import SecondaryFrame from "./Components/SecondaryFrame.vue";

</script>

<template>
    <div
      class="w-full relative bg-world-peas-cremini-base overflow-hidden flex flex-col items-center justify-start pt-4 px-0 pb-0 box-border gap-[111px] tracking-[normal] mq725:gap-[111px] mq450:gap-[111px]"
    >
      <TextNode /><TextList /><FrameComponent2 /><FrameComponent1 /><SecondaryFrame />
      <section
        class="self-stretch flex flex-col items-center justify-start gap-[82px] max-w-full mq725:gap-[82px] mq450:gap-[82px]"
      >
        <Frame1 />
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
        <frame />
      </section>
      <FrameComponent />
    </div>
  </template>
