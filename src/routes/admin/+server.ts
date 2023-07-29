import type {RequestHandler} from "./$types";
import {redirect} from "@sveltejs/kit";

export const GET: RequestHandler = () => {
    throw redirect(301, "https://cafedej.sanity.studio/desk")
}
