<template>
    <div class="w-[60%] mq450:w-[100%]">

    <carousel :items-to-show="1">
        <slide v-for="slide in 10" :key="slide">
            <div class="w-[687px] flex flex-col items-center justify-center gap-[74px] max-w-full mq725:gap-[74px] mq450:gap-[74px]">
                <div class="self-stretch flex flex-col items-center justify-start gap-[32px] mq725:gap-[32px]">
                    <div
                        class=""
                    >
                        <div
                            class="flex flex-col items-center justify-start py-0 px-[7px] gap-[8px]"
                        >
                            <img
                                class="w-[124px] h-[124px] relative rounded-[50%] object-cover"
                                loading="eager"
                                alt=""
                                src="/images/ellipse-5@2x.png"
                            />
                            <div
                                class="h-8 relative font-medium inline-block mq450:text-mid"
                            >
                                Maren Saris
                            </div>
                        </div>
                        <div
                            class="flex flex-row items-start justify-start gap-[5px]"
                        >
                            <img
                                class="h-6 w-6 relative min-h-[24px]"
                                loading="eager"
                                alt=""
                                src="/images/interface-essentialstarfavorite.svg"
                            />
                            <img
                                class="h-6 w-6 relative min-h-[24px]"
                                alt=""
                                src="/images/interface-essentialstarfavorite.svg"
                            />
                            <img
                                class="h-6 w-6 relative min-h-[24px]"
                                alt=""
                                src="/images/interface-essentialstarfavorite.svg"
                            />
                            <img
                                class="h-6 w-6 relative min-h-[24px]"
                                alt=""
                                src="/images/interface-essentialstarfavorite.svg"
                            />
                            <img
                                class=" h-6 w-6 relative min-h-[24px]"
                                alt=""
                                src="/images/interface-essentialstarfavorite.svg"
                            />
                        </div>
                    </div>
                    <div
                        class="self-stretch h-[156px] relative text-base leading-[160%] text-slategray-200 inline-block"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </div>
                </div>
            </div>
        </slide>

        <template #addons>
        <navigation />
        <pagination />
        </template>
    </carousel>

    </div>

</template>
<script setup>
import { ref } from 'vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

</script>
<style>

.carousel__icon {
    border-radius: 3rem; /* Assuming a large value for `rounded-12xl` */
    background-color: #8e7ab5; /* Using the named color 'plum' */
    color: white;
}
.carousel__pagination-button::after {
    background-color: #e493b3;
    height: 7px;
    width: 7px;
    border-radius: 50%;
}
.carousel__pagination-button--active::after {
    background-color: #e493b3;
    width: 20px;
    border-radius: 0%;
}
</style>
