<script lang="ts">
    export let dates: { date: Date, location: string }[] = [
        /*{
            date: new Date(Date.parse("2023-11-25")),
            location: 'Markt Brand'
        },
        {
            date: new Date(Date.parse("2023-12-30")),
            location: 'Markt Brand'
        },
        {
            date: new Date(Date.parse("2024-01-27")),
            location: 'Markt Brand'
        },
        {
            date: new Date(Date.parse("2023-04-29")),
            location: 'Markt Brand'
        },
        {
            date: new Date(Date.parse("2023-07-28")),
            location: 'Markt Burtscheid'
        },
        {
            date: new Date(Date.parse("2023-07-29")),
            location: 'Markt Brand'
        },
        {
            date: new Date(Date.parse("2023-08-26")),
            location: 'Markt Brand'
        },
        {
            date: new Date(Date.parse("2023-09-30")),
            location: 'Markt Brand'
        },
        {
            date: new Date(Date.parse("2023-10-28")),
            location: 'Markt Brand'
        },*/
    ]

    $: processedDates = dates
        .sort((a, b) => a.date - b.date)
        .map(date => ({
            date: date.date.toLocaleDateString('de', {
                day: "2-digit",
                month: "2-digit"
            }),
            location: date.location
        }))

    $: today = dates
        .find(date => isToday(date.date))
        ?.location

    function isToday(date) {
        const now = new Date()

        return date.getDate() === now.getDate() &&
            date.getMonth() === now.getMonth() &&
            date.getFullYear() === now.getFullYear()
    }
</script>
<div class="absolute top-0 bottom-0 left-0 right-0 h-full w-full flex flex-wrap items-center justify-evenly overflow-hidden sm:text-lg lg:text-2xl">
    {#if today}
        <div class="w-max p-4 break-words inline-block">
            <div class="w-full text-center">
                Heute hier:
            </div>
            <div class="w-max font-bold">
                {today}
            </div>
        </div>
    {:else}
        <div class="p-4 w-max bg-cafe-primary-100">
            Heute bin ich leider nicht da.
        </div>
    {/if}
    <div class="p-4 h-full ">
        <div class="h-full overflow-y-scroll flex justify-center items-center">
            <ol class="table">
                {#each processedDates as {date, location}, i}
                    <li class="table-row {i%2?'bg-cafe-primary-50':'bg-cafe-primary-100'}">
                        <span class="table-cell p-1">{date}</span>
                        <span class="table-cell p-1">{location}</span>
                    </li>
                {/each}
            </ol>
        </div>
    </div>
</div>
