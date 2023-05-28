import { AuthApiError } from '@supabase/supabase-js';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';


export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

/*  action for login */
export const actions = {
    default: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData());

        const { error: err } = await locals.supabase.auth.signInWithPassword({
            email: body.email as string,
            password: body.password as string,
        });
        if (err) {
            if (err instanceof AuthApiError && err.status === 400) {
                return fail(400, { email: body.email, incorrect: true });
            }
            return fail(500, { message: ' Server error. Revenez plus tard.' });

        }
        throw redirect(303, '/dashboard');
    }

} satisfies Actions;