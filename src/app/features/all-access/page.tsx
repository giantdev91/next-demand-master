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
                                <h1>Collaborate seamlessly.</h1>
                                <h3>With “All-access” anyone in your Basecamp account can see and join projects.</h3>
                            </header>
                        </div>

                        <div className="screenshot space-top--large">
                            <picture>
                                <source srcSet="/assets/images/screenshots/all-access-framed.webp" type="image/webp" />
                                <img src="/assets/images/screenshots/all-access-framed.png" alt="" />
                            </picture>
                        </div>

                        <div className="features__continue">
                            <p>Next up: <a href="/features/activity-reports">Be a likeable know-it-all</a></p>
                        </div>

                        <div className="features__control features__control--next">
                            <a href="/features/activity-reports"></a>
                        </div>

                        <div className="features__control features__control--prev">
                            <a href="/features/doors"></a>
                        </div>


                    </div>
                </div>
            </main>
        </Layout>
    )
}