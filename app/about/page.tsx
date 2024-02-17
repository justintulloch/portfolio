import AboutSection from "../_components/about-section";
import Header from "../_components/header";


export default function Page() {
    return (
        <div>
                   <Header className="content" />
                <AboutSection className="content mt-12 md:mt-16 lg:mt-20" />
        </div>
    )
}
