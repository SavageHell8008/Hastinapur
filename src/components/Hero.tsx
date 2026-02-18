import { useRef } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Prism from './Prism';

const Hero = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const subTextRef = useRef(null);
    const btnRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.from(textRef.current, {
            y: 100,
            opacity: 0,
            duration: 1.5,
            delay: 0.5,
            skewY: 7
        })
            .from(subTextRef.current, {
                y: 30,
                opacity: 0,
                duration: 1
            }, '-=1')
            .from(btnRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2
            }, '-=0.5');

        // Magnetic button effect
        if (btnRef.current) {
            const buttons = gsap.utils.toArray((btnRef.current as HTMLElement).children);
            buttons.forEach((btn: any) => {
                btn.addEventListener('mouseenter', () => gsap.to(btn, { scale: 1.1, duration: 0.3, ease: 'back.out(1.7)' }));
                btn.addEventListener('mouseleave', () => gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' }));
            });
        }

    }, { scope: containerRef });

    return (
        <Box id="home" sx={{
            height: '100vh',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            bgcolor: '#000'
        }} ref={containerRef}>

            {/* Prism Background */}
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <Prism
                    animationType="rotate"
                    timeScale={0.5}
                    height={3.5}
                    baseWidth={5.5}
                    scale={3.6}
                    hueShift={0.2}
                    colorFrequency={1}
                    noise={0.2}
                    glow={1.2}
                    bloom={1}
                />
            </Box>

            {/* Content Overlay */}
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', bgcolor: 'rgba(0,0,0,0.5)', zIndex: 1, pointerEvents: 'none' }} />

            <Container maxWidth="md" sx={{ textAlign: 'center', zIndex: 2 }}>
                <Box sx={{ overflow: 'hidden', mb: 2 }}>
                    <Typography variant="h2" ref={textRef} sx={{
                        color: 'text.primary',
                        textTransform: 'uppercase',
                        letterSpacing: 4,
                        fontWeight: 700,
                        textShadow: '0 0 30px rgba(0,0,0,0.5)',
                        lineHeight: 1.2
                    }}>
                        Where Nightlife Meets <span style={{ color: '#d4af37' }}>Fine Dining</span>
                    </Typography>
                </Box>

                <Typography variant="h6" ref={subTextRef} color="text.secondary" sx={{ mb: 5, letterSpacing: 2, fontStyle: 'italic', fontWeight: 300 }}>
                    Hauz Khas Village, New Delhi
                </Typography>

                <Box ref={btnRef} sx={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        size="large"
                        href="#reservation"
                        sx={{
                            borderRadius: 50,
                            px: 5,
                            py: 1.5,
                            fontSize: '1.1rem',
                            background: 'linear-gradient(45deg, #d4af37 30%, #ffd700 90%)',
                            color: 'black',
                            boxShadow: '0 0 25px rgba(212, 175, 55, 0.5)',
                            transition: 'none',
                            '&:hover': {
                                background: 'linear-gradient(45deg, #ffd700 30%, #d4af37 90%)',
                                boxShadow: '0 0 35px rgba(212, 175, 55, 0.7)',
                            }
                        }}
                    >
                        Reserve Table
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        color="inherit"
                        href="#menu"
                        sx={{
                            borderRadius: 50,
                            px: 5,
                            py: 1.5,
                            fontSize: '1.1rem',
                            borderColor: 'rgba(255,255,255,0.4)',
                            backdropFilter: 'blur(10px)',
                            color: 'white',
                            borderWidth: 2,
                            transition: 'none',
                            '&:hover': {
                                borderColor: '#fff',
                                bgcolor: 'rgba(255,255,255,0.1)'
                            }
                        }}
                    >
                        View Menu
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
