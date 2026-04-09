import { Header, Hero, About, Projects, Footer } from "@/components";
import { getProjects } from "@/lib/projects";

export const dynamic = "force-dynamic";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects projects={projects} />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}
