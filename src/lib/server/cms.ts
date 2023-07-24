import {createClient} from "@sanity/client";
import {toHTML} from "@portabletext/to-html";
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
    projectId: '5dg8ejoz',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2023-07-22',
})

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
    return builder.image(source)
}

export async function loadPresentInfo() {
    const presence = await client.fetch('*[_type == "locations"]');
    return presence.map((location: any) => ({
        location: location?.location,
        date: location?.date ? new Date(location.date) : null,
    }))
}

export async function loadPrices() {
    const prices = await client.fetch('*[_type == "coffes"]');
    return prices.map((price: any) => ({
        name: price?.name,
        price: price?.price,
    }))
}

export async function loadSpecialOffer() {
    const specialOffer = await client.fetch('*[_type == "special_offer"]');/*{' +
        'name,' +
        '"image": image.asset->url,' +
        'description,' +
        'available' +
        '}');*/
    console.log(specialOffer);
    return specialOffer.map((offer: any) => ({
        name: offer?.name,
        image: urlFor(offer?.image).width(500).height(500).url(),
        description: toHTML(offer?.description),
        available: offer?.available ?? false,
    }))
}