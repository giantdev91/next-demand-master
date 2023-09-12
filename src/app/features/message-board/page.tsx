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
                                <h1>Give topics some space.</h1>
                                <h3>Keep the entire conversation about a specific topic together on a single page.</h3>
                            </header>
                        </div>

                        <div className="screenshot screenshot--has-captions space-top--large">
                            <picture>
                                <source srcSet="/assets/images/screenshots/message-board-framed.webp" type="image/webp" />
                                <img src="/assets/images/screenshots/message-board-framed.png" alt="" />
                                <figcaption className="align-top justify-right dot dot--yellow">
                                    <p>In Basecamp, <strong>everyone sees the same version of the full conversation</strong>. This way everyone’s always on the same page. No more forwarding emails to bring people up to speed.</p>
                                </figcaption>
                                <figcaption className="align-bottom justify-left dot dot--purple">
                                    <p>Since not everyone needs to know about things as they happen. <strong>Basecamp only notifies the people who need to know</strong>, so no one’s unnecessarily distracted.</p>
                                </figcaption>
                            </picture>
                        </div>

                        <div className="checklist space-top--x-large">
                            <dl>
                                <dt>All of that, plus…</dt>
                                <dd>Customize with your own post types</dd>
                                <dd>Embed images or files into your message</dd>
                                <dd>Applaud messages and comments you like</dd>
                                <dd>Share with everyone or select individuals</dd>
                            </dl>
                        </div>
                        <div className="features__continue">
                            <p>Next up: <a href="/features/to-dos">Track work with To-dos</a></p>
                        </div>

                        <div className="features__control features__control--next">
                            <a href="/features/to-dos"></a>
                        </div>

                        <div className="features__control features__control--prev">
                            <a href="/features/home"></a>
                        </div>


                    </div>
                </div>
            </main>
        </Layout>
    )
}