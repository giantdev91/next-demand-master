export default function BigDemand() {
    return (
        <section>
            <div className="headline space-top--xx-large">
                <header>
                    <h4>Save big with Demand</h4>
                </header>
                <article>
                    <p>Demand <strong>Replaces</strong> a lot of manual work, tools and processes in your business saving you both time and money see how we compare to the market:</p>
                </article>
            </div>

            <div className="pricing-compare space-top--large">
                <div className="pricing-compare__basecamp">
                    <div className="pricing-compare__app pricing-compare__app--equals">
                        <figure>
                            <img src="/assets/images/logo.svg" alt="" style={{ width: '2em', height: '2em' }} />
                        </figure>
                        <dl>
                            <dt>Basecamp <span>Pro Unlimited</span></dt>
                            <dd>
                                <p>$299/month <span>for <u>unlimited users</u></span></p>
                                <ul>
                                    <li>Messages</li>
                                    <li>Realtime chat</li>
                                    <li>To-do lists</li>
                                    <li>Card table</li>
                                    <li>Schedules</li>
                                    <li>Loads of storage</li>
                                    <li>Documents</li>
                                    <li>Check-ins</li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                    <div className="pricing-compare__total">
                        <dl>
                            <dt>$299/month for unlimited users.</dt>
                        </dl>
                    </div>
                </div>
                <div className="pricing-compare__vs">vs</div>
                <div className="pricing-compare__competition" style={{ height: '15em' }}>
                    <div className="pricing-compare__app pricing-compare__app--plus">
                        <figure>
                            <img src="/assets/images/pricing/icon/slack-icon.png" alt="" />
                        </figure>
                        <dl>
                            <dt>Slack: realtime chat</dt>
                            <dd>$7.25/month per user</dd>
                        </dl>
                    </div>
                    <div className="pricing-compare__app pricing-compare__app--plus">
                        <figure>
                            <img src="/assets/images/pricing/icon/asana-icon.png" alt="" />
                        </figure>
                        <dl>
                            <dt>Asana: projects and workflows</dt>
                            <dd>$10.99/month per user</dd>
                        </dl>
                    </div>
                    <div className="pricing-compare__app pricing-compare__app--equals">
                        <figure>
                            <img src="/assets/images/pricing/icon/google-icon.png" alt="" />
                        </figure>
                        <dl>
                            <dt>Google Workspace: storage and docs</dt>
                            <dd>$12.00/month per user</dd>
                        </dl>
                    </div>
                    <div className="pricing-compare__total">
                        <dl>
                            <dt>$604.80/month for just 20 users,</dt>
                            <dd>$907.20/month for 30, $1209.60/month for 40…</dd>
                        </dl>
                    </div>
                </div>
            </div>

            <div className="pricing-summary space-top--x-large">
                <article>
                    <p><strong>Demand also eliminates the Hassle Tax. </strong>There&apos;s no more paying separate bills, onboarding people in multiple places, training people how to use different tools, forget to followup on LinkedIn, etc... <strong>The benefits of Demand go beyond price.</strong></p>
                </article>
            </div>
        </section>
    );
}