import type {PageServerLoad} from './$types';
import {loadPresentInfo, loadPrices, loadSpecialOffer} from '$lib/server/cms';

export const prerender = true;

export const load: PageServerLoad = async (): Promise<{
    present: [{ location: string, date: Date }],
    prices: [{ name: string, price: number }],
    specialOffer: [{ name: string, image: string, description: string, available: boolean }]
}> => {
    const presentInfo = await loadPresentInfo();
    const prices = await loadPrices();
    const specialOffer = await loadSpecialOffer();
    console.log("Loaded present info:", presentInfo);
    console.log("Loaded prices:", prices);
    console.log("Loaded special offer:", specialOffer);
    return {
        present: presentInfo,
        prices: prices,
        specialOffer: specialOffer
    };
}