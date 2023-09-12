import PurchaseButton from "@/components/Common/PurchaseButton";
import Layout from "@/components/Layout";

export default function WhatsNew() {
    return (
        <Layout>
            <main className="main">
                <div className="features">
                    <div className="features__content">

                        <div className="headline headline--article-small headline--article-narrow">
                            <header>
                                <h1>Everything, at a glance.</h1>
                                <h3>“The Lineup” shows you where every project stands, from start to finish, all at once.</h3>
                            </header>
                        </div>

                        <div className="screenshot screenshot--has-captions space-top--large">
                            <picture>
                                <source srcSet="/assets/images/screenshots/lineup-framed.webp" type="image/webp" />
                                <img src="/assets/images/screenshots/lineup-framed.png" alt="" />
                                <figcaption className="align-top justify-right dot dot--yellow">
                                    <p><strong>Today’s always the line right down the middle</strong>, and each project has a start and end date on either end. This way you can <em>see</em> how much time remains on each one, relative to today, in a single glance.</p>
                                </figcaption>
                            </picture>
                        </div>

                        <div className="checklist space-top--x-large">
                            <dl>
                                <dt>All of that, plus…</dt>
                                <dd>Tap a date, instantly extend a project</dd>
                                <dd>See who’s working on each project</dd>
                                <dd>See recent projects just completed</dd>
                                <dd>See which projects are coming up soon</dd>
                            </dl>
                        </div>

                        <div className="features__continue">
                            <p>Next up: <a href="/features/doors">Open a door to the world</a></p>
                        </div>

                        <div className="features__control features__control--next">
                            <a href="/features/doors"></a>
                        </div>

                        <div className="features__control features__control--prev">
                            <a href="/features/card-table"></a>
                        </div>

                    </div>
                </div>
            </main>
        </Layout>
    )
}