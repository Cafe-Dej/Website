import type {PageServerLoad} from './$types';
import {loadPresentInfo} from '$lib/server/cms';

export const prerender = true;

export const load: PageServerLoad = async ({params}) => {
    const presentInfo = await loadPresentInfo();
    console.log("Loaded present info:", presentInfo);
    return {
        present: presentInfo
    };
}