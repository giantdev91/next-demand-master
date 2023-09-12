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
                                <h1>Chat around the Campfire.</h1>
                                <h3>Basecamp’s real-time group chat lets you ask quick questions and get equally quick answers.</h3>
                            </header>
                        </div>

                        <div className="screenshot space-top--large">
                            <picture>
                                <source srcSet="/assets/images/screenshots/campfire-framed.webp" type="image/webp" />
                                <img src="/assets/images/screenshots/campfire-framed.png" alt="" />
                            </picture>
                        </div>

                        <div className="checklist space-top--x-large">
                            <dl>
                                <dt>All of that, plus…</dt>
                                <dd>Make as many rooms as you want</dd>
                                <dd>@mention people to get their attention</dd>
                                <dd>Attach files, quotes, and code samples</dd>
                                <dd>Have fun with sounds, video, and emoji</dd>
                                <dd>Pipe in external services</dd>
                            </dl>
                        </div>

                        <div className="features__continue">
                            <p>Next up: <a href="/features/schedule">Schedule so you don’t forget</a></p>
                        </div>

                        <div className="features__control features__control--next">
                            <a href="/features/schedule"></a>
                        </div>

                        <div className="features__control features__control--prev">
                            <a href="/features/docs-and-files"></a>
                        </div>

                    </div>
                </div>
            </main>
        </Layout>
    )
}