import { PROJECTS } from '../constants/site'

export function ProjectsSection() {
  return (
    <section className="section section--projects" id="projects">
      <div className="wrap">
        <h2 className="h1 section__title">
          Selected <span className="highlight">work</span>
        </h2>
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card__content">
                <h3 className="h2 project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-card__links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
