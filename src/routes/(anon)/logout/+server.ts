import type { RequestHandler } from "@sveltejs/kit";
import { redirect, error } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ locals }) => {


    const { error: err } = await locals.supabase.auth.signOut();

    if (err) {
        throw error(500, 'invalid logout')
    }

    throw redirect(303, '/')
}