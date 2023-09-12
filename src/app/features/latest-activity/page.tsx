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
                                <h1>Latest Activity.</h1>
                                <h3>The micro-view of everything that happens across every project in real-time.</h3>
                            </header>
                        </div>

                        <div className="screenshot screenshot--has-captions space-top--large">
                            <picture>
                                <source srcSet="/assets/images/screenshots/latest-activity-framed.webp" type="image/webp" />
                                <img src="/assets/images/screenshots/latest-activity-framed.png" alt="" />
                                <figcaption className="align-top justify-left dot dot--yellow">
                                    <p><strong>Latest Activity provides the micro-view</strong> of everything that happens across every team and project in real-time. <strong>You can also subscribe to a daily summary email</strong> that digests all activity for the day into a single email.</p>
                                </figcaption>
                                <figcaption className="align-center justify-right dot dot--teal">
                                    <p>You can assign work, see the status of work you’ve assigned, see what’s new to-do or overdue, and <strong>see what’s on someone’s plate any time you want</strong> via built-in, pre-defined screens and reports.</p>
                                </figcaption>
                            </picture>
                        </div>

                        <div className="features__continue">
                            <p>Next up: <a href="/features/notification-settings">Control how people can reach you</a></p>
                        </div>

                        <div className="features__control features__control--next">
                            <a href="/features/notification-settings"></a>
                        </div>

                        <div className="features__control features__control--prev">
                            <a href="/features/my-stuff"></a>
                        </div>

                    </div>
                </div>
            </main>
        </Layout>
    )
}