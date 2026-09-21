import Future from "./Components/home-components/future";
import Hero from "./Components/home-components/hero";
import OurApproach from "./Components/home-components/our-approach";
import Powered from "./Components/home-components/powered";
import SneakPeek from "./Components/home-components/sneak-peaj";
import WhatUsersSay from "./Components/home-components/what-user";
import { createPageMetadata } from "./seo";

export const metadata = createPageMetadata(
  "/",
  "Aurix | Building Technology Solutions for the Future",
  "Aurix is a technology-driven company creating innovative digital solutions, AI-powered products, automation tools, and intelligent applications designed to simplify tasks and shape the future of technology.",
);

export default function Home() {
  return (
    <>
      <Hero />
      <SneakPeek />
      <OurApproach />
      <Future />
      <Powered />
      <WhatUsersSay />
    </>
  );
}
