import { Link } from "@remix-run/react";
import { Zoom, Slide, Fade } from "react-awesome-reveal";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Container } from "../container";
import { Button } from "../ui/button";
import elearning from "~/assets/elearning.png";

export function Header() {
  return (
    <Container
      className={`bg-header-1 bg-no-repeat bg-cover grid gap-6 place-items-center h-[25%] md:h-[789px]`}
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:self-start">
          <h1 className="text-2xl md:text-3xl font-black max-w-md text-center md:text-left mb-4">
            Unleash the Power of Success in
            <span className="text-blue-700"> Software Engineering</span> with
            <span className="text-stone-600"> CASBytes</span>.
          </h1>
          <Zoom triggerOnce duration={300} className="hidden md:block">
            <h2 className="text-xl my-12 font-black max-w-md text-center md:text-left">
              Begin Your Transformational Odyssey: Explore CASBytes'
              <span className="text-zinc-600"> Leading-Edge Curriculum.</span>
            </h2>
          </Zoom>
          <Slide cascade triggerOnce duration={300}>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 capitalize">
              <Button aria-label="get started" asChild>
                <Link to="/about">get started</Link>
              </Button>

              <Button variant="outline" aria-label="curriculum" asChild>
                <Link to="/curriculum">curriculum</Link>
              </Button>
            </div>
            <ul className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
              <li className="flex gap-2 text-center">
                <IoCheckmarkDoneCircle className="text-xl inline" /> Defined
                roadmap
              </li>
              <li className="flex gap-2 text-center">
                <IoCheckmarkDoneCircle className="text-xl inline" /> Structured
                curriculum
              </li>
            </ul>
          </Slide>
        </div>
        <div className="mt-8 md:mt-0">
          <Fade>
            <img src={elearning} alt="elearning" width={550} height={550} />
          </Fade>
        </div>
      </div>
    </Container>
  );
}
