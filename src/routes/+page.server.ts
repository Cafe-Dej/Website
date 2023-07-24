import type {PageServerLoad} from './$types';
import {loadPresentInfo, loadPrices, loadSpecialOffer} from '$lib/server/cms';

export const prerender = true;

export const load: PageServerLoad = async (): Promise<{
    present: { location: string, date: Date }[],
    prices: { name: string, price: number }[],
    specialOffer: { name: string, image: string, description: string, available: boolean }[]
}> => {
    const presentInfo = await loadPresentInfo();
    const prices = await loadPrices();
    const specialOffer = await loadSpecialOffer();
    console.log("Loaded present info:", presentInfo);
    console.log("Loaded prices:", prices);
    console.log("Loaded special offer:", specialOffer);
    return {
        present: presentInfo,
        prices: prices /*[
            {name: "Kaffee", price: 1.5},
            {name: "Cappuccino", price: 2.5},
            {name: "Latte Macchiato", price: 3.5},
            {name: "Espresso", price: 1.5},
            {name: "Espresso Macchiato", price: 2.5},
            {name: "Milchkaffee", price: 2.5},
            {name: "Kakao", price: 2.5},
            {name: "Tee", price: 1.5},
            {name: "Heiße Schokolade", price: 2.5},

        ]*/,
        specialOffer: specialOffer
    };
}