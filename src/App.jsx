import './App.css'

export function App () {
    return (
    <article className='gt-twitter-card'>
        <header className='gt-follow-card'>
            <img className='gt-img-card' src="https://unavatar.io/microlink/microlink.io" alt="El avatar de github" />
            <div className='gt-twitter-info'>
                <h1>Deren Valtorin</h1>
                <span className='gt-twitter-labbel'>@derenvalt</span>
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