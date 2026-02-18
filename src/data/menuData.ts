export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: string;
    category: 'starters' | 'mains' | 'drinks' | 'specials';
    image: string;
    tag?: string;
}

export const MENU_ITEMS: MenuItem[] = [
    // STARTERS
    {
        id: 's1',
        name: 'Truffle Mushroom Galouti',
        description: 'Melt-in-mouth mushroom kebabs infused with white truffle oil, served on saffron mini parathas.',
        price: '₹545',
        category: 'starters',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
        tag: 'Bestseller'
    },
    {
        id: 's2',
        name: 'Hamburg Spiced Lamb Sliders',
        description: 'Slow-cooked pulled lamb with German mustard and Indian spices, served in brioche buns.',
        price: '₹625',
        category: 'starters',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 's3',
        name: 'Wasabi Malai Prawns',
        description: 'Tiger prawns marinated in cream cheese and wasabi, chargrilled to perfection.',
        price: '₹745',
        category: 'starters',
        image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 's4',
        name: 'Beetroot & Goat Cheese Tikki',
        description: 'Crispy beetroot patties filled with molten goat cheese and walnuts.',
        price: '₹495',
        category: 'starters',
        image: 'https://images.unsplash.com/photo-1515516947383-c156db698487?auto=format&fit=crop&w=600&q=80',
        tag: 'Vegetarian'
    },

    // MAINS
    {
        id: 'm1',
        name: 'Smoked Butter Chicken Roulade',
        description: 'Classic butter chicken reinvented as a roulade, served with burani raita and garlic naan.',
        price: '₹795',
        category: 'mains',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
        tag: 'Signature'
    },
    {
        id: 'm2',
        name: 'Hastinapur Royal Thali',
        description: 'A regal platter featuring dal makhani, paneer lababdar, seasonal veg, rice, and assorted breads.',
        price: '₹995',
        category: 'mains',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'm3',
        name: 'Grilled Salmon with Moilee Sauce',
        description: 'Norwegian salmon steak served with a coconut milk and turmeric Kerala-style sauce.',
        price: '₹1295',
        category: 'mains',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a7270028d?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'm4',
        name: 'Wild Mushroom Risotto',
        description: 'Arborio rice cooked with porcini mushrooms, parmesan crisp, and truffle oil drizzle.',
        price: '₹845',
        category: 'mains',
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=600&q=80'
    },

    // DRINKS
    {
        id: 'd1',
        name: 'The Golden Era',
        description: 'Gold-infused whiskey, homemade bitters, orange zest, and smoke.',
        price: '₹895',
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=600&q=80',
        tag: 'Must Try'
    },
    {
        id: 'd2',
        name: 'Hauz Khas Sour',
        description: 'Gin, elderflower syrup, egg white, and fresh lime juice.',
        price: '₹745',
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'd3',
        name: 'Hastinapur Elixir',
        description: 'Vodka, pomegranate juice, rose water, and sparkling wine.',
        price: '₹795',
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'd4',
        name: 'Midnight Espresso',
        description: 'Dark rum, espresso shot, kahlua, and coffee beans.',
        price: '₹695',
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1556391910-5b23d9a1036f?auto=format&fit=crop&w=600&q=80'
    },

    // SPECIALS
    {
        id: 'sp1',
        name: 'Saffron Cheesecake',
        description: 'Creamy cheesecake infused with Kashmiri saffron, served with pistachio crumble.',
        price: '₹495',
        category: 'specials',
        image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'sp2',
        name: 'Dark Chocolate Fondant',
        description: 'Molten center chocolate cake served with vanilla bean ice cream.',
        price: '₹545',
        category: 'specials',
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476d?auto=format&fit=crop&w=600&q=80',
        tag: 'Sweet End'
    }
];
