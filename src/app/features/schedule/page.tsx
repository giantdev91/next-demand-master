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
                                <h1>Get it on the calendar.</h1>
                                <h3>Set up events, deadlines, and milestones so no one misses anything important — ever.</h3>
                            </header>
                        </div>

                        <div className="screenshot space-top--large">
                            <picture>
                                <source srcSet="/assets/images/screenshots/schedule-framed.webp" type="image/webp" />
                                <img src="/assets/images/screenshots/schedule-framed.png" alt="" />
                            </picture>
                        </div>

                        <div className="checklist space-top--x-large">
                            <dl>
                                <dt>All of that, plus…</dt>
                                <dd>Add events with dates, times, and date ranges</dd>
                                <dd>Add recurring events that happen like clockwork</dd>
                                <dd>Subscribe with Google Calendar/iCal/Outlook</dd>
                                <dd>Discuss events on their own page</dd>
                                <dd>Add people to notify them when things change</dd>
                            </dl>
                        </div>

                        <div className="features__continue">
                            <p>Next up: <a href="/features/automatic-check-ins">Automatically check-in on the regular</a></p>
                        </div>

                        <div className="features__control features__control--next">
                            <a href="/features/automatic-check-ins"></a>
                        </div>

                        <div className="features__control features__control--prev">
                            <a href="/features/campfire"></a>
                        </div>


                    </div>
                </div>
            </main>
        </Layout>
    )
}