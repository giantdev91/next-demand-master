import Image from 'next/image'

export default function Header() {
    return (
        <header className="header">
            {/* <a className="header__notification" href="https://basecamp.com/old-vs-new">
                <p>Small runs circles around big. Watch our latest video <strong>Old vs. New</strong> championing the underdogs, like you!</p>
            </a> */}
            <div className="header__container">
                <a className="header__logo" href="https://basecamp.com/">
                    <figure>
                        <Image src="/assets/images/logo.svg" alt="logo" width="38" height="38" />
                    </figure>
                    <strong>demand</strong>
                    <div className="header__tagline header__tagline--js header__tagline--stars"><span>“AI IS A GAME CHANGER”</span></div>
                </a>
                <ul className="header__options">
                    <li><a className="button button--small button--text" href="https://basecamp.com/new">PLATFORM</a></li>
                    <li><a className="button button--small button--text" href="https://basecamp.com/features">TEMPLATES</a></li>
                    <li><a className="button button--small button--text" href="https://basecamp.com/features">PRICING</a></li>
                    <li><a className="button button--small button--text" href="https://basecamp.com/features">INTEGRATIONS</a></li>
                    <li><a className="button button--small button--text" href="https://basecamp.com/features">CUSTOMERS</a></li>
                    <li><a className="button button--small button--text" href="https://basecamp.com/features">RESOURCES</a></li>
                    <li><a className="button button--small button--text" href="https://basecamp.com/features">LOGIN</a></li>
                    <li><a className="button button--glow button--small" href="https://basecamp.com/pricing" >Pricing + Sign up</a></li>
                </ul>
            </div>
        </header>
    )
}