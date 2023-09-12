export default function FirstTransitionSection() {
    return (
        <section className="space-top--xxx-large">
            <div className="uo-transition space-top--xx-large">
                <section>
                    <button className="uo-transition__image uo-transition__image--04 uo-modal-trigger" data-modal=".uo-modal__content--card-table" aria-label="Learn about Card Table">
                        <figure>
                            <picture>
                                <source srcSet="/assets/images/uo/transition/card-table.webp" type="image/webp" />
                                <img src="/assets/images/uo/transition/card-table.png" alt="Card Table" />
                            </picture>
                            <div>
                                <p>Got a process to track? Need to watch stuff move through stages? Basecamp’s <strong>Card Table</strong> is what you need. It’s our unique take on kanban.</p>
                            </div>
                        </figure>
                    </button>

                    <button className="uo-transition__image uo-transition__image--03 uo-transition__image--video uo-transition__image--overview uo-modal-trigger" data-modal=".uo-modal__content--a-quick-overview" aria-label="Watch “A Quick Overview”">
                        <figure>
                            <picture>
                                <img src="/assets/images/uo/transition/a-quick-overview.png" alt="Watch “A Quick Overview”" />
                            </picture>
                            <div>
                                <figcaption>Watch “A Quick Overview”</figcaption>
                            </div>
                        </figure>
                    </button>

                    <button className="uo-transition__image uo-transition__image--02 uo-modal-trigger" data-modal=".uo-modal__content--hill-charts" aria-label="Learn about Hill Charts">
                        <figure>
                            <picture>
                                <source srcSet="/assets/images/uo/transition/hill-charts.webp" type="image/webp" />
                                <img src="/assets/images/uo/transition/hill-charts.png" alt="Hill Charts" />
                            </picture>
                            <div>
                                <p>Instead of wondering what “73% done” really means, Basecamp’s <strong>Hill Charts</strong> give you a visual, intuitive sense of where projects really stand.</p>
                            </div>
                        </figure>
                    </button>

                </section>
            </div>
        </section>
    )
}