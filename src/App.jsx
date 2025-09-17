
// Main App Component
import HeroSection from "./components/HeroSection.jsx";
import ProductBenefits from "./components/ProductBenefits.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import TrialOfferDetails from "./components/TrialOfferDeatils.jsx";
import SignUpForm from "./components/SignUpForm.jsx";
import SocialProof from "./components/SocialProof.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    return (
        <>
            <HeroSection/>
            <ProductBenefits/>
            <HowItWorks/>
            <TrialOfferDetails/>
            <SignUpForm/>
            <SocialProof/>
            <Footer/>
        </>

    );
}
