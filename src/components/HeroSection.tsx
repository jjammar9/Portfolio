import { useRef, useEffect } from 'react'
import { SITE } from '../constants/site'

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  return (
    <section className="section section--half section--hero" id="hero">
      <div className="section--half__container section--half__container--media">
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
      <div className="section--half__container section--half__container--content section--black--blue section--black">
        <figure className="illustration illustration-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 907.41 476.68">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  id="stroke"
                  d="M907.3,1.62c-17.33-5-77.6,2.4-180,72-128,87-121,182-210,239-71.2,45.6-167.66,44.42-246,27.76l-2.24,23.14c-.22,1.31-.45,2.6-.71,3.88l.49.1q-1.05,5.36-2.57,10.39l-.48-.15a101.66,101.66,0,0,1-3.57,10l.46.2a105.64,105.64,0,0,1-4.62,9.66l-.43-.24a106.13,106.13,0,0,1-5.55,9.09l.41.29q-3,4.38-6.41,8.57l-.38-.32q-3.33,4.07-7.08,8l.36.34q-3.64,3.8-7.67,7.48l-.34-.37q-2,1.79-4,3.55t-3.91,3.3l.31.39q-3.87,3.21-8,6.38l-.3-.4q-4,3.06-8.3,6l.28.41q-4.19,2.9-8.6,5.62l-.26-.43q-4.34,2.69-8.86,5.14l.24.44c-3,1.63-6.07,3.18-9.18,4.62l-.21-.46c-3.1,1.44-6.25,2.77-9.43,4l.17.47q-4.83,1.82-9.75,3.22l-.13-.49a100.22,100.22,0,0,1-10,2.3l.09.5a90.38,90.38,0,0,1-10.2,1.23l0-.5c-1.7.11-3.4.17-5.1.17s-3.22,0-4.83-.09v.5c-3.25-.11-6.46-.34-9.65-.68l.06-.5q-4.83-.51-9.55-1.36l-.09.49q-4.78-.86-9.45-2l.13-.49c-3.13-.79-6.22-1.7-9.26-2.71l-.15.47c-3.07-1-6.1-2.15-9.06-3.38l.19-.46q-4.47-1.85-8.77-4l-.22.45q-4.33-2.18-8.49-4.64l.26-.43q-4.15-2.47-8.11-5.22l-.28.41q-4-2.76-7.74-5.8l.31-.39q-3.75-3-7.28-6.32l-.34.37q-3.54-3.3-6.84-6.84l.37-.34q-3.28-3.53-6.32-7.29l-.39.32q-3-3.76-5.8-7.74l.41-.29q-2.74-3.94-5.22-8.1l-.43.26q-2.46-4.15-4.64-8.49l.45-.22q-2.16-4.31-4-8.77l-.47.19q-1.85-4.46-3.38-9.06l.48-.16c-1-3-1.92-6.12-2.71-9.25l-.49.12Q3.3,369.74,2.43,365l.5-.09q-.86-4.73-1.36-9.55l-.5.05c-.34-3.18-.57-6.4-.68-9.64l.5,0c-.06-1.6-.09-3.21-.09-4.82s0-3.23.09-4.83l-.5,0c.11-3.24.34-6.46.68-9.64l.5.05q.51-4.83,1.36-9.55l-.5-.09q.87-4.79,2.05-9.44l.49.12c.79-3.13,1.7-6.22,2.71-9.25l-.48-.16q1.55-4.6,3.38-9.06l.47.19q1.84-4.47,4-8.77l-.45-.22q2.17-4.33,4.64-8.49l.43.26q2.47-4.16,5.22-8.1l-.41-.29q2.76-4,5.8-7.74l.39.32q3-3.77,6.32-7.29l-.37-.34q3.3-3.54,6.84-6.84l.34.37q3.52-3.28,7.28-6.32l-.31-.38q3.77-3,7.74-5.81l.28.41q4-2.75,8.11-5.22l-.26-.43q4.16-2.46,8.49-4.64l.22.45q4.31-2.16,8.77-4l-.19-.46c3-1.23,6-2.36,9.06-3.38l.15.47c3-1,6.13-1.92,9.26-2.71l-.13-.49q4.66-1.19,9.45-2l.09.49q4.73-.85,9.55-1.36l-.06-.5c3.19-.34,6.4-.57,9.65-.68v.5c1.61-.06,3.22-.08,4.83-.08s3.37,0,5,.07v-.5q5.1.13,10.08.57l0,.5c3.38.3,6.71.69,10,1.19l.08-.49q5,.76,9.92,1.84l-.11.49q5,1.09,9.75,2.52l.14-.48q4.88,1.46,9.56,3.24l-.18.47c3.15,1.21,6.23,2.52,9.24,4l.22-.45q4.56,2.17,8.92,4.72l-.25.43q4.35,2.53,8.46,5.43l.29-.41q4.11,2.9,8,6.17l-.32.38q3.82,3.22,7.39,6.81l.35-.36q3.54,3.56,6.81,7.45l-.38.33c1.07,1.28,2.12,2.58,3.15,3.92s1.86,2.47,2.76,3.75l.41-.28c1.77,2.51,3.47,5.14,5.1,7.86l-.43.26c1.57,2.63,3.08,5.36,4.5,8.17l.45-.23q2.1,4.14,4,8.49l-.46.19q1.83,4.28,3.43,8.69l.47-.17c1.06,2.93,2,5.9,2.92,8.91l-.47.14q1.32,4.47,2.38,9l.49-.11c.7,3,1.32,6.11,1.84,9.18l-.49.08c.52,3.09.95,6.18,1.27,9.26l.5,0c.32,3.12.54,6.24.66,9.34l-.5,0c0,1.56.08,3.12.08,4.67q0,2.7-.09,5.34l.5,0q-.18,5.49-.75,10.68l-.5-.06q-.37,3.4-.9,6.66"
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
