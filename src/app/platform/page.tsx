import PurchaseButton from "@/components/Common/PurchaseButton";
import Layout from "@/components/Layout";
import ForthTransitionSection from "@/components/Platform/ForthTransitionSection";
import IntroSection from "@/components/Platform/IntroSection";
import MarkupSection from "@/components/Platform/MarkupSection";
import SecondTextSlideSection from "@/components/Platform/SecondTextSlideSection";
import SecondTransitionSection from "@/components/Platform/SecondTransitionSection";
import TextSlideSection from "@/components/Platform/TextSlideSection";
import ThirdTransitionSection from "@/components/Platform/ThirdTransitionSection";
import TranslationSection from "@/components/Platform/TranslationSection";
import VideoModal from "@/components/Platform/VideoModal";

export default function Platform() {
    return (
        <Layout>
            <main className="main">
                <div className="custom platform">
                    <IntroSection />
                    <TranslationSection />
                    <div style={{ background: 'linear-gradient(180deg, #ECECEC 0%, #FEFEF3 100%)' }}>
                        <MarkupSection />
                        <SecondTransitionSection />
                        <TextSlideSection />
                        <SecondTransitionSection />
                        <ThirdTransitionSection />
                        <SecondTextSlideSection />
                    </div>
                    <ForthTransitionSection />
                    <VideoModal />
                </div>
                <div className="space-top--xx-large">
                    <PurchaseButton />
                </div>
            </main>
        </Layout>
    );
}