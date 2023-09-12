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
                                <h1>Project files, safe and sound.</h1>
                                <h3>Every project includes unlimited space to organize, share, and store docs, files, and images.</h3>
                            </header>
                        </div>

                        <div className="screenshot space-top--large">
                            <picture>
                                <source srcSet="/assets/images/screenshots/docs-and-files-framed.webp" type="image/webp" />
                                <img src="/assets/images/screenshots/docs-and-files-framed.png" alt="" />
                            </picture>
                        </div>

                        <div className="checklist space-top--x-large">
                            <dl>
                                <dt>All of that, plus…</dt>
                                <dd>Link Google Docs and discuss them in Basecamp</dd>
                                <dd>Simple drag and drop upload</dd>
                                <dd>Discuss files directly on the file or image itself</dd>
                                <dd>Every file includes a complete version history</dd>
                                <dd>Reorder and color code files to keep things tidy</dd>
                                <dd>Works with cloud files from Figma, Airtable, Dropbox, and dozens more</dd>
                            </dl>
                        </div>

                        <div className="features__continue">
                            <p>Next up: <a href="/features/campfire">Chat around the Campfire</a></p>
                        </div>

                        <div className="features__control features__control--next">
                            <a href="/features/campfire"></a>
                        </div>

                        <div className="features__control features__control--prev">
                            <a href="/features/to-dos"></a>
                        </div>


                    </div>
                </div>
            </main>
        </Layout>
    )
}