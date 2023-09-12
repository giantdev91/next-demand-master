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
                                <h1>Bring the world inside.</h1>
                                <h3>Add a “Door” and link up other services you use right alongside Basecamp’s built-in tools.</h3>
                            </header>
                        </div>

                        <div className="screenshot screenshot--has-captions space-top--large">
                            <picture>
                                <source srcSet="/assets/images/screenshots/doors-framed.webp" type="image/webp" />
                                <img src="/assets/images/screenshots/doors-framed.png" alt="" />
                                <figcaption className="align-bottom justify-right dot dot--teal">
                                    <p>We’re adding new Doors all the time. Got a service you use that isn’t represented here? Get in touch and we’ll add it for you.</p>
                                </figcaption>
                            </picture>
                        </div>

                        <div className="features__continue">
                            <p>Next up: <a href="/features/all-access">Collaborate seamlessly</a></p>
                        </div>

                        <div className="features__control features__control--next">
                            <a href="/features/all-access"></a>
                        </div>

                        <div className="features__control features__control--prev">
                            <a href="/features/lineup"></a>
                        </div>

                    </div>
                </div>
            </main>
        </Layout>
    )
}