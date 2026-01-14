import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import mascot from '../assets/comic-mascot.png'
import brandLogo from '../assets/logo-pd.png'
import { Zap, Star, ArrowRight } from 'lucide-react'

const BentoGrid = () => {
    useEffect(() => {
        gsap.to(".spin-bubble", { rotation: -10, yoyo: true, repeat: -1, duration: 2, ease: "sine.inOut" });
    }, []);

    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div style={styles.wrapper}>
            {/* Comic Header */}
            <header className="notch-nav">
                <a href="#" style={styles.navLink}>HOME</a>
                <a href="https://portfolio.polaroiddosa.com/" target="_blank" style={styles.navLink}>WORK</a>
                <span onClick={scrollToContact} style={styles.navLink}>ABOUT</span>
                <span onClick={scrollToContact} style={{ ...styles.navLink, color: 'var(--color-accent)' }}>CONTACT!</span>
            </header>

            <div style={styles.gridContainer}>

                {/* Title Block - Comic Style */}
                <div className="title-block">
                    <h1 className="comic-main-title">WE ARE</h1>
                    <div className="logo-container">
                        <img src={brandLogo} alt="Polaroid Dosa" />
                    </div>
                    <h1 className="comic-sub-title">CREATIVE SQUAD!</h1>
                </div>

                {/* Left Card: The Mascot */}
                <div style={styles.cardLeft}>
                    <img src={mascot} alt="Mascot" style={styles.imageMascot} />
                    <div className="spin-bubble" style={styles.speechBubble}>
                        <p style={{ margin: 0 }}>SNAP IT!</p>
                    </div>
                </div>

                {/* Right Card: Features */}
                <div style={styles.cardRight}>
                    <div style={styles.comicStrip}>
                        <div style={styles.panel}>
                            <Zap size={32} fill="var(--color-accent)" />
                            <h3>BRAND IDENTITY</h3>
                        </div>
                        <div style={styles.panel}>
                            <Star size={32} fill="var(--color-accent)" />
                            <h3>SOCIAL STRATEGY</h3>
                        </div>
                        <div style={{ ...styles.panel, borderBottom: 'none' }}>
                            {/* Added a 3rd point if space permits or just keep 2 but better text */}
                            <ArrowRight size={32} />
                            <h3>WEB EXPERIENCE</h3>
                        </div>
                    </div>
                </div>



                {/* Bottom Card: Call to Action */}
                <div id="contact" style={styles.bottomCard}>
                    <div style={styles.halfToneOverlay}></div>
                    <div style={styles.bottomHeader}>
                        <h3 style={styles.bottomTitle}>READY TO SAVE THE WORLD?</h3>
                    </div>
                    <p style={styles.desc}>
                        Based in <strong>Kerala, India</strong>. We craft visual identities that stick. Join our league of extraordinary brands!
                    </p>

                    <div style={styles.actionRow}>
                        <a href="https://portfolio.polaroiddosa.com/" target="_blank" style={styles.comicBtn}>
                            VIEW PORTFOLIO <ArrowRight size={24} strokeWidth={3} />
                        </a>
                        <div style={styles.socialIcons}>
                            <a href="https://www.instagram.com/polaroiddosa/" target="_blank" style={styles.iconLink}>IG</a>
                            <a href="https://www.linkedin.com/company/polaroid-dosa/" target="_blank" style={styles.iconLink}>IN</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const styles = {
    wrapper: {
        padding: '8rem 2rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        minHeight: '100vh',
    },
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'auto 400px auto',
        gap: '2rem',
        position: 'relative',
    },
    titleBlock: {
        gridColumn: '1 / -1',
        marginBottom: '1rem',
        textAlign: 'center',
    },
    mainTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: '4rem',
        lineHeight: 0.8,
        margin: 0,
        transform: 'rotate(-2deg)',
    },
    // logoTitle: {
    //  ... deprecated ...
    // },
    subTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: '4rem',
        lineHeight: 0.8,
        color: 'var(--color-accent)',
        textShadow: '3px 3px 0px #000',
        margin: 0,
        transform: 'rotate(2deg)',
    },
    cardLeft: {
        backgroundColor: '#FFF',
        border: 'var(--border-thick)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow-comic)',
        position: 'relative',
        overflow: 'visible', // Let mascot pop out?
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    imageMascot: {
        height: '110%', // Pop out effect
        marginTop: '-10%',
        objectFit: 'contain',
        filter: 'drop-shadow(5px 5px 0px rgba(0,0,0,0.2))',
    },
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
    cardRight: {
        backgroundColor: '#FFF',
        border: 'var(--border-thick)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow-comic)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    comicStrip: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    panel: {
        border: '2px solid #000',
        padding: '20px',
        borderRadius: '15px',
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        fontFamily: 'var(--font-display)',
        fontSize: '1.5rem',
        background: '#f9f9f9',
    },
    badgeContainer: {
        position: 'absolute',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
    },
    comicBadge: {
        background: 'var(--color-accent)',
        color: '#fff',
        border: '3px solid #000',
        padding: '15px 30px',
        fontFamily: 'var(--font-display)',
        fontSize: '2rem',
        transform: 'rotate(-10deg)',
        boxShadow: '5px 5px 0px #000',
    },
    bottomCard: {
        gridColumn: '1 / -1',
        background: '#FFF',
        border: 'var(--border-thick)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow-comic)',
        padding: '3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    bottomHeader: {
        position: 'relative',
        zIndex: 2,
    },
    bottomTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: '3rem',
        margin: 0,
    },
    desc: {
        fontSize: '1.2rem',
        maxWidth: '600px',
        margin: '1rem 0 2rem',
        position: 'relative',
        zIndex: 2,
    },
    navLink: {
        textDecoration: 'none',
        color: '#000',
        cursor: 'pointer',
    },
    actionRow: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
    },
    socialIcons: {
        display: 'flex',
        gap: '10px',
    },
    iconLink: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: '#000',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        border: '2px solid #000',
        boxShadow: '3px 3px 0px rgba(0,0,0,0.2)',
        transition: 'transform 0.2s',
    },
    comicBtn: {
        background: 'var(--color-accent)',
        color: '#fff',
        border: '3px solid #000',
        padding: '15px 40px',
        fontFamily: 'var(--font-display)',
        fontSize: '1.8rem',
        cursor: 'pointer',
        boxShadow: '5px 5px 0px #000',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none',
        transition: 'transform 0.1s',
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
