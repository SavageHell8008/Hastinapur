import { ReactNode, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container, Drawer, List, ListItem, ListItemText, useScrollTrigger, Slide, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface LayoutProps {
    children: ReactNode;
}

const navItems = [
    { label: 'Experience', id: 'about' },
    { label: 'Menu', id: 'menu' },
    { label: 'Nightlife', id: 'nightlife' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
];

function HideOnScroll(props: { children: React.ReactElement }) {
    const { children } = props;
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Layout = ({ children }: LayoutProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileOpen(false);
    };

    return (
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <HideOnScroll>
                <AppBar position="fixed" elevation={0} sx={{ background: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(10px)' }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 80 }}>
                            <Typography variant="h5" color="primary" sx={{ fontFamily: 'Cinzel', fontWeight: 700, letterSpacing: 2 }}>
                                H2H
                            </Typography>

                            {!isMobile ? (
                                <Stack direction="row" spacing={4} alignItems="center">
                                    {navItems.map((item) => (
                                        <Button
                                            key={item.id}
                                            color="inherit"
                                            onClick={() => scrollToSection(item.id)}
                                            sx={{ '&:hover': { color: 'primary.main' } }}
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => scrollToSection('reservation')}
                                    >
                                        Reserve Table
                                    </Button>
                                </Stack>
                            ) : (
                                <IconButton color="inherit" onClick={handleDrawerToggle}>
                                    <MenuIcon />
                                </IconButton>
                            )}
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>

            <Box component="nav">
                <Drawer
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    PaperProps={{ sx: { width: 240, bgcolor: 'background.paper', backdropFilter: 'blur(10px)' } }}
                >
                    <Box sx={{ textAlign: 'center', py: 4 }}>
                        <Typography variant="h6" color="primary" sx={{ my: 2, fontFamily: 'Cinzel' }}>H2H</Typography>
                        <List>
                            {navItems.map((item) => (
                                <ListItem key={item.id} component="button" onClick={() => scrollToSection(item.id)}>
                                    <ListItemText primary={item.label} sx={{ textAlign: 'center' }} />
                                </ListItem>
                            ))}
                            <ListItem sx={{ justifyContent: 'center', mt: 2 }}>
                                <Button variant="contained" onClick={() => scrollToSection('reservation')}>Reserve</Button>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            </Box>

            <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>

            {/* Footer */}
            <Box sx={{ bgcolor: 'black', py: 6, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mb: { xs: 4, md: 0 } }}>
                            <Typography variant="h4" color="primary" sx={{ fontFamily: 'Cinzel', mb: 1 }}>HAMBURG 2 HASTINAPUR</Typography>
                            <Typography variant="body2" color="text.secondary">Where Luxury Meets Nightlife.</Typography>
                        </Box>
                        <Stack direction="row" spacing={3}>
                            <Button color="inherit" href="#">Instagram</Button>
                            <Button color="inherit" href="#">Facebook</Button>
                            <Button color="inherit" href="#">WhatsApp</Button>
                        </Stack>
                    </Toolbar>
                    <Typography variant="caption" display="block" align="center" color="text.secondary" sx={{ mt: 4 }}>
                        © {new Date().getFullYear()} Hamburg 2 Hastinapur. All rights reserved.
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default Layout;
