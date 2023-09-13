'use client';

export default function VideoModal() {
    return (
        <section>
            <div className="uo-modal">
                <div className="uo-modal__background"></div>
                <div className="uo-modal__container">

                    <div className="uo-modal__content uo-modal__content--a-quick-overview ">
                        <div className="video video--full">
                            <div className="video__embed video__embed--playing">
                                {/* <video
                                    id="a-quick-overview"
                                    data-event="A Quick Overview"
                                    preload="none"
                                    poster="/assets/home/a-quick-overview.webp"
                                    src="/assets/home/a-quick-overview-60-6c8d8f27bddf888b5660ba3f3388d16a0f22c6f82ce0762b981def7333919526.mp4"
                                    width="100%"
                                    playsInline={false}
                                    controls={true}>
                                </video> */}
                                <iframe
                                    id="a-quick-overview"
                                    width="100%"
                                    height="auto"
                                    data-event="A Quick Overview"
                                    src="https://www.youtube.com/embed/SePcsn4MuvU?autoplay=1"
                                    allowFullScreen={true}
                                    style={{
                                        width: '80vw',
                                        height: '85vh'
                                    }}
                                ></iframe>
                                <button>
                                    <span>Watch “A Quick Overview”</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="uo-modal__content uo-modal__content--made-in-basecamp">
                        <div className="video video--full">
                            <div className="video__embed">
                                <iframe
                                    id="made-in-basecamp"
                                    width="100%"
                                    height="auto"
                                    data-event="Made in Basecamp"
                                    src="https://www.youtube.com/embed/SePcsn4MuvU?autoplay=1"
                                    allowFullScreen={true}
                                    style={{
                                        width: '80vw',
                                        height: '85vh'
                                    }}
                                ></iframe>
                                <button>
                                    <span>Watch “Made in Basecamp”</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="uo-modal__content uo-modal__content--organizing-a-meet-up">
                        <div className="video video--full">
                            <div className="video__embed">
                                <iframe
                                    id="organizing-a-meet-up"
                                    data-event="Organizing a Meet-up"
                                    width="100%"
                                    height="auto"
                                    src="https://www.youtube.com/embed/SePcsn4MuvU?autoplay=1"
                                    allowFullScreen={true}
                                    style={{
                                        width: '80vw',
                                        height: '85vh'
                                    }}
                                ></iframe>
                                <button>
                                    <span>Watch “Organizing a Meet-up”</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="uo-modal__content uo-modal__content--hilary-fitzgerald-campbell">
                        <div className="video video--full">
                            <div className="video__embed">
                                <iframe
                                    id="hilary-fitzgerald-campbell"
                                    data-event="Hilary Fitzgerald Campbell"
                                    width="100%"
                                    height="auto"
                                    src="https://www.youtube.com/embed/SePcsn4MuvU?autoplay=1"
                                    allowFullScreen={true}
                                    style={{
                                        width: '80vw',
                                        height: '85vh'
                                    }}
                                ></iframe>
                                <button>
                                    <span>
                                        Watch “Hilary Fitzgerald Campbell”
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="uo-modal__content uo-modal__content--the-future-chief-meetings-officer ">
                        <div className="video video--full">
                            <div className="video__embed video__embed--playing">
                                {/* <video
                                    id="the-future-chief-meetings-officer"
                                    data-event="The Future: Chief Meetings Officer"
                                    preload="none"
                                    poster="/assets/jlmdmj/the-future-chief-meetings-officer-c5302e9d1e43f9b26469bd78237d63441e97b7f44e34be8e33fda39e335a095b.webp"
                                    src="/assets/jlmdmj/the-future-chief-meetings-officer-4fd0e5e00bb94d8afc097c0f8aa59c99c063d56fa280a3d8d5ab91ebb1ec837b.mp4"
                                    type="video/mp4"
                                    width="100%" playsinline=""
                                    controls="controls">
                                </video> */}
                                <iframe
                                    id="the-future-chief-meetings-officer"
                                    data-event="The Future: Chief Meetings Officer"
                                    width="100%"
                                    height="auto"
                                    src="https://www.youtube.com/embed/SePcsn4MuvU?autoplay=1"
                                    allowFullScreen={true}
                                    style={{
                                        width: '80vw',
                                        height: '85vh'
                                    }}
                                ></iframe>
                                <button>
                                    <span>Watch “Chief Meetings Officer”</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="uo-modal__content uo-modal__content--the-future-extended ">
                        <div className="video video--full">
                            <div className="video__embed video__embed--playing">
                                {/* <video
                                    id="the-future-extended"
                                    data-event="The Future: Extended"
                                    preload="none"
                                    poster="/assets/jlmdmj/the-future-extended-11e292855776783e06e382d081486a5d4d648c5c2fb2beb481bcd580f79ec086.webp"
                                    src="/assets/jlmdmj/the-future-extended-705dcd2af0db99a61c28b5f1d31f7900eb5e0af6cdc9daba79c2420827dbe2d7.mp4"
                                    type="video/mp4"
                                    width="100%"
                                    playsinline=""
                                    controls="controls">
                                </video> */}
                                <iframe
                                    id="the-future-extended"
                                    data-event="The Future: Extended"
                                    width="100%"
                                    height="auto"
                                    src="https://www.youtube.com/embed/SePcsn4MuvU?autoplay=1"
                                    allowFullScreen={true}
                                    style={{
                                        width: '80vw',
                                        height: '85vh'
                                    }}
                                ></iframe>
                                <button>
                                    <span>Watch “The Future”</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="uo-modal__content uo-modal__content--the-future-dance-party ">
                        <div className="video video--full">
                            <div className="video__embed video__embed--playing">
                                {/* <video
                                    id="the-future-dance-party"
                                    data-event="The Future: Dance Party"
                                    preload="none"
                                    poster="/assets/jlmdmj/the-future-dance-party-f36251ddc51f59df2ef19caa14b060f436188c79728daf23e46995200c8650ca.webp"
                                    src="/assets/jlmdmj/the-future-dance-party-31c4d3b5bd6e26a39beef8f92c52bca517102f284969ff8661e4401f6fa8430d.mp4"
                                    type="video/mp4"
                                    width="100%"
                                    playsinline=""
                                    controls="controls">
                                </video> */}
                                <iframe
                                    id="the-future-dance-party"
                                    data-event="The Future: Dance Party"
                                    width="100%"
                                    height="auto"
                                    src="https://www.youtube.com/embed/SePcsn4MuvU?autoplay=1"
                                    allowFullScreen={true}
                                    style={{
                                        width: '80vw',
                                        height: '85vh'
                                    }}
                                ></iframe>
                                <button>
                                    <span>Watch “Dance Party”</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="uo-modal__content uo-modal__content--the-future-mail ">
                        <div className="video video--full">
                            <div className="video__embed video__embed--playing">
                                {/* <video
                                    id="the-future-mail"
                                    data-event="The Future: Mail"
                                    preload="none"
                                    poster="/assets/jlmdmj/the-future-mail-87831ca947981b04e754b06eac339837491c27edc5ab78be0b829226f226605a.webp"
                                    src="/assets/jlmdmj/the-future-mail-524b67b55efcef77dd12b6295da6fe02e0a92d696c6a3b2d28e107dba2487695.mp4"
                                    type="video/mp4"
                                    width="100%"
                                    playsinline=""
                                    controls="controls">
                                </video> */}
                                <iframe
                                    id="the-future-mail"
                                    data-event="The Future: Mail"
                                    width="100%"
                                    height="auto"
                                    src="https://www.youtube.com/embed/SePcsn4MuvU?autoplay=1"
                                    allowFullScreen={true}
                                    style={{
                                        width: '80vw',
                                        height: '85vh'
                                    }}
                                ></iframe>
                                <button>
                                    <span>Watch “Mail”</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="uo-modal__content uo-modal__content--campfire">
                        <header>
                            <div className="uo-pill uo-pill--tool uo-pill--campfire">
                                Campfire
                            </div>
                            <p>
                                Basecamp has chat built in so you don’t need to
                                pay for a separate chat service like Slack.
                            </p>
                        </header>
                        <div className="screenshot">
                            <picture>
                                <source
                                    srcSet="/assets/images/screenshots/campfire-framed.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="/assets/images/screenshots/campfire-framed.png"
                                    alt="Campfire"
                                />
                            </picture>
                        </div>
                    </div>

                    <div className="uo-modal__content uo-modal__content--card-table">
                        <header>
                            <div className="uo-pill uo-pill--tool uo-pill--card-table">
                                Card Table
                            </div>
                            <p>
                                Card Tables are for tracking work that moves
                                through stages. It’s like kanban, only better.
                            </p>
                        </header>
                        <div className="screenshot screenshot--has-captions">
                            <picture>
                                <source
                                    srcSet="/assets/images/screenshots/card-table-framed.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="/assets/images/screenshots/card-table-framed.png"
                                    alt="Card Table"
                                />
                                <figcaption className="align-bottom justify-right dot dot--teal">
                                    <p>
                                        Not everyone needs to know about things
                                        as they happen.{" "}
                                        <strong>
                                            Basecamp only notifies the people
                                            who need to know
                                        </strong>
                                        , so no one’s unnecessarily distracted.
                                    </p>
                                </figcaption>
                            </picture>
                        </div>
                    </div>

                    <div className="uo-modal__content uo-modal__content--docs-and-files">
                        <header>
                            <div className="uo-pill uo-pill--tool uo-pill--docs-and-files">
                                Docs &amp; Files
                            </div>
                            <p>
                                Every project includes space to organize, share,
                                and store docs, files, and images. Cloud or
                                local.
                            </p>
                        </header>
                        <div className="screenshot">
                            <picture>
                                <source
                                    srcSet="/assets/images/screenshots/docs-and-files-framed.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="/assets/images/screenshots/docs-and-files-framed.png"
                                    alt="Docs &amp; Files"
                                />
                            </picture>
                        </div>
                    </div>

                    <div className="uo-modal__content uo-modal__content--message-board">
                        <header>
                            <div className="uo-pill uo-pill--tool uo-pill--message-board">
                                Message Board
                            </div>
                            <p>
                                Keep the entire conversation about a specific
                                topic together on a single page.
                            </p>
                        </header>
                        <div className="screenshot screenshot--has-captions">
                            <picture>
                                <source
                                    srcSet="/assets/images/screenshots/message-board-framed.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="/assets/images/screenshots/message-board-framed.png"
                                    alt="Message Board"
                                />
                                <figcaption className="align-top justify-right dot dot--yellow">
                                    <p>
                                        In Basecamp,{" "}
                                        <strong>
                                            everyone sees the same version of
                                            the full conversation
                                        </strong>
                                        . This way everyone’s always on the same
                                        page. No more forwarding emails to bring
                                        people up to speed.
                                    </p>
                                </figcaption>
                                <figcaption className="align-bottom justify-left dot dot--purple">
                                    <p>
                                        Since not everyone needs to know about
                                        things as they happen.{" "}
                                        <strong>
                                            Basecamp only notifies the people
                                            who need to know
                                        </strong>
                                        , so no one’s unnecessarily distracted.
                                    </p>
                                </figcaption>
                            </picture>
                        </div>
                    </div>

                    <div className="uo-modal__content uo-modal__content--schedule">
                        <header>
                            <div className="uo-pill uo-pill--tool uo-pill--schedule">
                                Schedule
                            </div>
                            <p>
                                Set up events, deadlines, and milestones so no
                                one misses anything important — ever.
                            </p>
                        </header>
                        <div className="screenshot">
                            <picture>
                                <source
                                    srcSet="/assets/images/screenshots/schedule-framed-75e85dfe41ce35fe0525b5a3724a5d55d5ff93a4168a41d209946a1e73a0f2e5.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="/assets/images/screenshots/schedule-framed.png"
                                    alt="Schedule"
                                />
                            </picture>
                        </div>
                    </div>

                    <div className="uo-modal__content uo-modal__content--to-dos">
                        <header>
                            <div className="uo-pill uo-pill--tool uo-pill--to-dos">
                                To-dos
                            </div>
                            <p>
                                The powerful place to track work, deadlines,
                                responsibilities, progress, and details.
                            </p>
                        </header>
                        <div className="screenshot screenshot--has-captions">
                            <picture>
                                <source
                                    srcSet="/assets/images/screenshots/to-dos-framed.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="/assets/images/screenshots/to-dos-framed.png"
                                    alt="To-dos"
                                />
                                <figcaption className="align-top justify-left dot dot--yellow">
                                    <p>
                                        Instantly understandable, impossibly
                                        powerful, Basecamp’s to-do lists do much
                                        of the heavy lifting for you.
                                    </p>
                                </figcaption>
                                <figcaption className="align-center justify-right dot dot--red">
                                    <p>
                                        Make as many lists as you want, assign
                                        as many people as you need, be notified
                                        when things are late or complete. It’s
                                        the full package in the simplest form.
                                    </p>
                                </figcaption>
                            </picture>
                        </div>
                    </div>

                    <div className="uo-modal__content uo-modal__content--hill-charts">
                        <header>
                            <p>
                                We invented “Hill Charts” to give you a visual,
                                intuitive sense of where projects really stand.
                            </p>
                        </header>
                        <div className="screenshot screenshot--has-captions">
                            <picture>
                                <source
                                    srcSet="/assets/images/screenshots/hill-charts.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="/assets/images/screenshots/hill-charts.png"
                                    alt="Hill Charts"
                                />
                                <figcaption className="align-top justify-left dot dot--blue">
                                    <p>
                                        Progress is more like a hill than a
                                        straight line. Basecamp-exclusive{" "}
                                        <strong>
                                            Hill Charts provide a unique look
                                            into what remains
                                        </strong>{" "}
                                        to figure out (uphill), and what’s in
                                        production (downhill).{" "}
                                        <a href="/hill-charts">
                                            Hmm, tell me more
                                        </a>
                                        .
                                    </p>
                                </figcaption>
                                <figcaption className="align-bottom justify-right dot dot--teal">
                                    <p>
                                        Invented here, and only available in
                                        Basecamp, Hill Charts are game changers.
                                        Once you use them you’ll never want to
                                        work without them again.
                                    </p>
                                </figcaption>
                            </picture>
                        </div>
                    </div>

                    <div className="uo-modal__content uo-modal__content--lineup">
                        <header>
                            <p>
                                “The Lineup” shows you where every project
                                stands, from start to finish, all at once.
                            </p>
                        </header>
                        <div className="screenshot screenshot--has-captions">
                            <picture>
                                <source
                                    srcSet="/assets/images/screenshots/lineup-framed.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="/assets/images/screenshots/lineup-framed.png"
                                    alt="Lineup"
                                />
                                <figcaption className="align-top justify-right dot dot--yellow">
                                    <p>
                                        <strong>
                                            Today’s always the line right down
                                            the middle
                                        </strong>
                                        , and each project has a start and end
                                        date on either end. This way you can{" "}
                                        <em>see</em> how much time remains on
                                        each one, relative to today, in a single
                                        glance.
                                    </p>
                                </figcaption>
                            </picture>
                        </div>
                    </div>

                    <div className="uo-modal__content uo-modal__content--doors">
                        <header>
                            <p>
                                Add a “Door” and link up other services you use
                                right alongside Basecamp’s built-in tools.
                            </p>
                        </header>
                        <div className="screenshot screenshot--has-captions">
                            <picture>
                                <source
                                    srcSet="/assets/images/screenshots/doors-framed.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="/assets/images/screenshots/doors-framed.png"
                                    alt="Doors"
                                />
                                <figcaption className="align-bottom justify-right dot dot--teal">
                                    <p>
                                        Got a service you use that isn’t
                                        represented here?{" "}
                                        <a href="/support">Get in touch</a> and
                                        we’ll do our best to add it for you.
                                    </p>
                                </figcaption>
                            </picture>
                        </div>
                    </div>
                </div>
                <button className="uo-modal__close" aria-label="Close Modal">
                    <span>Close</span>
                    <svg
                        height="12"
                        viewBox="0 0 12 12"
                        width="12"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="m.909856 11.0571c.282054.2733.621394.4099 1.018024.4099.42308 0 .77565-.141 1.0577-.4231l3.0012-3.01442 3.02764 3.01442c.28205.2821.63462.4231 1.05768.4231.3967 0 .7316-.1366 1.0048-.4099.2733-.282.4099-.6258.4099-1.0312 0-.37022-.141-.70075-.4231-.99162l-3.02764-3.04086 3.02764-3.05409c.2909-.28205.4363-.60817.4363-.97836 0-.40545-.1366-.7448-.4099-1.018033-.2732-.273237-.6125-.409856-1.018-.409856-.40543 0-.74918.141026-1.03123.423077l-3.05409 3.027642-3.01442-3.014421c-.27324-.282051-.6214-.423077-1.04448-.423077-.39663 0-.73597.136619-1.018024.409856-.273237.273242-.409856.608172-.409856 1.004812 0 .379.145433.70953.436298.99158l3.040862 3.04087-3.040862 3.05409c-.290865.28205-.436298.60817-.436298.97839 0 .4054.136619.7492.409856 1.0312z"
                            fill="currentcolor"
                        ></path>
                    </svg>
                </button>
            </div>
        </section>
    );
}
