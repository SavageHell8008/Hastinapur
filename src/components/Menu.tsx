import { useState, useRef } from 'react';
import { Box, Container, Typography, Tab, Tabs, Grid, Card, CardMedia, CardContent, Chip, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { MENU_ITEMS } from '../data/menuData';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
    const [tabValue, setTabValue] = useState('all');
    const containerRef = useRef(null);
    const gridRef = useRef(null);

    const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    const filteredItems = tabValue === 'all'
        ? MENU_ITEMS
        : MENU_ITEMS.filter(item => item.category === tabValue);

    useGSAP(() => {
        // Animate grid items when filteredItems changes
        gsap.fromTo('.menu-item',
            { opacity: 0, y: 50, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: 'back.out(1.7)',
                overwrite: 'auto'
            }
        );
    }, { scope: containerRef, dependencies: [filteredItems] });

    return (
        <Box id="menu" sx={{ py: 15, bgcolor: 'background.paper' }} ref={containerRef}>
            <Container maxWidth="lg">
                <Typography variant="h3" align="center" gutterBottom color="text.primary">
                    Signature <span style={{ color: '#d4af37' }}>Dining</span>
                </Typography>
                <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
                    A culinary journey through multi-cuisine delicacies.
                </Typography>

                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    centered
                    textColor="primary"
                    indicatorColor="primary"
                    sx={{ mb: 6 }}
                >
                    <Tab value="all" label="All" />
                    <Tab value="starters" label="Starters" />
                    <Tab value="mains" label="Mains" />
                    <Tab value="drinks" label="Drinks" />
                    <Tab value="specials" label="Specials" />
                </Tabs>

                <Grid container spacing={4} ref={gridRef}>
                    {filteredItems.map((item) => (
                        <Grid item xs={12} sm={6} md={3} key={item.id} className="menu-item">
                            <Card sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                overflow: 'visible',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-10px) rotateX(2deg)',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
                                }
                            }}>
                                {item.tag && (
                                    <Chip
                                        label={item.tag}
                                        size="small"
                                        color="primary"
                                        sx={{ position: 'absolute', top: 10, right: 10, zIndex: 2 }}
                                    />
                                )}
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={item.image}
                                    alt={item.name}
                                    sx={{ borderRadius: '16px 16px 0 0' }}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                                        <Typography variant="h6" component="div" sx={{ fontSize: '1.1rem', fontWeight: 600 }}>
                                            {item.name}
                                        </Typography>
                                        <Typography variant="h6" color="primary" sx={{ fontSize: '1rem' }}>
                                            {item.price}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                        {item.description}
                                    </Typography>
                                    <IconButton
                                        sx={{
                                            position: 'absolute',
                                            bottom: 10,
                                            right: 10,
                                            border: '1px solid rgba(255,255,255,0.2)'
                                        }}
                                        color="primary"
                                    >
                                        <AddIcon />
                                    </IconButton>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Menu;
