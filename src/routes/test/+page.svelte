<script lang="ts">
    import Mail from "$lib/icons/Mail.svelte";
    import Whatsapp from "$lib/icons/Whatsapp.svelte";
    import StyleGrid from "$lib/components/StyleGrid.svelte";

    let scrollToIndex: (index: number) => void;
</script>

<div class="md:h-[100vh] bg-cafe-surface-900 p-2 space-y-2 flex flex-col items-stretch">
    <div class="bg-white flex flex-row w-full p-4 justify-between">
        <div class="text-2xl font-extrabold">
            Cafe Dej
        </div>
        <div class="flex items-center space-x-4">
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
        <div slot="left-whole" class="h-full bg-cafe-primary-50">
            whole
        </div>
        <div slot="right-whole" class="h-full bg-cafe-primary-50">
            whole
        </div>
        <div slot="right-split" class="h-full bg-cafe-primary-50">
            split
        </div>
        <div slot="right-split-upper" class="h-full bg-cafe-primary-50">
            dual-upper
        </div>
        <div slot="right-split-lower" class="h-full bg-cafe-primary-50">
            dual-lower
        </div>
    </StyleGrid>
    <footer class="p-1 pt-0 max-h-8">(footer)</footer>
</div>
