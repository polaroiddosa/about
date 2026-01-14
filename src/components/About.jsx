import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const creativeRef = useRef(null);

    useEffect(() => {
        // Normal Text Reveal
        gsap.fromTo(textRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1, ease: 'power2.out',
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                }
            }
        );

        // Creative Text Animation (Chutney/Dosa)
        const creativeTitle = creativeRef.current;

        gsap.fromTo(creativeTitle.children,
            { y: 100, opacity: 0, rotate: 5 },
            {
                y: 0, opacity: 1, rotate: 0, duration: 1.2, stagger: 0.1, ease: 'elastic.out(1, 0.75)',
                scrollTrigger: {
                    trigger: creativeTitle,
                    start: 'top 75%',
                }
            }
        );

    }, []);

    return (
        <section id="about" ref={sectionRef} style={styles.section}>
            <div className="container">
                <div style={styles.creativeBox}>
                    <h3 ref={creativeRef} style={styles.creativeText}>
                        <span style={{ display: 'inline-block', color: 'var(--color-primary)' }}>Ideas</span>
                        <span style={{ display: 'inline-block' }}>stirred like chutney,</span>
                        <br />
                        <span style={{ display: 'inline-block', color: 'var(--color-secondary)' }}>Designs</span>
                        <span style={{ display: 'inline-block' }}>flipped like dosas.</span>
                    </h3>
                </div>
            </div>
        </section>
    )
}

const styles = {
    section: {
        padding: '80px 0',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
    },
    creativeBox: {
        padding: '2rem',
        textAlign: 'center',
    },
    creativeText: {
        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
        lineHeight: '1.2',
        fontFamily: `var(--font-heading)`,
    },
}

export default About
