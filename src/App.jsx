
// Main App Component
import HeroSection from "./components/HeroSection.jsx";
import ProductBenefits from "./components/ProductBenefits.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import TrialOfferDetails from "./components/TrialOfferDeatils.jsx";
import SignUpForm from "./components/SignUpForm.jsx";
import SocialProof from "./components/SocialProof.jsx";
import Footer from "./components/Footer.jsx";
import {freeTrialTestimonials} from "./NewReviews.js";
export default function App() {
    return (
        <>
            <HeroSection/>
            <ProductBenefits/>
            <HowItWorks/>
            <TrialOfferDetails/>
            <SignUpForm/>
            <div className="grid grid-cols-4 gap-8 mt-16">
                {freeTrialTestimonials.map(freeTrialTestimonial => (
                    <SocialProof
                        key={freeTrialTestimonial.authorName}
                        authorName={freeTrialTestimonial.authorName}
                        authorHandle={freeTrialTestimonial.authorHandle}
                        authorBody={freeTrialTestimonial.authorBody}

                        imageURL={freeTrialTestimonial.imageURL}
                        altText={freeTrialTestimonial.altText}
                    />
                ))}
            </div>
            <Footer/>
        </>

    );
}
