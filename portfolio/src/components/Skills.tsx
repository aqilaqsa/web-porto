const Skills = () => {
    const skills = ["JavaScript", "React", "Next.js", "TailwindCSS", "TypeScript"];
  
    return (
      <section className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <span key={index} className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg">
              {skill}
            </span>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;
  