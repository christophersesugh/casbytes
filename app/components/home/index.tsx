import { CoreFeatures } from "./core-features";
import { CurriculumOverview } from "./curriculum-overview";
import { Goals } from "./goals";
import { Header } from "./header";
import { Partnerships } from "./partnerships";
import { Pricing } from "./pricing";
import { Testimonials } from "./testimonials";

export function Home() {
  return (
    <div className="bg-white">
      <Header />
      <CoreFeatures />
      <Goals />
      <CurriculumOverview />
      <Testimonials />
      <Partnerships />
      <Pricing />
    </div>
  );
}
