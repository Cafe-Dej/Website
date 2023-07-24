<script lang="ts">
    import type {PageData} from "./$types";
    import ImageWrapper from "$lib/components/carousel/ImageWrapper.svelte";
    import Carousel from "$lib/components/carousel/Carousel.svelte";

    let specialOfferIndex = 0;
    export let data: PageData;
</script>

<div class="h-screen min-h-[70rem] md:min-h-[600px] lg:min-h-[600px]  bg-cafe-surface-900 p-3 space-y-3 flex flex-col justify-stretch">
    <header class="w-full p-4 bg-white flex flex-row  justify-between items-center">
        <h1 class="text-2xl font-extrabold">
            Cafe Dej
        </h1>
        <div id="socials" class="w-16 lg:w-20 inline-flex justify-between h-5 lg:h-6">
            <svg id="mail" class="w-max stroke-black stroke-[1.5]" fill="none"
                 viewBox="0 0 22 16" xmlns="http://www.w3.org/2000/svg">
                <path style="stroke-linecap:round; stroke-linejoin: round;" d="m6 5 5 3.5 5-3.5"/>
                <path d="m1 13v-10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2z"/>
            </svg>
            <svg id="whatsapp" class="h-full w-max stroke-black stroke-[2]" fill="none"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path style="stroke-linecap:round; stroke-linejoin: round;"
                      d="m12 1.0002c-6.0692 0-11 4.9306-11 11 0 1.9508 0.53501 3.7714 1.4273 5.3607l-1.4095 5.0319c-0.098674 0.35283 0.21973 0.68106 0.5754 0.59314l5.2468-1.3002c1.5417 0.82306 3.2912 1.3143 5.1599 1.3143 6.0692 0 11-4.9306 11-11 0-6.0692-4.9306-11-11-11zm-3.997 5.2608c-0.30658 0-0.74441 0.11406-1.1041 0.5016-0.21603 0.23278-1.1162 1.1099-1.1162 2.6519 0 1.6077 1.115 2.9949 1.2498 3.1731h9.293e-4v9.15e-4c-0.012792-0.0168 0.17112 0.24952 0.4166 0.56886 0.24549 0.31934 0.58877 0.73876 1.02 1.1928 0.86251 0.90813 2.0752 1.9577 3.5804 2.5996 0.69314 0.29516 1.24 0.47338 1.6543 0.60342 0.76778 0.24109 1.4671 0.20444 1.9924 0.12704 0.3932-0.0579 0.82566-0.2467 1.2535-0.51748 0.42788-0.27078 0.84724-0.60748 1.0322-1.119 0.13248-0.36674 0.19983-0.70565 0.22418-0.98453 0.01218-0.13944 0.01372-0.2625 0.0046-0.37644-0.0091-0.11393 6.2e-4 -0.20121-0.10555-0.3755-0.22266-0.36558-0.47482-0.37512-0.73793-0.50534-0.14619-0.07235-0.5624-0.27559-0.97986-0.47451-0.41699-0.1987-0.77805-0.37468-1.0004-0.45397-0.14048-0.05054-0.31202-0.1233-0.55952-0.09528-0.24749 0.02803-0.49193 0.2066-0.63424 0.41754-0.13489 0.19994-0.67792 0.84093-0.84348 1.0294-0.0023-0.0013 0.01217 0.0053-0.05324-0.0271-0.20476-0.10134-0.45518-0.1875-0.82574-0.38297-0.37056-0.19548-0.8341-0.48413-1.3413-0.93128v-9.13e-4c-0.75493-0.66466-1.2838-1.4991-1.4506-1.7794 0.011239-0.01337-0.00133 0.0028 0.022413-0.02055l9.293e-4 -9.15e-4c0.1705-0.16794 0.32161-0.36852 0.4493-0.51562 0.18104-0.20856 0.26093-0.39241 0.34748-0.56419 0.17249-0.34234 0.07644-0.71906-0.02334-0.91727v-9.101e-4c0.0069 0.01371-0.05398-0.12061-0.11957-0.27556-0.06576-0.15538-0.14959-0.35683-0.23913-0.57166-0.17907-0.42967-0.37898-0.91155-0.49787-1.1938v-9.15e-4c-0.14006-0.3325-0.32954-0.572-0.57727-0.68754-0.24773-0.11554-0.4666-0.082694-0.47545-0.083133h-9.293e-4c-0.17678-0.0081533-0.37078-0.010284-0.56325-0.010284z"/>
            </svg>
        </div>
    </header>
    <div class="grow">
        <div class="h-full gap-3 grid grid-cols-1 grid-rows-[1fr_1fr] md:grid-cols-[45fr_55fr] md:grid-rows-1">
            <div class=" h-full w-full gap-3 grid grid-cols-[2fr_3fr] grid-rows-[3fr_7fr]">
                <div class="bg-white">
                    image
                </div>
                <div class="relative bg-[url(/images/chalkboard.webp)] font-[ChalkFace] text-white overflow-y-auto overflow-x-hidden">
                    <ul class="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center p-3 w-full h-full">
                        {#each data.prices as price}
                            <li class="w-full max-w-[15rem] md:max-w-[20rem] h-min flex justify-between items-end pb-1 last:pb-0">
                                <span class="text-xs sm:text-sm lg:text-xl">{price.name}</span>
                                <span class="text-sm sm:text-base lg:text-2xl pl-3">{price.price}&nbsp;€</span>
                            </li>
                        {/each}
                    </ul>
                </div>
                <div class="col-span-2 bg-white">
                    image scroller
                </div>
            </div>
            <div class="h-full w-full gap-3 grid grid-cols-[1fr_1fr] grid-rows-[2fr_1fr_1fr]">
                <div class="col-span-2 h-full bg-cafe-primary-50">
                    Presence Dates
                </div>
                {#if data?.specialOffer.length > 0}
                    <div class="row-span-2 h-full bg-white">
                        <Carousel
                                items="{data?.specialOffer?.map((item) => ( {
                                component: ImageWrapper,
                                props:{
                                    src: item.image,
                                    alt: item.name
                                }
                        }))}"
                                bind:currentIndex={specialOfferIndex}
                        >
                            <svelte:fragment slot="navigation" let:scrollToIndex let:currentIndex let:itemCount>
                                <div class="hidden sm:grid md:hidden lg:grid w-max absolute top-0 right-0 grid-cols-2 grid-rows-1 bg-cafe-surface-900 space-x-1.5 pb-3 pl-3">
                                    <button on:click="{() => scrollToIndex(currentIndex - 1)}"
                                            class="group w-12 bg-white hover:bg-cafe-surface-900 px-3 py-2">
                                        <svg class="h-full w-full" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path class="stroke-cafe-surface-900 group-hover:stroke-white stroke-[4]"
                                                  d="m12.814 23.318-11.448-11.33 11.459-11.305"/>
                                            <path class="stroke-cafe-surface-900 group-hover:stroke-white stroke-[4]"
                                                  d="m2.0021 12.024 21.996-0.047353"/>
                                        </svg>
                                    </button>
                                    <button on:click="{() => scrollToIndex(currentIndex + 1)}"
                                            class="group w-12 bg-white hover:bg-cafe-surface-900 px-3 py-2">
                                        <svg class="h-full w-full rotate-180" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path class="stroke-cafe-surface-900 group-hover:stroke-white stroke-[4]"
                                                  d="m12.814 23.318-11.448-11.33 11.459-11.305"/>
                                            <path class="stroke-cafe-surface-900 group-hover:stroke-white stroke-[4]"
                                                  d="m2.0021 12.024 21.996-0.047353"/>
                                        </svg>
                                    </button>
                                </div>
                                <div class="block sm:hidden md:block lg:hidden absolute bottom-0 w-full">
                                    {#each [...Array(itemCount).keys()] as index}
                                        <button class="w-3 h-3 mx-1 rounded-full hover:bg-cafe-surface-900 "
                                                class:bg-cafe-surface-900="{index === currentIndex}"
                                                class:bg-white="{index !== currentIndex}"
                                                on:click="{() => scrollToIndex(index)}">
                                        </button>
                                    {/each}
                                </div>
                            </svelte:fragment>
                        </Carousel>
                    </div>
                    <div class="relative bg-cafe-primary-50 overflow-y-auto overflow-x-clip">
                        <div class="absolute top-0 bottom-0 right-0 left-0 prose prose-sm sm:prose-base lg:prose-lg prose-stone p-2">
                            {@html data?.specialOffer[specialOfferIndex]?.description}
                        </div>
                    </div>
                {:else}
                    <div class="relative bg-white">
                        image
                    </div>
                    <div class="relative bg-white">
                        image
                    </div>
                {/if}
                <div class="relative bg-white">
                    image
                </div>
            </div>
        </div>
    </div>
    <footer class="p-1 pt-0 max-h-8 text-cafe-primary-400">(footer)</footer>
</div>