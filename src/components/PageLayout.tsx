import { useRef, useEffect, useState } from 'react'
import { SITE } from '../constants/site'

interface PageLayoutProps {
  view: string
}

const leftPanelConfig: Record<string, { bg: string; title: string; dark?: boolean }> = {
  about: { bg: '#e0e0e0', title: 'About us', dark: true },
  contact: { bg: '#9fd4ca', title: 'Contact us' },
  projects: { bg: '#ffa489', title: 'Projects' },
}

export function PageLayout({ view }: PageLayoutProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const prevViewRef = useRef(view)
  const nextIdRef = useRef(0)
  const [showAllProjects, setShowAllProjects] = useState(false)

  const [panels, setPanels] = useState<Array<{ id: number; view: string; animClass: string }>>(
    () => view !== 'home' ? [{ id: 0, view, animClass: '' }] : []
  )

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  useEffect(() => {
    const prevView = prevViewRef.current
    if (view === prevView) return
    prevViewRef.current = view

    if (view === 'home') {
      videoRef.current?.play().catch(() => {})
      setPanels(prev => prev.map(p => ({ ...p, animClass: 'panel-slide-out' })))
      const timer = setTimeout(() => setPanels([]), 500)
      return () => clearTimeout(timer)
    }

    if (prevView === 'home') {
      const id = ++nextIdRef.current
      setPanels([{ id, view, animClass: 'panel-slide-in' }])
      const timer = setTimeout(() => setPanels([{ id, view, animClass: '' }]), 500)
      return () => clearTimeout(timer)
    }

    const id = ++nextIdRef.current
    setPanels(prev => [
      ...prev.map(p => ({ ...p, animClass: 'panel-slide-out' })),
      { id, view, animClass: 'panel-slide-in' }
    ])
    const timer = setTimeout(() => setPanels([{ id, view, animClass: '' }]), 500)
    return () => clearTimeout(timer)
  }, [view])

  const showPanelContainer = panels.length > 0

  return (
    <section className="section section--half section--hero" id="hero">
      <div className="section--half__container section--half__container--media section--half__container--media-overlay">
        <div className="panel-layer panel-video">
          <figure className="image-container image-container--video">
            <video ref={videoRef} loop playsInline muted autoPlay>
              <source
                src="https://assets.mixkit.co/videos/1728/1728-1080.mp4"
                type="video/mp4"
              />
            </video>
            <span className="watch-video">Watch the video</span>
          </figure>
        </div>
        <div className={`panel-layer panel-content ${showPanelContainer ? 'panel-visible' : ''}`}>
          <div className="panel-viewport">
            {panels.map(panel => {
              const cfg = leftPanelConfig[panel.view]
              if (!cfg) return null
              return (
                  <div
                    key={panel.id}
                    className={`page-panel-inner ${panel.animClass}${panel.view === 'about' ? ' page-panel-inner--about' : ''}${panel.view === 'contact' ? ' page-panel-inner--contact' : ''}${panel.view === 'projects' ? ' page-panel-inner--projects' : ''}`}
                    style={{ background: cfg.bg }}
                  >
                  <div className="page-panel-content">
                    {panel.view === 'about' ? (
                      <>
                        <div className="about-text-content">
                          <p>Software Engineer with 3+ years of experience building responsive web applications using JavaScript, React, Vue.js, Node.js, PostgreSQL, and MongoDB.</p>
                          <p>Experienced in developing scalable frontend and backend solutions, collaborating across product and design teams, and delivering performant user-focused applications.</p>
                        </div>
                        <div className="about-buttons">
                          <button className="about-btn">Resume</button>
                          <button className="about-btn">LinkedIn</button>
                          <button className="about-btn">GitHub</button>
                          <button className="about-btn">Xing</button>
                        </div>
                      </>
                    ) : panel.view === 'contact' ? (
                      <>
                        <form className="contact-form">
                          <div className="contact-form-field">
                            <input type="text" id="name" placeholder="Name" className="contact-form-input" required />
                          </div>
                          <div className="contact-form-field">
                            <input type="email" id="email" placeholder="Email" className="contact-form-input" required />
                          </div>
                          <div className="contact-form-field">
                            <textarea id="message" placeholder="Message" className="contact-form-textarea" rows={5} required></textarea>
                          </div>
                          <button type="submit" className="contact-form-submit">Send</button>
                        </form>
                      </>
                    ) : (
                      <>
                        <div className="projects-groups">
                          <div className={`projects-group projects-group--initial${showAllProjects ? ' out' : ''}`}>
                            <div className="project-item">
                              <div className="project-logo">G</div>
                              <div className="project-info">
                                <h3 className="project-title">Get Your Ticket</h3>
                                <p className="project-desc">Short description of the project goes here.</p>
                                <div className="project-links">
                                  <button className="project-btn">GitHub</button>
                                  <button className="project-btn">Live</button>
                                </div>
                              </div>
                            </div>
                            <div className="project-item">
                              <div className="project-logo">A</div>
                              <div className="project-info">
                                <h3 className="project-title">Another project</h3>
                                <p className="project-desc">Short description of the project goes here.</p>
                                <div className="project-links">
                                  <button className="project-btn">GitHub</button>
                                  <button className="project-btn">Live</button>
                                </div>
                              </div>
                            </div>
                            <div className="project-item">
                              <div className="project-logo">W</div>
                              <div className="project-info">
                                <h3 className="project-title">Weather App</h3>
                                <p className="project-desc">Short description of the project goes here.</p>
                                <div className="project-links">
                                  <button className="project-btn">GitHub</button>
                                  <button className="project-btn">Live</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={`projects-group projects-group--extra${showAllProjects ? ' in' : ''}`}>
                            <div className="project-item">
                              <div className="project-logo">P</div>
                              <div className="project-info">
                                <h3 className="project-title">Portfolio Site</h3>
                                <p className="project-desc">Short description of the project goes here.</p>
                                <div className="project-links">
                                  <button className="project-btn">GitHub</button>
                                  <button className="project-btn">Live</button>
                                </div>
                              </div>
                            </div>
                            <div className="project-item">
                              <div className="project-logo">C</div>
                              <div className="project-info">
                                <h3 className="project-title">Chat App</h3>
                                <p className="project-desc">Short description of the project goes here.</p>
                                <div className="project-links">
                                  <button className="project-btn">GitHub</button>
                                  <button className="project-btn">Live</button>
                                </div>
                              </div>
                            </div>
                            <div className="project-item">
                              <div className="project-logo">E</div>
                              <div className="project-info">
                                <h3 className="project-title">E-commerce</h3>
                                <p className="project-desc">Short description of the project goes here.</p>
                                <div className="project-links">
                                  <button className="project-btn">GitHub</button>
                                  <button className="project-btn">Live</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="show-more-wrapper">
                          <button className="show-more-btn" onClick={() => setShowAllProjects(!showAllProjects)}>
                            {showAllProjects ? 'Go Back' : 'Show more'}
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className={`section--half__container section--half__container--content section--black--blue section--black`}>
        <figure className="illustration illustration-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 907.41 476.68">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  id="stroke"
                  d="M907.3,1.62c-17.33-5-77.6,2.4-180,72-128,87-121,182-210,239-71.2,45.6-167.66,44.42-246,27.76l-2.24,23.14c-.22,1.31-.45,2.6-.71,3.88l.49.1q-1.05,5.36-2.57,10.39l-.48-.15a101.66,101.66,0,0,1-3.57,10l.46.2a105.64,105.64,0,0,1-4.62,9.66l-.43-.24a106.13,106.13,0,0,1-5.55,9.09l.41.29q-3,4.38-6.41,8.57l-.38-.32q-3.33,4.07-7.08,8l.36.34q-3.64,3.8-7.67,7.48l-.34-.37q-2,1.79-4,3.55t-3.91,3.3l.31.39q-3.87,3.21-8,6.38l-.3-.4q-4,3.06-8.3,6l.28.41q-4.19,2.9-8.6,5.62l-.26-.43q-4.34,2.69-8.86,5.14l.24.44c-3,1.63-6.07,3.18-9.18,4.62l-.21-.46c-3.1,1.44-6.25,2.77-9.43,4l.17.47q-4.83,1.82-9.75,3.22l-.13-.49a100.22,100.22,0,0,1-10,2.3l.09.5a90.38,90.38,0,0,1-10.2,1.23l0-.5c-1.7.11-3.4.17-5.1.17s-3.22,0-4.83-.09v.5c-3.25-.11-6.46-.34-9.65-.68l.06-.5q-4.83-.51-9.55-1.36l-.09.49q-4.78-.86-9.45-2l.13-.49c-3.13-.79-6.22-1.7-9.26-2.71l-.15.47c-3.07-1-6.1-2.15-9.06-3.38l.19-.46q-4.47-1.85-8.77-4l-.22.45q-4.33-2.18-8.49-4.64l.26-.43q-4.15-2.47-8.11-5.22l-.28.41q-4-2.76-7.74-5.8l.31-.39q-3.75-3-7.28-6.32l-.34.37q-3.54-3.3-6.84-6.84l.37-.34q-3.28-3.53-6.32-7.29l-.39.32q-3-3.76-5.8-7.74l.41-.29q-2.74-3.94-5.22-8.1l-.43.26q-2.46-4.15-4.64-8.49l.45-.22q-2.16-4.31-4-8.77l-.47.19q-1.85-4.46-3.38-9.06l.48-.16c-1-3-1.92-6.12-2.71-9.25l-.49.12Q3.3,369.74,2.43,365l.5-.09q-.86-4.73-1.36-9.55l-.5.05c-.34-3.18-.57-6.4-.68-9.64l.5,0c-.06-1.6-.09-3.21-.09-4.82s0-3.23.09-4.83l-.5,0c.11-3.24.34-6.46.68-9.64l.5.05q.51-4.83,1.36-9.55l-.5-.09q.87-4.79,2.05-9.44l.49.12c.79-3.13,1.7-6.22,2.71-9.25l-.48-.16q1.55-4.6,3.38-9.06l.47.19q1.84-4.47,4-8.77l-.45-.22q2.17-4.33,4.64-8.49l.43.26q2.47-4.16,5.22-8.1l-.41-.29q2.76-4,5.8-7.74l.39.32q3-3.77,6.32-7.29l-.37-.34q3.3-3.54,6.84-6.84l.34.37q3.52-3.28,7.28-6.32l-.31-.38q3.77-3,7.74-5.81l.28.41q4-2.75,8.11-5.22l-.26-.43q4.16-2.46,8.49-4.64l.22.45q4.31-2.16,8.77-4l-.19-.46c3-1.23,6-2.36,9.06-3.38l.15.47c3-1,6.13-1.92,9.26-2.71l-.13-.49q4.66-1.19,9.45-2l.09.49q4.73-.85,9.55-1.36l-.06-.5c3.19-.34,6.4-.57,9.65-.68v.5c1.61-.06,3.22-.08,4.83-.08s3.37,0,5,.07v-..."
                  fill="none"
                  stroke="#f5f5ea"
                  strokeWidth="0.75"
                  strokeDasharray="10 10"
                />
              </g>
            </g>
          </svg>
          <span className="circle circle-1" />
          <span className="circle circle-2" />
          <span className="circle circle-3" />
        </figure>
        <div className="section--half__inner animation-delay full">
          <h1 className="no-margin-top words animate animated">
            <span>I</span>
            <span>craft</span>
            <span>digital</span>
            <span>experiences</span>
            <span className="highlight"><span>that</span></span>
            <span className="highlight"><span>reshape</span></span>
            <span>how</span>
            <span>people</span>
            <span>interact.</span>
          </h1>
          <h2 className="h2 large os-animation animated fadeInUpSmall" data-os-animation="fadeInUpSmall">{SITE.tagline}</h2>
        </div>
      </div>
    </section>
  )
}
