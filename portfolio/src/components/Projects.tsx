const Projects = () => {
    const projects = [
      { name: "Project 1", description: "A cool project", link: "#" },
      { name: "Project 2", description: "Another amazing project", link: "#" },
    ];
  
    return (
      <section className="p-8">
        <h2 className="text-2xl font-bold text-center mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <a key={index} href={project.link} className="p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  