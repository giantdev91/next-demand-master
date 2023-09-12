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
                                <h1>Basecamp begins at Home.</h1>
                                <h3>Your logo, your projects, your schedule, and your assignments — all on one tidy, simple screen.</h3>
                            </header>
                        </div>

                        <div className="screenshot screenshot--has-captions space-top--large">
                            <picture>
                                <source srcSet="/assets/images/screenshots/home.webp" type="image/webp" />
                                <img src="/assets/images/screenshots/home.png" alt="" />
                                <figcaption className="align-top justify-left dot dot--teal">
                                    <p>Add your logo, <strong>pin and reorder your most important projects</strong> at the top. Recently visited projects show up below, so the stuff you’re frequenting is always close by. Aside from your logo (which is shared across your account), <strong>every person can set their home page however they like.</strong></p>
                                </figcaption>
                                <figcaption className="align-bottom justify-right dot dot--yellow">
                                    <p>A filterable, sortable, list view is also available. Plus, you can <strong>quickly jump to any project any time, from anywhere</strong>, with a simple keyboard command.</p>
                                </figcaption>
                            </picture>
                        </div>

                        <div className="features__continue">
                            <p>Next up: <a href="/features/message-board">Stay on topic with Messages</a></p>
                        </div>

                        <div className="features__control features__control--next">
                            <a href="/features/message-board"></a>
                        </div>

                        <div className="features__control features__control--prev">
                            <a href="/features/hey-menu"></a>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}