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
                                <h1>See what’s to-do and to-done.</h1>
                                <h3>Make the list, add the items, assign the work, set the due dates, and sleep well knowing it’ll get done.</h3>
                            </header>
                        </div>

                        <div className="screenshot screenshot--has-captions space-top--large">
                            <picture>
                                <source srcSet="/assets/images/screenshots/to-dos-framed.webp" type="image/webp" />
                                <img src="/assets/images/screenshots/to-dos-framed.png" alt="" />
                                <figcaption className="align-top justify-left dot dot--yellow">
                                    <p>Instantly understandable, impossibly powerful, Basecamp’s to-do lists do much of the heavy lifting for you.</p>
                                </figcaption>
                                <figcaption className="align-center justify-right dot dot--red">
                                    <p>Make as many lists as you want, assign as many people as you need, be notified when things are late or complete. It’s the full package in the simplest form.</p>
                                </figcaption>
                            </picture>
                        </div>

                        <div className="checklist space-top--x-large">
                            <dl>
                                <dt>All of that, plus…</dt>
                                <dd>Add groups to make sub-lists</dd>
                                <dd>Add notes and file attachments to any to-do</dd>
                                <dd>Comment directly on tasks and lists themselves</dd>
                                <dd>Turn on <a href="/hill-charts">Hill Charts</a> to get a visual view of progress</dd>
                            </dl>
                        </div>
                        <div className="features__continue">
                            <p>Next up: <a href="/features/docs-and-files">Store, share, and discuss files</a></p>
                        </div>

                        <div className="features__control features__control--next">
                            <a href="/features/docs-and-files"></a>
                        </div>

                        <div className="features__control features__control--prev">
                            <a href="/features/message-board"></a>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}