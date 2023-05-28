
import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, locals }) => {
        const data = await request.formData();
        const value = Object.fromEntries(data);
        const jData = JSON.stringify(value);
        console.log(jData)
        const { error: err } = await locals.supabase.from('reponse_paques').insert([{ reps: jData }]);
        if (err) {
            console.error(err);
            return fail(500, { message: ' Server error. Revenez plus tard.' });
        }
        throw redirect(303, '/bilan-paques-2023/merci');
    }

} satisfies Actions;