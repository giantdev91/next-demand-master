import PurchaseButton from "@/components/Common/PurchaseButton";
import Layout from "@/components/Layout";

export default function WhatsNew() {
    return (
        <Layout>
            <main className="main">
                <div className="custom">
                    {/* headline start */}
                    <div className="headline">
                        <header>
                            <h2>Not everything under the sun, <br />just the stuff to get it done.</h2>
                        </header>
                        <article>
                            <p style={{ fontSize: 'var(--font-size-base)' }}>Demand is the quintessential Sales Acceleration platform, embodying the most effective strategies to propel your sales efforts to new heights. Meticulously distilled, streamlined, and harmoniously woven together, Explore the sections below to unveil its visual allure, operational finesse, and its unparalleled potential to drive your sales to unparalleled success.</p>
                        </article>
                    </div>
                    {/* headline end */}
                    {/* feature cards start */}
                    <div className="features space-top--large">
                        <div className="features__cards">
                            <a className="features__card" href="/features/home">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/home-thumbnail.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/home-thumbnail.png" alt="Organization begins at Home" />
                                </picture>
                                <dl>
                                    <dt>Automations that is out of this world</dt>
                                    <dd>A straightforward, one-page dashboard for your projects, assignments, and schedule.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/message-board">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/message-board-thumbnail.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/message-board-thumbnail.png" alt="Stay on topic with Messages" />
                                </picture>
                                <dl>
                                    <dt>AI that just works</dt>
                                    <dd>The centralized place for big discussions about big topics. Completely replaces project emails.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/to-dos">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/to-dos-thumbnail.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/to-dos-thumbnail.png" alt="Track work with To-dos" />
                                </picture>
                                <dl>
                                    <dt>LinkedIn Automation</dt>
                                    <dd>The powerful place to track work, deadlines, responsibilities, progress, and details.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/docs-and-files">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/docs-and-files-thumbnail.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/docs-and-files-thumbnail.png" alt="Store, share, and discuss files" />
                                </picture>
                                <dl>
                                    <dt>Social Selling</dt>
                                    <dd>An organized space to create, share, and discuss docs, files (physical and cloud), and images.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/campfire">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/campfire-thumbnail.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/campfire-thumbnail.png" alt="Chat around the Campfire" />
                                </picture>
                                <dl>
                                    <dt>Multichannel outreach</dt>
                                    <dd>Basecamp’s built-in real-time group chat lets you hash stuff out quickly then move on.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/schedule">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/schedule-thumbnail.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/schedule-thumbnail.png" alt="Schedule so you don’t forget" />
                                </picture>
                                <dl>
                                    <dt>Integrations</dt>
                                    <dd>The project schedule displays dated to-dos, deadlines, milestones, and relevant events.</dd>
                                </dl>
                            </a>
                        </div>
                    </div>
                    {/* feature card end */}
                    {/* callout space start */}
                    <div className="callout space-top--x-large">
                        <div className="callout__frame">
                            <blockquote>
                                <q>The <span className="text-highlight">Go to market playbooks from Demand enabled our team to leverage Demand and scale faster.</span></q>
                                <cite>- Christian H.</cite>
                            </blockquote>
                        </div>
                    </div>
                    {/* callout space end */}
                    {/* feature cards start */}
                    <div className="features space-top--x-large">
                        <div className="features__cards">
                            <a className="features__card" href="/features/automatic-check-ins">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/automatic-check-ins-thumbnail.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/automatic-check-ins-thumbnail.png" alt="Automatically check-in on the regular" />
                                </picture>
                                <dl>
                                    <dt>Automatically check-in on the regular</dt>
                                    <dd>Get answers on a regular basis by automatically polling your team daily, weekly, etc.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/card-table">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/card-table-thumbnail.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/card-table-thumbnail.png" alt="Put workflows on the Card Table" />
                                </picture>
                                <dl>
                                    <dt>Put workflows on the Card Table</dt>
                                    <dd>Our unique take on Kanban improves on the concept in surprising, practical ways.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/lineup">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/lineup-thumbnail.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/lineup-thumbnail.png" alt="Get a clear bird’s eye view" />
                                </picture>
                                <dl>
                                    <dt>Get a clear bird’s eye view</dt>
                                    <dd>“The Lineup” gives you a big picture view of projects in play, from start date to end date.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/doors">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/doors-thumbnail.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/doors-thumbnail.png" alt="Open a door to the world" />
                                </picture>
                                <dl>
                                    <dt>Open a door to the world</dt>
                                    <dd>“Doors” let you link up other services you use right alongside Basecamp’s built-in tools.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/all-access">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/all-access-thumbnail.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/all-access-thumbnail.png" alt="Collaborate seamlessly" />
                                </picture>
                                <dl>
                                    <dt>Collaborate seamlessly</dt>
                                    <dd>With “All-access” anyone in your Basecamp account can see and join projects.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/activity-reports">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/activity-reports-thumbnail.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/activity-reports-thumbnail.png" alt="Be a likeable know-it-all" />
                                </picture>
                                <dl>
                                    <dt>Be a likeable know-it-all</dt>
                                    <dd>Reports cut across every project so you can gain quick insight into a whole host of important details.</dd>
                                </dl>
                            </a>
                        </div>
                    </div>
                    {/* feature cards end */}
                    {/* callout space start */}
                    <div className="callout space-top--x-large">
                        <div className="callout__frame">
                            <blockquote>
                                <q>The <span className="text-highlight">Go to market playbooks from Demand enabled our team to leverage Demand and scale faster.</span></q>
                                <cite>- Christian H.</cite>
                            </blockquote>
                        </div>
                    </div>
                    {/* callout space end */}
                    {/* feature cards start */}
                    <div className="features space-top--x-large">
                        <div className="features__cards">
                            <a className="features__card" href="/features/pings">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/pings-thumbnail.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/pings-thumbnail.png" alt="Just ping ’em" />
                                </picture>
                                <dl>
                                    <dt>Just ping ’em</dt>
                                    <dd>Our version of Direct Messages, Pings let you kick off ad hoc chats 1:1 or in small groups.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/hill-charts">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/hill-charts-thumbnail.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/hill-charts-thumbnail.png" alt="See reality with Hill Charts" />
                                </picture>
                                <dl>
                                    <dt>See reality with Hill Charts</dt>
                                    <dd>Invented here, Hill Charts give you a visual, intuitive sense of where projects really stand.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/cloud-files">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/cloud-files-thumbnail.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/cloud-files-thumbnail.png" alt="Hook up all the clouds" />
                                </picture>
                                <dl>
                                    <dt>Hook up all the clouds</dt>
                                    <dd>We’ve added cloud file support for Figma, Airtable, Dropbox, Adobe, Notion, and loads more.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/my-stuff">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/my-stuff-thumbnail.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/my-stuff-thumbnail.png" alt="One click to everything yours" />
                                </picture>
                                <dl>
                                    <dt>One click to everything yours</dt>
                                    <dd>Get instant access to your schedule, assignments, drafts, bookmarks, activity, etc.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/latest-activity">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/latest-activity-thumbnail.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/latest-activity-thumbnail.png" alt="Play-by-play, minute-by-minute" />
                                </picture>
                                <dl>
                                    <dt>Play-by-play, minute-by-minute</dt>
                                    <dd>Take in everything that happens across every project in real-time — on a single page.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/notification-settings">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/notification-settings-thumbnail.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/notification-settings-thumbnail.png" alt="Control how people can reach you" />
                                </picture>
                                <dl>
                                    <dt>Control how people can reach you</dt>
                                    <dd>Email or in app? All notifications or just important ones? 24/7 or on a schedule? Your call.</dd>
                                </dl>
                            </a>
                        </div>
                    </div>
                    {/* feature cards end */}
                    {/* callout space start */}
                    <div className="callout space-top--x-large">
                        <div className="callout__frame">
                            <blockquote>
                                <q>For the first time in a long time our team is truly collaborating, and everyone is moving in the same direction, with the same goals. It’s truly remarkable how quickly things have changed in just a week.</q>
                                <cite>- Ryan Sullivan, WP Site Care</cite>
                            </blockquote>
                        </div>
                    </div>
                    {/* callout space end */}
                    {/* feature cards start */}
                    <div className="features space-top--x-large">
                        <div className="features__cards">
                            <a className="features__card" href="/features/hey-menu">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/hey-menu-thumbnail.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/hey-menu-thumbnail.png" alt="Be notified in one place" />
                                </picture>
                                <dl>
                                    <dt>Be notified in one place</dt>
                                    <dd>The Hey! menu aggregates all your notifications in a single menu. No more bouncing around.</dd>
                                </dl>
                            </a>
                        </div>
                    </div>
                    {/* feature cards end */}
                    {/* callout space start */}
                    <div className="callout space-top--x-large">
                        <div className="callout__frame">
                            <blockquote>
                                <q>We are consistently meeting deadlines because all the facts, files and comments are in one place.</q>
                                <cite>- Kim Curry, Kim Curry Design</cite>
                            </blockquote>
                        </div>
                    </div>
                    {/* callout space end */}
                    {/* footer start */}
                    <div className="footer__recognition recognition space-bottom--xxx-large">
                        <div className="recognition__badge recognition__badge--app-store">
                            <picture>
                                <source srcSet="/assets/images/recognition/badge-app-store.webp" type="image/webp" />
                                <img src="/assets/images/recognition/badge-app-store.png" alt="" />
                            </picture>
                        </div>
                        <div className="recognition__badge recognition__badge--google-play">
                            <picture>
                                <source srcSet="/assets/images/recognition/badge-google-play.webp" type="image/webp" />
                                <img src="/assets/images/recognition/badge-google-play.png" alt="" />
                            </picture>
                        </div>
                        <div className="recognition__badges">
                            <picture>
                                <source srcSet="/assets/images/recognition/badge-g2-easiest-setup.webp" type="image/webp" />
                                <img src="/assets/images/recognition/badge-g2-easiest-setup.png" alt="" />
                            </picture>
                            <picture>
                                <source srcSet="/assets/images/recognition/badge-g2-collaboration-products.webp" type="image/webp" />
                                <img src="/assets/images/recognition/badge-g2-collaboration-products.png" alt="" />
                            </picture>
                            <picture>
                                <source srcSet="/assets/images/recognition/badge-capterra-best-value.webp" type="image/webp" />
                                <img src="/assets/images/recognition/badge-capterra-best-value.png" alt="" />
                            </picture>
                            <picture>
                                <source srcSet="/assets/images/recognition/badge-g2-project-management-products.webp" type="image/webp" />
                                <img src="/assets/images/recognition/badge-g2-project-management-products.png" alt="" />
                            </picture>
                            <picture>
                                <source srcSet="/assets/images/recognition/badge-g2-best-roi.webp" type="image/webp" />
                                <img src="/assets/images/recognition/badge-g2-best-roi.png" alt="" />
                            </picture>
                        </div>
                    </div>
                    {/* footer end */}
                    <PurchaseButton />
                </div>
            </main>
        </Layout>
    )
}