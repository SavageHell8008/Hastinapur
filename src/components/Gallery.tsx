import { Box, Container, Typography, ImageList, ImageListItem } from '@mui/material';
import { motion } from 'framer-motion';

const itemData = [
    { img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de', title: 'Cocktail Bar', rows: 2, cols: 2 },
    { img: 'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2', title: 'Fine Dining' },
    { img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330', title: 'Rooftop View' },
    { img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4', title: 'Candle Light', cols: 2 },
    { img: 'https://images.unsplash.com/photo-1555244162-803834f70033', title: 'Plated Dish', cols: 2 },
    { img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b', title: 'Live Music', rows: 2, cols: 2 },
    { img: 'https://images.unsplash.com/photo-1574096079513-d82599697dc0', title: 'Dance Floor' },
    { img: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31', title: 'VIP Lounge' },
];

const Gallery = () => {
    return (
        <Box id="gallery" sx={{ py: 15, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Typography variant="h3" align="center" gutterBottom>
                    Captured <span style={{ color: '#d4af37' }}>Moments</span>
                </Typography>
                <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 8 }}>
                    Glimpses of the Hamburg 2 Hastinapur experience.
                </Typography>

                <ImageList
                    sx={{ width: '100%', height: 'auto', overflow: 'hidden' }}
                    variant="quilted"
                    cols={4}
                    rowHeight={200}
                    gap={16}
                >
                    {itemData.map((item) => (
                        <ImageListItem
                            key={item.img}
                            cols={item.cols || 1}
                            rows={item.rows || 1}
                            component={motion.div}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <img
                                {...srcset(item.img, 200, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                                style={{
                                    borderRadius: '12px',
                                    transition: 'transform 0.4s',
                                    cursor: 'pointer'
                                }}
                                className="gallery-img"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Container>
        </Box>
    );
};

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default Gallery;
