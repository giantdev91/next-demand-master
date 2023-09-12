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
                                <h1>Progress you can see — and feel.</h1>
                                <h3>We invented “Hill Charts” to give you a visual, intuitive sense of where projects really stand.</h3>
                            </header>
                        </div>

                        <div className="screenshot screenshot--has-captions space-top--large">
                            <picture>
                                <source srcSet="/assets/images/screenshots/hill-charts.webp" type="image/webp" />
                                <img src="/assets/images/screenshots/hill-charts.png" alt="" />
                                <figcaption className="align-top justify-left dot dot--blue">
                                    <p>Progress is more like a hill than a straight line. Basecamp-exclusive <strong>Hill Charts provide a unique look into what remains</strong> to figure out (uphill), and what’s in production (downhill). <a href="/hill-charts">Hmm, tell me more</a>.</p>
                                </figcaption>
                                <figcaption className="align-bottom justify-right dot dot--teal">
                                    <p>Invented here, and only available in Basecamp, Hill Charts are game changers. Once you use them you’ll never want to work without them again.</p>
                                </figcaption>
                            </picture>
                        </div>

                        <div className="checklist space-top--x-large">
                            <dl>
                                <dt>All of that, plus…</dt>
                                <dd>See progress over time with history snapshots</dd>
                                <dd>Every update can be annotated</dd>
                                <dd>Respond to updates with comments or Boosts</dd>
                                <dd>Eliminate the need for daily standups</dd>
                            </dl>
                        </div>

                        <div className="features__continue">
                            <p>Next up: <a href="/features/cloud-files">Hook up all the clouds</a></p>
                        </div>

                        <div className="features__control features__control--next">
                            <a href="/features/cloud-files"></a>
                        </div>

                        <div className="features__control features__control--prev">
                            <a href="/features/pings"></a>
                        </div>

                    </div>
                </div>
            </main>
        </Layout>
    )
}