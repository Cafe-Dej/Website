import {createClient} from "@sanity/client";

const client = createClient({
    projectId: '5dg8ejoz',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2023-07-22',
})

export async function loadPresentInfo() {
    const presence = await client.fetch('*[_type == "locations"]');
    return presence.map((location: any) => ({
        location: location?.location,
        start: location?.start ? new Date(location.start) : null,
        end: location?.end ? new Date(location.end) : null
    }))
}