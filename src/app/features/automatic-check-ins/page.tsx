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
                                <h1>Get A’s to your Q’s.</h1>
                                <h3>Automatically ask your team questions on a regular basis. Reponses are rolled-up in digest form.</h3>
                            </header>
                        </div>

                        <div className="screenshot screenshot--has-captions space-top--large">
                            <picture>
                                <source srcSet="/assets/images/screenshots/automatic-check-ins-framed.webp" type="image/webp" />
                                <img src="/assets/images/screenshots/automatic-check-ins-framed.png" alt="" />
                                <figcaption className="align-top justify-left dot dot--red">
                                    <p>Rather than schedule stand-up or status meetings, set up an Automatic Check-in instead. It’ll save everyone time, and it keeps a permanent record of what everyone shared.</p>
                                </figcaption>
                                <figcaption className="align-bottom justify-right dot dot--yellow">
                                    <p>At Basecamp, we ask our employees “<strong>What did you work on today?</strong>” every day at 5, and “<strong>What are you planning on working on</strong>” every Monday morning. Once a month we ask “<strong>Learned anything new lately?</strong>”</p>
                                </figcaption>
                                <figcaption className="align-bottom justify-left dot dot--purple">
                                    <p>Automatic Check-ins are powerful tools to eliminate hours of meetings and schedule coordination.</p>
                                </figcaption>
                            </picture>
                        </div>

                        <div className="checklist space-top--x-large">
                            <dl>
                                <dt>All of that, plus…</dt>
                                <dd>Ask questions daily, weekly, or monthly</dd>
                                <dd>Ask the whole team or just specific people</dd>
                                <dd>Pick the time of day you want to ask</dd>
                                <dd>Comment directly on individual answers</dd>
                                <dd>See a log of just one person’s responses over time</dd>
                            </dl>
                        </div>

                        <div className="features__continue">
                            <p>Next up: <a href="/features/card-table">Put workflows on the Card Table</a></p>
                        </div>

                        <div className="features__control features__control--next">
                            <a href="/features/card-table"></a>
                        </div>

                        <div className="features__control features__control--prev">
                            <a href="/features/schedule"></a>
                        </div>


                    </div>
                </div>
            </main>
        </Layout>
    )
}