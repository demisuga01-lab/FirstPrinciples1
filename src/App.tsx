import { lazy, Suspense } from "react";
import Layout from "./components/layout/Layout";
import HeroSection from "./components/sections/HeroSection";
import ScanlineOverlay from "./components/ui/ScanlineOverlay";
import CursorTracker from "./components/ui/CursorTracker";
import InteractiveGrid from "./components/effects/InteractiveGrid";

const AboutSection = lazy(() => import("./components/sections/AboutSection"));
const WorkSection = lazy(() => import("./components/sections/WorkSection"));
const SkillsSection = lazy(() => import("./components/sections/SkillsSection"));
const TimelineSection = lazy(
  () => import("./components/sections/TimelineSection"),
);
const BlogSection = lazy(() => import("./components/sections/BlogSection"));
const ContactSection = lazy(
  () => import("./components/sections/ContactSection"),
);

function LoadingFallback() {
  return (
    <div className="flex h-64 items-center justify-center">
      <div className="h-1 w-32 animate-pulse rounded bg-accent-cyan" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <InteractiveGrid />
      <ScanlineOverlay />
      <CursorTracker />
      <Layout>
        <HeroSection />
        <Suspense fallback={<LoadingFallback />}>
          <AboutSection />
          <WorkSection />
          <SkillsSection />
          <TimelineSection />
          <BlogSection />
          <ContactSection />
        </Suspense>
      </Layout>
    </>
  );
}
