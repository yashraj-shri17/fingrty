import { useEffect } from 'react';
import './coaching.css';

export default function Coaching() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="coaching-hero-fullscreen">
       <div className="coaching-hero-content">
          <h1 className="coaching-title fade-up delay-1">
             Command The<br/>
             Final Round<br/>
             In Finance<span className="accent-dot">.</span>
          </h1>
          <p className="coaching-desc fade-up delay-2">
             Master the exact frameworks to crack top-tier finance<br/> 
             roles. Build the narrative and executive presence<br/>
             needed to secure elite positions in PE, VC, & IB.
          </p>
          
          <div className="coaching-actions fade-up delay-3">
             <a href="#learn" className="btn-learn">LEARN MORE</a>
             <button className="btn-watch">
                <div className="play-icon-blue">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                     <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span>Watch video</span>
             </button>
          </div>
       </div>
    </div>
  )
}
