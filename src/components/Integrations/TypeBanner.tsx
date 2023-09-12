'use client';

export default function TypeBanner({ active }: {
    active: string,
}) {

    const handleDemandButton = () => {
        let value = 300;
        if (window.innerWidth < 1024) {
            value = 250;
        }
        if (window.innerWidth < 900) {
            value = 440;
        }
        if (window.innerWidth < 550) {
            value = 570;
        }
        document.documentElement.scrollTop = value;
    }

    const handlePartnerButton = () => {
        let value = 1550;
        if (window.innerWidth < 1280) {
            value = 1600;
        }
        if (window.innerWidth < 1024) {
            value = 1400;
        }
        if (window.innerWidth < 990) {
            value = 2000;
        }
        if (window.innerWidth < 860) {
            value = 2200;
        }
        if (window.innerWidth < 650) {
            value = 3400;
        }
        document.documentElement.scrollTop = value;
    }

    const handleZapierButton = () => {
        let value = 2460;
        if (window.innerWidth < 1280) {
            value = 2400;
        }
        if (window.innerWidth < 1024) {
            value = 2200;
        }
        if (window.innerWidth < 990) {
            value = 3000;
        }
        if (window.innerWidth < 860) {
            value = 5200;
        }
        if (window.innerWidth < 550) {
            value = 5400;
        }
        document.documentElement.scrollTop = value;
    }
    return (
        <div className="integration-type space-top--x-large">
            <button className={`banner-back ${active == 'demand' ? 'active' : ''}`} onClick={handleDemandButton}>
                <figure className="demand" />
                <span>BUILT BY DEMAND</span>
            </button>
            <button className={`banner-back ${active == 'partner' ? 'active' : ''}`} onClick={handlePartnerButton}>
                <figure className="partner" />
                <span>BUILT BY DEMAND</span>
            </button>
            <button className={`banner-back ${active == 'zapier' ? 'active' : ''}`} onClick={handleZapierButton}>
                <figure className="zapier" />
                <span>BUILT BY DEMAND</span>
            </button>
        </div >
    )
}