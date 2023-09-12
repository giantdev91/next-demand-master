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
                                <h1>Very cloudy.</h1>
                                <h3>Basecamp supports sharing files from Figma, Airtable, Adobe, Dropbox, Google, and more.</h3>
                            </header>
                        </div>

                        <div className="screenshot screenshot--has-captions space-top--large">
                            <picture>
                                <source srcSet="/assets/images/screenshots/cloud-files-framed.webp" type="image/webp" />
                                <img src="/assets/images/screenshots/cloud-files-framed.png" alt="" />
                                <figcaption className="align-bottom justify-right dot dot--teal">
                                    <p><strong>We’re adding support for new services all the time</strong>. Got one you’d like to us support? Get in touch and we’ll add it if we can.</p>
                                </figcaption>
                            </picture>
                        </div>

                        <div className="features__continue">
                            <p>Next up: <a href="/features/my-stuff">One click to everything yours</a></p>
                        </div>

                        <div className="features__control features__control--next">
                            <a href="/features/my-stuff"></a>
                        </div>

                        <div className="features__control features__control--prev">
                            <a href="/features/hill-charts"></a>
                        </div>

                    </div>
                </div>
            </main>
        </Layout>
    )
}