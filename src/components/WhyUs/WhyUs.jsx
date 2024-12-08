import Container from "../ui/Container";
import Revel from "../ui/Animation/Revel";
import OurValues from "./OurValues";
import OurTeams from "./OurTeams";
import QualityAssurance from "./QualityAssurance";

const WhyUs = () => {
  return (
    <div className="pt-16 sm:pt-20 lg:pt-24 xl:pt-28 overflow-hidden">
      <Container>
        <div>
          <Revel delay={0}>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold text-secondary-color text-start">
              Why Choose Advocate
            </h1>
          </Revel>
          <Revel delay={0.1}>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-base-color w-full sm:w-[90%] lg:w-[80%]  xl:w-[80%] mt-7 text-start">
              At Advocate, we are committed to your wellbeing. Our mission is to
              provide care that prioritizes your health, comfort, and
              independence.
            </p>
          </Revel>
        </div>
        <OurValues />
      </Container>
      <div>
        <OurTeams />
      </div>
      <div>
        <QualityAssurance />
      </div>
    </div>
  );
};

export default WhyUs;
