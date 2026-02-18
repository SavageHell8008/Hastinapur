import { useRef } from 'react';
import { Box, Container, Typography, Card, CardMedia } from '@mui/material';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EVENTS = [
    {
        id: 1,
        title: 'Techno & Tequila',
        date: 'FRI 24 NOV',
        time: '9 PM Onwards',
        description: 'Featuring DJ ACE spinning deep house and techno beats.',
        image: 'https://images.unsplash.com/photo-1574391884720-385e6e288e19?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 2,
        title: 'Sufi Nights Live',
        date: 'SAT 25 NOV',
        time: '8 PM Onwards',
        description: 'Soulful tunes by the Awaaz Band under the stars.',
        image: 'https://images.unsplash.com/photo-1514525253440-b393452e8220?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 3,
        title: 'Ladies Night',
        date: 'WED 29 NOV',
        time: '10 PM Onwards',
        description: 'Complimentary artisanal cocktails for ladies till midnight.',
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 4,
        title: 'Jazz By The Bar',
        date: 'THU 30 NOV',
        time: '7 PM Onwards',
        description: 'Live Saxophone performance accompanying your dinner.',
        image: 'https://images.unsplash.com/photo-1511192394262-628d615d3743?auto=format&fit=crop&w=800&q=80',
    },
];

const Nightlife = () => {
    const containerRef = useRef(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const events = gsap.utils.toArray('.event-card');

        gsap.fromTo(events,
            { opacity: 0, x: 100 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }, { scope: containerRef });

    return (
        <Box id="nightlife" sx={{ py: 15, bgcolor: 'background.default', overflow: 'hidden' }} ref={containerRef}>
            <Container maxWidth="xl">
                <Typography
                    variant="h2"
                    sx={{
                        mb: 8,
                        textAlign: 'center',
                        color: 'text.primary',
                        textShadow: '0 0 10px rgba(212, 175, 55, 0.5)'
                    }}
                >
                    The <span style={{ color: '#d4af37' }}>Vibe</span>
                </Typography>

                <Box
                    ref={scrollContainerRef}
                    sx={{
                        display: 'flex',
                        gap: 4,
                        overflowX: 'auto',
                        pb: 4,
                        px: 2,
                        scrollbarWidth: 'none', // Firefox
                        '&::-webkit-scrollbar': { display: 'none' } // Chrome
                    }}
                >
                    {EVENTS.map((event) => (
                        <Box key={event.id} className="event-card">
                            <Card sx={{ minWidth: 350, maxWidth: 350, height: 450, position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image={event.image}
                                    alt={event.title}
                                    sx={{ filter: 'brightness(0.7)' }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 20,
                                        left: 20,
                                        bgcolor: 'secondary.main',
                                        px: 2,
                                        py: 1,
                                        borderRadius: 1
                                    }}
                                >
                                    <Typography variant="button" sx={{ color: 'white' }}>{event.date}</Typography>
                                </Box>

                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                        p: 3
                                    }}
                                >
                                    <Typography variant="h5" color="primary" gutterBottom sx={{ fontFamily: 'Cinzel' }}>
                                        {event.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.primary">
                                        {event.time}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                        {event.description}
                                    </Typography>
                                </Box>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Nightlife;
