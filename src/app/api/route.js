import { translate } from '@vitalets/google-translate-api';
import { data } from "@/language";

export async function POST(req) {
	const {inputValue, ISOCode } = await req.json();
	const { text } = await translate(inputValue, { to: ISOCode });


	return new Response(JSON.stringify({text}))
}