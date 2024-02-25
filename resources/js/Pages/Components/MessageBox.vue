<template>
  <div
    class="w-[1320px] flex flex-row items-start justify-center py-0 px-5 box-border gap-[81px] max-w-full text-center text-23xl text-midnightblue-100 font-poppins mq725:gap-[81px] mq450:gap-[81px] mq1050:flex-wrap"
    id="contact-us"
  >
    <div
      class="w-[459px] flex flex-col items-start justify-start gap-[40px] min-w-[459px] max-w-full mq725:min-w-full mq450:gap-[40px] mq1050:flex-1"
    >
      <div
        class="self-stretch flex flex-col items-start justify-start gap-[24px]"
      >
        <h1
          class="m-0 relative text-inherit leading-[140%] font-semibold font-inherit mq450:text-6xl mq450:leading-[35px] mq1000:text-15xl mq1000:leading-[47px]"
        >
          Contact Me
        </h1>
        <div
          class="self-stretch relative text-base leading-[160%] text-slategray-200 text-left"
        >
          Ready to begin your journey with personalized midwifery care? Feel
          free to reach out to me via phone, email, or by filling out the
          contact form below.
        </div>
      </div>
      <div
        class="self-stretch flex flex-col items-start justify-start gap-[18px] text-lg"
      >
        <div
          class="self-stretch flex flex-col items-start justify-start gap-[8px]"
        >
          <div
            class="self-stretch rounded-4xs flex flex-row items-center justify-start p-4 border-[1px] border-solid border-whitesmoke"
          >
            <div class="flex flex-row items-center justify-start gap-[8px]">
              <img
                class="h-8 w-8 relative"
                loading="eager"
                alt=""
                src="/images/emailsemailmailletter.svg"
              />
              <div class="relative leading-[140%] whitespace-nowrap">
                email@address.com
              </div>
            </div>
          </div>
          <div
            class="self-stretch rounded-4xs flex flex-row items-center justify-start p-4 border-[1px] border-solid border-whitesmoke"
          >
            <div
              class="w-[157px] flex flex-row items-center justify-start gap-[8px]"
            >
              <img
                class="h-8 w-8 relative"
                alt=""
                src="/images/phonesphone-call.svg"
              />
              <input
                class="w-[calc(100%_-_32px)] [border:none] [outline:none] font-poppins text-lg bg-[transparent] h-[25px] flex-1 relative leading-[140%] text-midnightblue-100 text-center inline-block min-w-[74px] whitespace-nowrap"
                placeholder="+1 123456789"
                type="text"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-row items-start justify-start gap-[8px]">
          <div
            class="rounded-4xs flex flex-row items-center justify-start py-4 pr-[17px] pl-[15px] border-[1px] border-solid border-whitesmoke"
          >
            <img class="h-6 w-6 relative" alt="" src="/images/social.svg" />
          </div>
          <div
            class="rounded-4xs flex flex-row items-center justify-start py-4 pr-[17px] pl-[15px] border-[1px] border-solid border-whitesmoke"
          >
            <img
              class="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/images/social-1.svg"
            />
          </div>
          <div
            class="rounded-4xs flex flex-row items-center justify-start py-4 pr-[17px] pl-[15px] border-[1px] border-solid border-whitesmoke"
          >
            <img class="h-6 w-6 relative" alt="" src="/images/social-2.svg" />
          </div>
          <div
            class="rounded-4xs flex flex-row items-center justify-start py-4 pr-[17px] pl-[15px] border-[1px] border-solid border-whitesmoke"
          >
            <img class="h-6 w-6 relative" alt="" src="/images/social-3.svg" />
          </div>
          <div
            class="rounded-4xs flex flex-row items-center justify-start py-4 pr-[17px] pl-[15px] border-[1px] border-solid border-whitesmoke"
          >
            <img class="h-6 w-6 relative" alt="" src="/images/social-4.svg" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex-1 flex flex-col items-start justify-start gap-[28px] min-w-[481px] max-w-full text-13xl mq725:min-w-full"
    >
      <h1
        class="m-0 relative text-inherit leading-[140%] font-medium font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[27px] mq1000:text-7xl mq1000:leading-[36px]"
      >
        Send Me a Message
      </h1>
      <div
        class="self-stretch flex flex-col items-start justify-start mq1000:gap-[48px]"
      >
        <div
          class="self-stretch flex flex-col items-start justify-start gap-[22px]"
        >
        <form @submit.prevent="submitForm">
          <div
            class="self-stretch flex flex-col items-start justify-start gap-[15px]"
          >
            <input
                v-model="form.name"
                class="w-full [border:none] [outline:none] bg-gray self-stretch h-[73px] rounded-2xl flex flex-col items-start justify-start py-6 px-4 box-border font-poppins text-lg text-world-peas-compost-base min-w-[250px]"
                placeholder="Name"
                type="text"
            />
            <input
                v-model="form.email"
                class="w-full [border:none] [outline:none] bg-gray self-stretch h-[73px] rounded-2xl flex flex-col items-start justify-start py-6 px-4 box-border font-poppins text-lg text-world-peas-compost-base min-w-[250px]"
                placeholder="Email"
                type="text"
            />
            <input
                v-model="form.date"
                class="w-full [border:none] [outline:none] bg-gray self-stretch h-[73px] rounded-2xl items-start justify-start py-6 px-4 box-border font-poppins text-lg text-world-peas-compost-base min-w-[250px]"
                placeholder="Date"
                type="date"
            />
            <input
                v-model="form.address"
                class="w-full [border:none] [outline:none] bg-gray self-stretch h-[73px] rounded-2xl flex flex-col items-start justify-start py-6 px-4 box-border font-poppins text-lg text-world-peas-compost-base min-w-[250px]"
                placeholder="Address"
                type="text"
            />
            <textarea
                v-model="form.message"
                class="[border:none] bg-gray h-[183px] w-auto [outline:none] self-stretch rounded-2xl flex flex-col items-start justify-start py-6 px-4 box-border font-poppins text-lg text-world-peas-compost-base"
                placeholder="Message"
                rows="9"
                cols="37"
            />
          </div>
          <button
            type="submit"
            class="cursor-pointer [border:none] mt-2 py-2 px-6 bg-plum h-12 rounded-6xs flex flex-row items-center justify-center box-border gap-[4px] hover:bg-darkslateblue"
          >
            <div
              class="relative text-base leading-[160%] font-poppins text-world-peas-cremini-base text-center"
            >
              Submit
            </div>
            <img
              class="h-6 w-6 relative"
              alt=""
              src="/images/arrows-diagramsarrow.svg"
            />
          </button>
        </form>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const props = defineProps({
    RECAPTCHAV3_SITEKEY: String,
});
// Import your reCAPTCHA component compatible with Vue 3, adjust import based on actual usage
// This example does not directly import a reCAPTCHA component due to the generic nature of the approach

// Reactive form state
const form = ref({
  name: '',
  email: '',
  date: '',
  address: '',
  message: '',
  'g-recaptcha-response': ''
});

const showToast = ref(false);
const toastMessage = ref('');


const submitForm = () => {
    grecaptcha.ready(() => {
        grecaptcha.execute(props.RECAPTCHAV3_SITEKEY, { action: 'submit' }).then(async (token) => {
            form.value['g-recaptcha-response'] = token;

            try {
                // Simulate form submission
                const response = await axios.put('/contact', form.value);
                toast("Your message has been sent successfully!", {
                    autoClose: 1000,
                }); // ToastOptions

                // Reset form
                form.value = { name: '', email: '', date: '',address: '', message: '' };
            } catch (error) {
                toast("Failed to send your message. Please try again.", {
                    autoClose: 5000,
                }); // ToastOptions
            }
        });
    });
};



</script>
