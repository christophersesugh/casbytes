import { Fade } from "react-awesome-reveal";
import elearning2 from "~/assets/elearning2.png";
import { Container } from "../container";

export function Goals() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-evenly max-w-6xl mx-auto">
        <Fade cascade>
          <div className="max-w-md">
            <h1 className="text-3xl font-bold text-center md:text-left">
              Transform Your Dreams into Reality:{" "}
              <span className="text-blue-700">
                Unleash Your Full Potential as a Software Engineer.
              </span>
            </h1>

            <p className="opacity-80 mt-8 mb-3">
              Our core curriculum isn't just a path; it's a captivating journey
              that begins with a deep dive into the inner workings of computer
              systems. Explore the magic that makes computers tick, unravel the
              secrets behind their operation, and decode the mysteries of the
              number system.
            </p>
            <p className="opacity-80 mb-3">
              But that's just the beginning of your adventure. As you progress,
              you'll ascend to new heights, mastering both the art of low-level
              precision and the craft of high-level ingenuity in programming.
            </p>
            <p className="opacity-80 mb-4">
              Once you conquer our core curriculum, the gateway to greatness
              swings wide open. Enter our advanced curriculum, a realm where
              you'll acquire the skills and expertise to not just survive but
              thrive in the exhilarating world of real-world software
              engineering.
            </p>
            <h2 className="text-zinc-500 text-2xl">
              Your journey starts here, with CASBytes.
            </h2>
          </div>
          <img
            src={elearning2}
            width={500}
            height={500}
            alt="elearning"
            className="mt-8 md:mt-32"
          />
        </Fade>
      </div>
    </Container>
  );
}
