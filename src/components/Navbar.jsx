import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import logo from '../assets/horizontal.png'

const Navbar = () => {
    const navRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
        );
    }, []);

    return (
        <nav ref={navRef} style={styles.nav}>
            <div className="container" style={styles.container}>
                <div style={styles.logoContainer}>
                    <img src={logo} alt="Polaroid Dosa" style={styles.logo} />
                </div>
                <div style={styles.links}>
                    <a href="#about" style={styles.link}>About</a>
                    <a href="#contact" style={styles.button}>Contact Us</a>
                </div>
            </div>
        </nav>
    )
}

const styles = {
    nav: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        background: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '1rem 0',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        height: '90px', // Further increased
        objectFit: 'contain',
    },
    links: {
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
    },
    link: {
        fontFamily: 'var(--font-body)',
        fontSize: '0.9rem',
        color: '#fff',
        opacity: 0.8,
        transition: 'opacity 0.3s ease',
    },
    button: {
        fontFamily: 'var(--font-heading)',
        fontSize: '0.9rem',
        fontWeight: 600,
        background: '#fff',
        color: '#000',
        padding: '0.6rem 1.2rem',
        borderRadius: '50px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    }
}

export default Navbar
