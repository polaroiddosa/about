import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import bg from '../assets/alchemist-bg.png'
import rune from '../assets/rune.png'
import { Instagram, Linkedin, MapPin } from 'lucide-react'

gsap.registerPlugin(Draggable);

const StoryCanvas = () => {
    const containerRef = useRef(null);
    const runeRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Rune Float Animation
        gsap.to(runeRef.current, {
            y: -20,
            rotation: 360,
            duration: 20,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        });

        // Intro Reveal
        gsap.fromTo(".magic-card",
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, stagger: 0.2, ease: "back.out(1.7)", delay: 0.5 }
        );

        // Make cards draggable
        Draggable.create(".magic-card", {
            bounds: containerRef.current,
            inertia: true
        });
    }, []);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        gsap.to(".content-reveal", {
            height: isOpen ? 0 : 'auto',
            opacity: isOpen ? 0 : 1,
            duration: 0.5,
            ease: "power2.inOut"
        });
    }

    return (
        <div ref={containerRef} style={styles.canvas}>
            {/* Immersive Background */}
            <div style={styles.bgLayer} />

            {/* Center Rune Interaction */}
            <div style={styles.centerStage} onClick={toggleOpen}>
                <div ref={runeRef} style={styles.runeContainer}>
                    <img src={rune} alt="Magic Rune" style={styles.rune} />
                </div>
                <h1 style={styles.title}>Polaroid Dosa</h1>
                <p style={styles.subtitle}>Click the Rune to Open the Journal</p>
            </div>

            {/* Floating Content Cards (Draggable) */}
            <div className="magic-card" style={{ ...styles.card, top: '10%', left: '10%' }}>
                <h3>The Alchemy</h3>
                <p>We blend strategy and creativity like ancient potions.</p>
            </div>

            <div className="magic-card" style={{ ...styles.card, top: '15%', right: '15%' }}>
                <h3>The Craft</h3>
                <p>Visuals that enchant and convert.</p>
            </div>

            <div className="magic-card content-reveal" style={{ ...styles.bigCard, bottom: '10%', left: '50%', transform: 'translateX(-50%)' }}>
                <h2>Our Grimoire</h2>
                <div style={styles.links}>
                    <a href="https://portfolio.polaroiddosa.com/" target="_blank" style={styles.link}>Portfolio</a>
                    <a href="https://instagram.com" target="_blank" style={styles.iconLink}><Instagram /></a>
                    <a href="https://linkedin.com" target="_blank" style={styles.iconLink}><Linkedin /></a>
                </div>
            </div>

        </div>
    )
}

const styles = {
    canvas: {
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        color: '#fff',
        fontFamily: '"Crimson Pro", serif',
    },
    bgLayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.6)',
        zIndex: -1,
    },
    centerStage: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        cursor: 'pointer',
        zIndex: 10,
    },
    runeContainer: {
        width: '150px',
        height: '150px',
        margin: '0 auto 20px',
    },
    rune: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        filter: 'drop-shadow(0 0 20px #ffd700)',
    },
    title: {
        fontFamily: '"Eczar", serif',
        fontSize: '4rem',
        color: '#ffd700',
        textShadow: '0 5px 15px rgba(0,0,0,0.8)',
        margin: 0,
    },
    subtitle: {
        fontStyle: 'italic',
        opacity: 0.8,
        letterSpacing: '1px',
    },
    card: {
        position: 'absolute',
        background: 'rgba(20, 20, 30, 0.6)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 215, 0, 0.3)',
        padding: '20px',
        borderRadius: '15px',
        width: '250px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        cursor: 'grab',
    },
    bigCard: {
        position: 'absolute',
        background: 'rgba(20, 20, 30, 0.8)',
        backdropFilter: 'blur(15px)',
        border: '2px solid rgba(255, 215, 0, 0.5)',
        padding: '40px',
        borderRadius: '20px',
        width: '600px',
        textAlign: 'center',
        opacity: 0, // Hidden initially
        height: 0,
        overflow: 'hidden',
    },
    links: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '20px',
        alignItems: 'center',
    },
    link: {
        fontSize: '1.2rem',
        color: '#ffd700',
        textDecoration: 'underline',
        fontFamily: '"Eczar", serif',
    },
    iconLink: {
        color: '#fff',
        transition: 'color 0.3s',
    }
}

export default StoryCanvas
