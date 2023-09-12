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
                                <h1>Ping!</h1>
                                <h3>Our version of Direct Messages, Pings let you kick off ad hoc chats 1:1 or in small groups.</h3>
                            </header>
                        </div>

                        <div className="screenshot screenshot--has-captions space-top--large">
                            <picture>
                                <source srcSet="/assets/images/screenshots/pings-framed.webp" type="image/webp" />
                                <img src="/assets/images/screenshots/pings-framed.png" alt="" />
                                <figcaption className="align-top justify-left dot dot--purple">
                                    <p>Don’t have work chats via text or Whatsapp on your personal phone number. Keep work at work by having them in Basecamp instead.</p>
                                </figcaption>
                            </picture>
                        </div>

                        <div className="checklist space-top--x-large">
                            <dl>
                                <dt>All of that, plus…</dt>
                                <dd>Have private 1-1 or small group conversations</dd>
                                <dd>Search your conversation history</dd>
                                <dd>Attach files, quotes, and code samples</dd>
                                <dd>Have fun with sounds, video, and emoji!</dd>
                            </dl>
                        </div>

                        <div className="features__continue">
                            <p>Next up: <a href="/features/hill-charts">See reality with Hill Charts</a></p>
                        </div>

                        <div className="features__control features__control--next">
                            <a href="/features/hill-charts"></a>
                        </div>

                        <div className="features__control features__control--prev">
                            <a href="/features/activity-reports"></a>
                        </div>

                    </div>
                </div>
            </main>
        </Layout>
    )
}