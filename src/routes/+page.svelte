<script lang="ts">
    import type {PageData} from "./$types";
    import Mail from "$lib/icons/Mail.svelte";
    import Whatsapp from "$lib/icons/Whatsapp.svelte";
    import StyleGrid from "$lib/components/StyleGrid.svelte";
    import Carousel from "$lib/components/carousel/Carousel.svelte";
    import ImageWrapper from "$lib/components/carousel/ImageWrapper.svelte";

    export let data: PageData;

    let specialOfferIndex: number;
</script>

<div class="md:h-screen md:min-h-[450px] bg-cafe-surface-900 p-3 space-y-3 flex flex-col">
    <div class="bg-white flex flex-row w-full p-4 justify-between">
        <div class="text-2xl font-extrabold">
            Cafe Dej
        </div>
        <div class="flex items-center space-x-4 h-8">
            <Mail/>
            <Whatsapp/>
        </div>
    </div>
    <StyleGrid>
        <div slot="left-split-left" class="h-full bg-cafe-primary-50">
            split
        </div>
        <div slot="left-split-right" class="h-full bg-cafe-primary-50">
            split
        </div>
        <div slot="left-whole" class="h-full  bg-cafe-primary-50">
            whole
        </div>
        <div slot="right-whole" class="h-full  bg-cafe-primary-50">
            whole
        </div>
        <div slot="right-split" class="flex h-full  bg-cafe-primary-50 ">
            {#if data?.specialOffer.length > 0}
                <Carousel
                        items="{data.specialOffer.map((item) => ( {
                                component: ImageWrapper,
                                props:{
                                    src: item.image,
                                    alt: item.name
                                }
                        }))}"
                        bind:currentIndex={specialOfferIndex}
                >
                    <div slot="navigation" class="absolute top-0 right-0" let:scrollToIndex
                         let:currentIndex>
                        <div class="w-max grid grid-cols-2 grid-rows-1 bg-cafe-surface-900 space-x-1.5 pb-3 pl-3">
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
                    </div>
                </Carousel>
            {:else}
                split
            {/if}
        </div>
        <div slot="right-split-upper" class="h-full bg-white overflow-hidden">
            {#if data?.specialOffer.length > 0}
                <div class="prose prose-xl prose-stone p-2">
                    {@html data?.specialOffer[specialOfferIndex]?.description}
                </div>
            {:else}
                dual-upper
            {/if}
        </div>
        <div slot="right-split-lower" class="h-full bg-cafe-primary-50">
            dual-lower
        </div>
    </StyleGrid>
    <footer class="p-1 pt-0 max-h-8 text-cafe-primary-400">(footer)</footer>
</div>
