import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInformation";
import ConatactButtons from "./Buttons";
import About from "./About";
import Interests from "./Interests";
import SocialMediaIcons from "./SocialMediaIcons";

const BusinessCard = () => {
    return (
        <section className="business--card">
            <ProfileImage />
            <ProfileInfo />
            <ConatactButtons />
            <About />
            <Interests />
            <SocialMediaIcons />
        </section>
    );
}

export default BusinessCard;