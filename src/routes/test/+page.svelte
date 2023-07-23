<script>
    import {AppBar} from "@skeletonlabs/skeleton";
    import Mail from "$lib/icons/Mail.svelte";
    import Whatsapp from "$lib/icons/Whatsapp.svelte";
</script>

<div class="md:h-[100vh] bg-surface-700 p-2 space-y-2 flex flex-col items-stretch">
    <AppBar slotDefault="text-2xl" slotTrail="place-content-end">
        Cafe Dej
        <svelte:fragment slot="trail">
            <Mail/>
            <Whatsapp/>
        </svelte:fragment>
    </AppBar>
    <div class="grow w-full flex flex-row flex-wrap">
        <div class="h-[70vh] md:h-auto w-full md:w-[45%] gap-2 pb-2 md:pb-0 md:pr-2 grid grid-cols-[2fr_3fr] grid-rows-[3fr_7fr]">
            <div class="bg-surface-200">
                split
            </div>
            <div class="bg-surface-200">
                split
            </div>
            <div class="col-span-2 bg-surface-200">
                whole
            </div>
        </div>
        <div class="h-[70vh] md:h-auto w-full md:w-[55%] gap-2 grid grid-cols-[1fr_1fr] grid-rows-[2fr_1fr_1fr]">
            <div class="col-span-2 bg-surface-200">
                whole
            </div>
            <div class="row-span-2 bg-surface-200">
                split
            </div>
            <div class="bg-surface-200">
                dual-split
            </div>
            <div class="bg-surface-200">
                dual-split
            </div>
        </div>
    </div>
    <footer class="card-footer max-h-8">(footer)</footer>
</div>
