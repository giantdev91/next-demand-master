export default function MarkupSection() {
    return (
        <section className="markup-section">
            <div className="uo-markup uo-space--transition-top" style={{ paddingBottom: '5em' }}>
                <section style={{paddingBottom: '3em'}}>

                    <div className="uo-markup__body">
                        <div className="uo-markup__header">
                            <h3>Stop doing manual sales outreach <br />Let AI automate it and make it personal</h3>
                        </div>
                        <div className="uo-markup__content">
                            <p>Generate the perfect LinkedIn Message & Email with zero typing required Demand AI is the only AI sales assistant built with live data of over 250M+ contacts and millions of sales engagement data points. Trained since 2017 to tackle the AI process.</p>
                            <p>Here’s what a project looks like:</p>
                        </div>
                    </div>

                    <div className="uo-markup__projects space-top--large">
                        <picture className="back-img">
                            {/* <img src="/assets/images/platform/markup-001.png" style={{ position: 'absolute', top: 0, left: 0, width: '100%' }} /> */}
                            <div className="left-img" >
                                {/* <img src="/assets/images/platform/markup-002.png" /> */}
                            </div>
                        </picture>
                    </div>

                    <div className="uo-markup__body space-top--x-large">
                        <div className="uo-markup__header">
                            <h3>Use cases that fits your business. <br />Automated Sentiment Analysis and actions</h3>
                        </div>
                        <div className="uo-markup__content">
                            <p>Let AI analyse your replies, handle them based on Positive, Neutral and Negative replies and take action on follow ups, so no leads never fall through the cracks. Sync credit to your team, by automated reply sync to your CRM with a lead source stating <strong>Demand.</strong></p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}