import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {

	let returnObj = {
		data: {},
		errors: []
	};

	/**
	 * Write stuff below this
	 */




	/**
	 * Write stuff above this
	 */
	return json(returnObj);
};
