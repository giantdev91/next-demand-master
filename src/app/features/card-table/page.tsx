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
                                <h1>Card Table.</h1>
                                <h3>The all-new “Card Table” tool is our take on Kanban, specifically designed for reactive work.</h3>
                            </header>
                        </div>

                        <div className="screenshot screenshot--has-captions space-top--large">
                            <picture>
                                <source srcSet="/assets/images/screenshots/card-table-framed.webp" type="image/webp" />
                                <img src="/assets/images/screenshots/card-table-framed.png" alt="" />
                                <figcaption className="align-bottom justify-right dot dot--teal">
                                    <p>Not everyone needs to know about things as they happen. <strong>Basecamp only notifies the people who need to know</strong>, so no one’s unnecessarily distracted.</p>
                                </figcaption>
                            </picture>
                        </div>

                        <div className="features__continue">
                            <p>Next up: <a href="/features/lineup">Get a clear bird’s eye view</a></p>
                        </div>

                        <div className="features__control features__control--next">
                            <a href="/features/lineup"></a>
                        </div>

                        <div className="features__control features__control--prev">
                            <a href="/features/automatic-check-ins"></a>
                        </div>

                    </div>
                </div>
            </main>
        </Layout>
    )
}