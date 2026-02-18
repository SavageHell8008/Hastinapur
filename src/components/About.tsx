import { useRef } from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const imgRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });

        tl.from(imgRef.current, {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })
            .from(textRef.current, {
                x: 100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            }, '-=0.8');

    }, { scope: containerRef });

    return (
        <Box id="about" sx={{ py: 15, bgcolor: 'background.default', overflow: 'hidden' }} ref={containerRef}>
            <Container maxWidth="lg">
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box
                            ref={imgRef}
                            component="img"
                            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Luxury Dining Interior"
                            sx={{
                                width: '100%',
                                borderRadius: 4,
                                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                                filter: 'brightness(0.8)'
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box ref={textRef}>
                            <Typography variant="overline" color="primary" sx={{ letterSpacing: 3, fontSize: '1rem' }}>
                                Our Story
                            </Typography>
                            <Typography variant="h3" sx={{ my: 3, color: 'text.primary' }}>
                                A Fusion of Cultures & <br />
                                <span style={{ color: '#d4af37' }}>Sensory Excellence</span>
                            </Typography>

                            <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Hamburg 2 Hastinapur is not just a restaurant; it is a journey across time and geography.
                                Born from a desire to blend the vibrant, eclectic nightlife of Hamburg's St. Pauli district with the
                                regal, ancient grandeur of Hastinapur, we have created a sanctuary in the heart of Hauz Khas Village.
                            </Typography>

                            <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Our space transforms with the setting sun. By day, a sophisticated lounge offering artisanal coffees and
                                gourmet continental plates. By night, a pulsating hub of energy where live jazz meets deep house,
                                accompanying our signature craft cocktails and North Indian fusion cuisine.
                            </Typography>

                            <Paper
                                elevation={0}
                                sx={{
                                    mt: 4,
                                    p: 3,
                                    bgcolor: 'rgba(212, 175, 55, 0.1)',
                                    borderLeft: '4px solid #d4af37',
                                    borderRadius: 2
                                }}
                            >
                                <Typography variant="subtitle1" sx={{ fontStyle: 'italic', color: 'text.primary' }}>
                                    "We don't just serve food; we curate moments that linger on your palate and in your memory."
                                </Typography>
                                <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'primary.main', fontWeight: 700 }}>
                                    — THE FOUNDERS
                                </Typography>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
