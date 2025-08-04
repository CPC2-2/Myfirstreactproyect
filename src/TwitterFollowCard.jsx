export function TwitterCard ({userName,name, isFollowing}) {

    const imageSrc = `https://unavatar.io/${userName}`;

    return (
    <article className='gt-twitter-card'>
        <header className='gt-follow-card'>
            <img className='gt-img-card' src={imageSrc} alt="El avatar de github" />
            <div className='gt-twitter-info'>
                <h1>{name}</h1>
                <span className='gt-twitter-labbel'>@{userName}</span>
            </div>
        </header>
        
        <aside className='gt-twitter-aside'>
            <button className='gt-twitter-button'>
                Seguir
            </button>
        </aside>
    </article>

    )
}