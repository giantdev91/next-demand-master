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
                                <h1>Be a know-it-all.</h1>
                                <h3>Reports quickly cut across every project to give you quick insights and useful angles on progress.</h3>
                            </header>
                        </div>

                        <div className="screenshot screenshot--has-captions space-top--large">
                            <picture>
                                <source srcSet="/assets/images/screenshots/activity-reports-framed.webp" type="image/webp" />
                                <img src="/assets/images/screenshots/activity-reports-framed.png" alt="" />
                                <figcaption className="align-top justify-right dot dot--yellow">
                                    <p>For example, this report shows all of Liza’s activity across every project she’s on. Every to-do she’s completed (or created), file shared, comment left, discussion started, Hill Chart updated, event scheduled, etc.</p>
                                </figcaption>
                            </picture>
                        </div>

                        <div className="checklist space-top--x-large">
                            <dl>
                                <dt>All of that, plus…</dt>
                                <dd>See what’s overdue or due soon</dd>
                                <dd>See all the tasks assigned to someone</dd>
                                <dd>See what’s been completed today</dd>
                                <dd>See what’s coming up</dd>
                            </dl>
                        </div>

                        <div className="features__continue">
                            <p>Next up: <a href="/features/pings">Just ping ’em</a></p>
                        </div>

                        <div className="features__control features__control--next">
                            <a href="/features/pings"></a>
                        </div>

                        <div className="features__control features__control--prev">
                            <a href="/features/all-access"></a>
                        </div>

                    </div>
                </div>
            </main>
        </Layout>
    )
}