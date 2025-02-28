import IconCloudDemo from "@/components/skill-cloud";
import SkillsSection from "@/components/skills";

export default function Page() {
  return (
    <section>
      <h2 className="text-3xl lg:text-7xl font-bold text-center mb-6">
        Technical Skills
      </h2>
      <div className="flex justify-center w-min lg:w-full lg:flex-row h-min m-0 p-4 flex-col ">
        <IconCloudDemo />
        <SkillsSection />
      </div>
    </section>
  );
}
