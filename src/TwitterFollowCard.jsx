import { useState } from "react";

export function TwitterCard ({formatUserName,userName,name}) {

    const [isFollowing,setIsFollowing] = useState(false);

    const imageSrc = `https://unavatar.io/${userName}`;

    //conditional text
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'gt-twitter-button-following  is-following' : 'gt-twitter-button-follow';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
        
    }

    return (
    <article className='gt-twitter-card'>
        <header className='gt-follow-card'>
            <img className='gt-img-card' src={imageSrc} alt="El avatar de github" />
            <div className='gt-twitter-info'>
                <h1>{name}</h1>
                <span className='gt-twitter-labbel'>{formatUserName(userName)}</span>
            </div>
        </header>
        
        <aside className='gt-twitter-aside' onClick={handleClick}>
            <button className={buttonClassName}>
                {text}
            </button>
        </aside>
    </article>

    )
}