<script lang="ts">
    import type {PageData} from './$types';
    import type {TableSource} from "@skeletonlabs/skeleton";
    import {AppBar, AppShell, Table, tableMapperValues} from "@skeletonlabs/skeleton";

    export let data: PageData;
    let tableSimple: TableSource = {
        // A list of heading labels.
        head: ['Ort', 'Datum'],
        // The data visibly shown in your table body UI.
        body: data?.present?.map((present) => [
            present.location,
            present.date?.toLocaleDateString('de', {
                weekday: 'short',
                day: 'numeric',
                month: 'long'
            })
        ])
    };
</script>

<AppShell>
    <svelte:fragment slot="pageHeader">
        <AppBar slotTrail="place-content-end">
            Cafe Dej
            <svelte:fragment slot="trail">social icons</svelte:fragment>
        </AppBar>
    </svelte:fragment>
    <Table source={tableSimple}/>
    <svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>

