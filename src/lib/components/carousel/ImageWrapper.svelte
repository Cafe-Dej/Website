<script lang="ts">
    export let src: string;
    export let alt: string;
</script>
<div class="h-full w-full  overflow-hidden">
    <img {src} {alt} class="object-cover "/>
</div>
