import PurchaseButton from "@/components/Common/PurchaseButton";
import Layout from "@/components/Layout";

export default function WhatsNew() {
    return (
        <Layout>
            <main className="main">
                <div className="custom">
                    {/* content start */}
                    <div className="integration-detail">
                        <div className="data-row">
                            <div className="content-section">
                                <button style={{ backgroundColor: '#ff7b5a' }}><span style={{ color: 'white' }}>HUBSPOT + DEMAND</span></button>
                                <h2 className="space-top--x-small">Sell more faster with Hubspot + Demand</h2>
                                <article className="space-top--medium">
                                    <p>Seamless integrations with your sales and marketing stack to help attract, qualify, and win more customers today.</p>
                                </article>
                            </div>
                            <div className="image-section first-row-image" >
                                <img src="/assets/images/integration/detail-001.png" />
                            </div>
                        </div>

                        <div className="data-row" style={{ backgroundColor: '#f17658' }}>
                            <div className="content-section">
                                <button><span>DATA QUALITY</span></button>
                                <h3 className="space-top--x-small" style={{ color: 'white' }}>Sync data in one Click to Hubspot</h3>
                                <article className="space-top--medium">
                                    <p style={{ color: 'white' }}>Export data from LinkedIn our Saleshub Prospector directly to Hubspot, and use duplication control to avoid duplicates!</p>
                                </article>
                            </div>
                            <div className="image-section space-top--large" >
                                <img src="/assets/images/integration/detail-002.png" />
                            </div>
                        </div>

                        <div className="data-row">
                            <div className="image-section" style={{ alignItems: 'flex-start' }}>
                                <img src="/assets/images/integration/detail-002.png" />
                            </div>
                            <div className="content-section">
                                <button style={{ backgroundColor: '#ff7b5a' }}><span>SALES PROCESS</span></button>
                                <h3 className="space-top--x-small" >Replies ares synced to Hubspot</h3>
                                <article className="space-top--medium">
                                    <p >No need to start checking the message history in Hubspot, Demand automatically syncs all the details including Emails, LinkedIn messages and when a person replies to your outbound campaing and creates the contact instantly in Hubspot.</p>
                                </article>
                            </div>
                        </div>

                        <div className="data-row" style={{ backgroundColor: '#f17658' }}>
                            <div className="content-section">
                                <button><span>Visitor Sync</span></button>
                                <h3 className="space-top--x-small" style={{ color: 'white' }}>Sync visitors to Hubspot identify opportunities</h3>
                                <article className="space-top--medium">
                                    <p style={{ color: 'white' }}>Automatically syncing visitors, known leads (ABM) or leads that haven’t spoken to you yet is a game changer for sales. Reach potential deals before they buy from your competitor!</p>
                                </article>
                            </div>
                            <div className="image-section space-top--large" >
                                <img src="/assets/images/integration/detail-002.png" />
                            </div>
                        </div>
                    </div>
                    {/* content end */}
                    {/* footer start */}
                    <div className="footer__recognition recognition">
                        <div className="recognition__badges customer-footer">
                            <picture>
                                <img src="/assets/images/recognition/footer-thumb-001.png" alt="" />
                            </picture>
                            <picture>
                                <img src="/assets/images/recognition/footer-thumb-002.png" alt="" />
                            </picture>
                            <picture>
                                <img src="/assets/images/recognition/footer-thumb-003.png" alt="" />
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