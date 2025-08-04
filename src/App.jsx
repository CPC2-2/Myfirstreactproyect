import './App.css'
import { TwitterCard } from './TwitterFollowCard'

export function App () {

    const formatUserName = (userName) => `@${userName}`;

    return (
        <>

            <TwitterCard formatUserName={formatUserName} userName="derenvalt" name="Deren Valtorin"/>
            <TwitterCard formatUserName={formatUserName} userName="elonmusk" name="Elon Musk"/>
            <TwitterCard formatUserName={formatUserName} userName="mouredev" name="Moure dev"/>

        </>
    )
}