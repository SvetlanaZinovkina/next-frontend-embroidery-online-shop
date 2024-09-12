import Rules from "../../../components/Rules";
import {getDictionary} from "../dictionaries";

export default async function PolicyPage({ params: { lang }}: { params: { lang: string } }) {

    const dict = await getDictionary(lang);

    return <Rules dict={dict}/>;
}
