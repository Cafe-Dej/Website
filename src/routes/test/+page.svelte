<script>
    import {AppBar} from "@skeletonlabs/skeleton";
    import Mail from "$lib/icons/Mail.svelte";
    import Whatsapp from "$lib/icons/Whatsapp.svelte";
    import StyleGrid from "$lib/components/StyleGrid.svelte";
    import Carousel from "$lib/components/carousel/Carousel.svelte";
    import ImageWrapper from "$lib/components/carousel/ImageWrapper.svelte";
</script>

<div class="md:h-[100vh] bg-surface-700 p-2 space-y-2 flex flex-col items-stretch">
    <AppBar slotDefault="text-2xl" slotTrail="place-content-end">
        Cafe Dej
        <svelte:fragment slot="trail">
            <Mail/>
            <Whatsapp/>
        </svelte:fragment>
    </AppBar>
    <StyleGrid>
        <div slot="left-split-left" class="h-full bg-surface-200">
            split
        </div>
        <div slot="left-split-right" class="h-full bg-surface-200">
            split
        </div>
        <div slot="left-whole" class="h-full bg-surface-200">
            whole
        </div>
        <div slot="right-whole" class="h-full bg-surface-200">
            whole
        </div>
        <div slot="right-split" class="h-full bg-surface-200">
            split
        </div>
        <div slot=right-split-upper class="h-full  bg-surface-200">
            dual-upper
        </div>
        <div slot=right-split-lower class="h-full  bg-surface-200">
            dual-lower
        </div>
    </StyleGrid>
    <footer class="card-footer max-h-8">(footer)</footer>
</div>

<div class="w-96 m-8 bg-surface-200">
    <Carousel items="{[
        {
            component: ImageWrapper,
            props:{
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hauskatze_langhaar.jpg/1200px-Hauskatze_langhaar.jpg',
                alt: 'cat'
            }
        },
         {
            component: ImageWrapper,
            props:{
                src: 'https://api.ardmediathek.de/image-service/images/urn:ard:image:3dab66faa8140d8b?w=448&ch=9e935de585dfb889',
                alt: 'cat2'
            }
        },
        {
            component: ImageWrapper,
            props:{
                src: 'https://api.ardmediathek.de/image-service/images/urn:ard:image:3dab66faa8140d8b?w=448&ch=9e935de585dfb889',
                alt: 'cat3'
            }
        }
    ]}"/>
</div>