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
                                <h1>Tame your notifications, protect your attention.</h1>
                                <h3>Email or in app? All notifications or just important ones? 24/7 or on a schedule? Your call.</h3>
                            </header>
                        </div>

                        <div className="screenshot screenshot--has-captions space-top--large">
                            <picture>
                                <source srcSet="/assets/images/screenshots/notification-settings-framed.webp" type="image/webp" />
                                <img src="/assets/images/screenshots/notification-settings-framed.png" alt="" />
                                <figcaption className="align-top justify-right dot dot--yellow">
                                    <p>Turn on <strong>“Focus mode”</strong> to slip into a no-notification, undistracted, deep-work flow-state.</p>
                                </figcaption>
                                <figcaption className="align-bottom justify-right dot dot--purple">
                                    <p><strong>“Work Can Wait”</strong> lets you automatically turn notifications off when work’s over for the day. Your time is your time.</p>
                                </figcaption>
                            </picture>
                        </div>

                        <div className="checklist space-top--x-large">
                            <dl>
                                <dt>All of that, plus…</dt>
                                <dd>Optionally get notified by email</dd>
                                <dd>Temporarily disable notifications</dd>
                                <dd>Define your private nights and weekends</dd>
                                <dd>@mention anyone to send them a notification</dd>
                            </dl>
                        </div>

                        <div className="features__continue">
                            <p>Next up: <a href="/features/hey-menu">Be notified in one place</a></p>
                        </div>

                        <div className="features__control features__control--next">
                            <a href="/features/hey-menu"></a>
                        </div>

                        <div className="features__control features__control--prev">
                            <a href="/features/latest-activity"></a>
                        </div>

                    </div>
                </div>
            </main>
        </Layout>
    )
}