import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Hero = () => {
    const containerRef = useRef(null);
    const elementsRef = useRef([]);

    useEffect(() => {
        // Floating animation for text elements
        elementsRef.current.forEach((el, index) => {
            if (!el) return;

            gsap.to(el, {
                y: 'random(-20, 20)',
                x: 'random(-10, 10)',
                rotation: 'random(-2, 2)',
                duration: 'random(3, 5)',
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: index * 0.2
            });
        });

        // Initial Fade In
        gsap.fromTo(elementsRef.current,
            { opacity: 0, y: 50, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 1.5, stagger: 0.1, ease: 'power3.out' }
        );
    }, []);

    const addToRefs = (el) => {
        if (el && !elementsRef.current.includes(el)) {
            elementsRef.current.push(el);
        }
    };

    return (
        <section ref={containerRef} style={styles.hero}>
            {/* Mist Background Layers added in global CSS, but we can add wrapper here if needed */}
            <div className="mist-container">
                <div className="mist-orb orb-1"></div>
                <div className="mist-orb orb-2"></div>
                <div className="mist-orb orb-3"></div>
            </div>

            <div className="container" style={styles.content}>
                <div style={styles.floatingWrapper}>
                    <h1 ref={addToRefs} style={{ ...styles.word, alignSelf: 'flex-start', color: '#fff' }}>
                        BREWING
                    </h1>
                    <h1 ref={addToRefs} style={{ ...styles.word, alignSelf: 'center', color: 'var(--color-secondary)', opacity: 0.8 }}>
                        BRANDS
                    </h1>
                    <h1 ref={addToRefs} style={{ ...styles.word, alignSelf: 'flex-end', color: 'var(--color-primary)' }}>
                        PERFECTION
                    </h1>
                </div>
            </div>
        </section>
    )
}

const styles = {
    hero: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    content: {
        width: '100%',
        padding: '0 5vw',
        position: 'relative',
        zIndex: 1,
    },
    floatingWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        minHeight: '60vh',
        justifyContent: 'center',
    },
    word: {
        fontSize: 'clamp(4rem, 12vw, 10rem)',
        lineHeight: '0.9',
        textTransform: 'uppercase',
        margin: 0,
        cursor: 'default',
        textShadow: '0 10px 30px rgba(0,0,0,0.3)', // Soft shadow for depth
    },
}

export default Hero

// Media query integration for styles needs proper css-in-js lib or just use index.css classes.
// For speed/simplicity, I used inline styles, but responsive grid needs media queries.
// I'll suggest adding a responsive block in index.css for the .content grid.
