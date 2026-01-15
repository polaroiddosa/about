import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import mascot from '../assets/comic-mascot.png'
import brandLogo from '../assets/logo-pd.png'
import { Zap, Star, ArrowRight, Instagram, Linkedin } from 'lucide-react'

const BentoGrid = () => {
    useEffect(() => {
        gsap.to(".spin-bubble", { rotation: -10, yoyo: true, repeat: -1, duration: 2, ease: "sine.inOut" });
    }, []);

    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="bento-wrapper">
            {/* Comic Header */}
            <header className="notch-nav">
                <a href="#" className="nav-link">HOME</a>
                <a href="https://portfolio.polaroiddosa.com/" target="_blank" className="nav-link">WORK</a>
                <span onClick={scrollToContact} className="nav-link">ABOUT</span>
                <span onClick={scrollToContact} className="nav-link" style={{ color: 'var(--color-accent)' }}>CONTACT!</span>
            </header>

            <div className="bento-grid">

                {/* Title Block - Comic Style */}
                <div className="title-block">
                    <h1 className="comic-main-title">WE ARE</h1>
                    <div className="logo-container">
                        <img src={brandLogo} alt="Polaroid Dosa" />
                    </div>
                    <h1 className="comic-sub-title">CREATIVE SQUAD!</h1>
                </div>

                {/* Left Card: The Mascot */}
                <div className="card-left" style={{ overflow: 'visible' }}>
                    <img src={mascot} alt="Mascot" className="image-mascot" />
                    <div className="spin-bubble" style={styles.speechBubble}>
                        <p style={{ margin: 0 }}>SNAP IT!</p>
                    </div>
                </div>

                {/* Right Card: Features */}
                <div className="card-right">
                    <div className="comic-strip">
                        <div className="panel">
                            <Zap size={32} fill="var(--color-accent)" />
                            <h3>BRAND IDENTITY</h3>
                        </div>
                        <div className="panel">
                            <Star size={32} fill="var(--color-accent)" />
                            <h3>SOCIAL STRATEGY</h3>
                        </div>
                        <div className="panel" style={{ borderBottom: 'none' }}>
                            {/* Added a 3rd point if space permits or just keep 2 but better text */}
                            <ArrowRight size={32} />
                            <h3>WEB EXPERIENCE</h3>
                        </div>
                    </div>
                </div>



                {/* Bottom Card: Call to Action */}
                <div id="contact" className="bottom-card">
                    <div style={styles.halfToneOverlay}></div>
                    <div className="bottom-header">
                        <h3 className="bottom-title">READY TO SAVE THE WORLD?</h3>
                    </div>
                    <p className="desc">
                        Based in <strong>Kerala, India</strong>. We craft visual identities that stick. Join our league of extraordinary brands!
                    </p>

                    <div className="action-row">
                        <a href="https://portfolio.polaroiddosa.com/" target="_blank" className="comic-btn">
                            VIEW PORTFOLIO <ArrowRight size={24} strokeWidth={3} />
                        </a>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/polaroiddosa/" target="_blank" className="icon-link">
                                <Instagram size={24} />
                            </a>
                            <a href="https://www.linkedin.com/company/polaroid-dosa/" target="_blank" className="icon-link">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const styles = {
    // Kept only what wasn't in CSS or is dynamic/too specific for global CSS
    speechBubble: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: '#fff',
        border: '3px solid #000',
        borderRadius: '50%',
        padding: '20px',
        fontFamily: 'var(--font-display)',
        fontSize: '1.5rem',
        boxShadow: '4px 4px 0px #000',
    },
    halfToneOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.1,
        background: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '10px 10px',
    }
}

export default BentoGrid
