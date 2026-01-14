import React, { useRef } from 'react'
import { Instagram, Linkedin, MapPin, Globe } from 'lucide-react'

const Footer = () => {
    const links = [
        { label: 'INSTAGRAM', icon: <Instagram size={32} />, url: 'https://www.instagram.com/polaroiddosa/' },
        { label: 'LINKEDIN', icon: <Linkedin size={32} />, url: 'https://www.linkedin.com/company/polaroid-dosa/' },
        { label: 'PORTFOLIO', icon: <Globe size={32} />, url: 'https://portfolio.polaroiddosa.com/' },
    ];

    return (
        <section id="contact" style={styles.footer}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <div style={styles.linksContainer}>
                    {links.map((link, i) => (
                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" style={styles.bigLink}>
                            {link.icon}
                            <span style={styles.linkLabel}>{link.label}</span>
                        </a>
                    ))}
                </div>

                <div style={styles.locations}>
                    <a href="https://www.google.com/maps/place/Polaroid+Dosa" target="_blank" style={styles.locationLink}>
                        <MapPin size={20} /> KERALA, INDIA
                    </a>
                </div>

            </div>
        </section>
    )
}

const styles = {
    footer: {
        padding: '80px 0',
        background: 'transparent',
        position: 'relative',
        zIndex: 1, // Stay on top of mist
    },
    linksContainer: {
        display: 'flex',
        gap: '3rem',
        marginBottom: '3rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    bigLink: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        color: '#fff',
        transition: 'color 0.3s ease',
    },
    linkLabel: {
        fontSize: '1.2rem',
        fontWeight: '700',
        letterSpacing: '2px',
        fontFamily: 'var(--font-heading)',
    },
    locations: {
        marginTop: '2rem',
    },
    locationLink: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: '#666',
        fontSize: '0.9rem',
        letterSpacing: '1px',
        textTransform: 'uppercase',
    }
}

export default Footer
