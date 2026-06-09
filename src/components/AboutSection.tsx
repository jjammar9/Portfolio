import { ABOUT } from '../constants/site'

export function AboutSection() {
  const grouped = ABOUT.skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = []
      acc[skill.category].push(skill.name)
      return acc
    },
    {} as Record<string, string[]>,
  )

  return (
    <section className="section section--about section--black" id="about">
      <div className="wrap">
        <div className="about-inner">
          <h2 className="h1 section__title">
            About <span className="highlight teal">me</span>
          </h2>
          <p className="about-bio">{ABOUT.bio}</p>
          <div className="about-skills">
            {Object.entries(grouped).map(([category, skills]) => (
              <div key={category} className="skill-group">
                <h3 className="skill-category">{category}</h3>
                <div className="skill-list">
                  {skills.map((skill) => (
                    <span key={skill} className="tag tag--outline">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
