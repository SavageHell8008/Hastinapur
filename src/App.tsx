import { useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Nightlife from './components/Nightlife';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Lenis from '@studio-freight/lenis';

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
                <Hero />
                <About />
                <Menu />
                <Nightlife />
                <Gallery />
                <Reservation />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
