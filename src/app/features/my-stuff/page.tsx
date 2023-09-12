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
                                <h1>One click to everything yours.</h1>
                                <h3>Get instant access to your schedule, assignments, drafts, bookmarks, activity, etc.</h3>
                            </header>
                        </div>

                        <div className="screenshot screenshot--has-captions space-top--large">
                            <picture>
                                <source srcSet="/assets/images/screenshots/my-stuff-framed.webp" type="image/webp" />
                                <img src="/assets/images/screenshots/my-stuff-framed.png" alt="" />
                                <figcaption className="align-center justify-right dot dot--teal">
                                    <p><strong>The “My Stuff” menu is accessible from any screen</strong> at any time so you can quickly jump to the stuff that’s relevant to you.</p>
                                </figcaption>
                            </picture>
                        </div>

                        <div className="features__continue">
                            <p>Next up: <a href="/features/latest-activity">Play-by-play, minute-by-minute</a></p>
                        </div>

                        <div className="features__control features__control--next">
                            <a href="/features/latest-activity"></a>
                        </div>

                        <div className="features__control features__control--prev">
                            <a href="/features/cloud-files"></a>
                        </div>


                    </div>
                </div>
            </main>
        </Layout>
    )
}