<script lang="ts">
    import reducedMotion from '$lib/utils/reduced_motion';
    import type {SvelteComponent} from "svelte";

    type Item = {
        props: Record<string, any>
        component: typeof SvelteComponent
    }
    export let items: Item[] = []

    //Bound to the carousel list
    let carousel: HTMLElement
    //Bound to the carousel items ordered by their index
    let carouselElements: HTMLElement[] = []
    //Updated to the current scroll position of the carousel
    let carouselScroll: number

    //The amount of items in the carousel
    $: itemCount = items?.length ?? 0
    //The scrolled width divided by the width of a single image (maximum width/image count) is the index of the currently centered image
    $: currentIndex = !carousel || !carouselScroll ? 0 : Math.round(carouselScroll / (carousel?.scrollWidth / itemCount))

    //Scrolls the carousel to the image at the given index
    function scrollToIndex(index: number) {
        //Check if index is in bounds
        if (index < 0 || index >= itemCount) return
        //Determine the element to scroll to
        const scrollToElement = carouselElements[index]
        if (!scrollToElement) return
        //Scroll to the element, smooth if reduced motion is not enabled
        carousel.scroll(scrollToElement.offsetLeft, 0)
    }
</script>
<div class="card grid grid-cols-[1fr_auto_1fr] grid-rows-[auto_min]">
    <button title="navigate one left" class="w-min px-1" on:click={() => scrollToIndex(currentIndex - 1)}
            disabled="{currentIndex <= 0}">
        <!--{currentIndex > 0?'':'stroke-none'} -->
        <svg class="h-8 stroke-secondary-500 opacity-50 hover:opacity-100 "
             viewBox="3 1 10 15" xmlns="http://www.w3.org/2000/svg" fill-opacity="0">
            <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  stroke-linecap="round" stroke-miterlimit="10"
                  stroke-width="1"/>
        </svg>
    </button>
    <ul class="flex overflow-x-auto gap-6 snap-x snap-mandatory no-scrollbar {$reducedMotion ? '' : 'scroll-smooth'}"
        bind:this={carousel}
        on:scroll={() => carouselScroll = carousel.scrollLeft}>
        {#each items as {props, component}, index}
            <li bind:this="{carouselElements[index]}" class="w-full shrink-0 snap-center flex flex-col justify-center">
                <svelte:component this={component} {...props}/>
            </li>
        {/each}
    </ul>
    <button title="navigate one right" class="w-min px-1" on:click={() => scrollToIndex(currentIndex + 1)}
            disabled="{currentIndex >= itemCount - 1}">
        <svg class="h-8 stroke-secondary-500 opacity-50 hover:opacity-100"
             viewBox="3 1 10 15"
             xmlns="http://www.w3.org/2000/svg" fill-opacity="0">
            <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  stroke-linecap="round" stroke-miterlimit="10"
                  stroke-width="1"/>
        </svg>
    </button>
    <nav title="carousel nav" class="col-span-3 h-min p-2">
        <div class="flex gap-2 place-content-center">
            {#each items as _ , index}
                <button title="scroll image {index} into view"
                        class="w-[32px] h-[6px] rounded-md bg-secondary-500 {index === currentIndex ? 'bg-opacity-100' : 'bg-opacity-30  hover:bg-opacity-100'}"
                        on:click={() => scrollToIndex(index)}>
                </button>
            {/each}
        </div>
    </nav>
</div>