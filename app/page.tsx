import { Header, Hero, About, Projects, Footer } from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}
