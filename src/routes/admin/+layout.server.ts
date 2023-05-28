import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ locals }) => {
    const session = await locals.getSession();
    if (!session) {
        throw redirect(303, '/login');
    }


}) satisfies LayoutServerLoad;