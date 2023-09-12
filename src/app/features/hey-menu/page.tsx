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
                                <h1>Hey! It’s for you.</h1>
                                <h3>No matter what it is, the Hey! menu is where your notifications go when you need to know.</h3>
                            </header>
                        </div>

                        <div className="screenshot space-top--large">
                            <picture>
                                <source srcSet="/assets/images/screenshots/hey-menu-framed.webp" type="image/webp" />
                                <img src="/assets/images/screenshots/hey-menu-framed.png" alt="" />
                            </picture>
                        </div>

                        <div className="features__continue">
                            <p>Next up: <a href="/features/home">Organization begins at Home</a></p>
                        </div>

                        <div className="features__control features__control--next">
                            <a href="/features/home"></a>
                        </div>

                        <div className="features__control features__control--prev">
                            <a href="/features/notification-settings"></a>
                        </div>


                    </div>
                </div>
            </main>
        </Layout>
    )
}