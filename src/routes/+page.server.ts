import type {PageServerLoad} from './$types';
import {loadPresentInfo} from '$lib/server/cms';

export const prerender = true;

export const load: PageServerLoad = async ({params}) => {
    return {
        present: await loadPresentInfo()
    };
}