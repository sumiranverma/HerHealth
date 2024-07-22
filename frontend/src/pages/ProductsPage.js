import React, { useState } from 'react';
import './ProductsPage.css';

const ProductsPage = () => {
    const [products] = useState([
        { id: 1, name: 'Tampons', description: 'Comfortable and discreet tampons for all flows.', price: 10, size: 'Regular', discount: 5, imageUrl: 'https://blog.uvihealth.in/content/images/2022/02/tampons.jpeg' },
        { id: 2, name: 'Menstrual Cups', description: 'Eco-friendly and reusable menstrual cups.', price: 20, size: 'Large', discount: 10, imageUrl: 'https://images.unsplash.com/photo-1607185073253-44296286cd82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuc3RydWFsJTIwY3Vwc3xlbnwwfHwwfHx8MA%3D%3D' },
        { id: 3, name: 'Sanitary Napkins', description: 'Soft and absorbent sanitary napkins.', price: 15, size: 'Medium', discount: 0, imageUrl: 'https://plus.unsplash.com/premium_photo-1664375262917-67b1515c569b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FuaXRhcnklMjBuYXBraW5zfGVufDB8fDB8fHww' },
        { id: 4, name: 'Panty Liners', description: 'Thin and comfortable panty liners.', price: 5, size: 'Small', discount: 2, imageUrl: 'https://images.unsplash.com/photo-1612882514971-2b37fe71d58c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFudHklMjBsaW5lcnxlbnwwfHwwfHx8MA%3D%3D' },
        { id: 5, name: 'Heating Pads', description: 'Reusable heating pads for cramps.', price: 25, size: 'Large', discount: 15, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoi4GRRHhl7SUTi94jCAxV42V6wllEYoQs9w&s' },
        { id: 6, name: 'Pain Relief Patches', description: 'Effective patches for menstrual pain relief.', price: 8, size: 'Regular', discount: 3, imageUrl: 'https://images.unsplash.com/photo-1567570671138-76c7e06caa3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlcmJhbCUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D' },
        { id: 7, name: 'Herbal Teas', description: 'Herbal teas to soothe menstrual discomfort.', price: 12, size: 'Medium', discount: 0, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqefj5brg39Xw7bI40zmroLUEqwHzIqcGhw&s' },
        { id: 8, name: 'Vitamin Supplements', description: 'Essential vitamins for menstrual health.', price: 18, size: 'Large', discount: 5, imageUrl: 'https://plus.unsplash.com/premium_photo-1664456804570-d4e28ada94e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ]);

    const [filter, setFilter] = useState('all');

    const filterProducts = (products, filter) => {
        if (filter === 'all') {
            return products;
        }
        return products.filter(product => product.size.toLowerCase() === filter);
    };

    return (
        <div className="products-container">
            <h2>Product Suggestions</h2>
            <div className="filter-options">
                <label>Filter by size: </label>
                <select onChange={(e) => setFilter(e.target.value.toLowerCase())}>
                    <option value="all">All</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="regular">Regular</option>
                    <option value="large">Large</option>
                </select>
            </div>
            <div className="products-grid">
                {filterProducts(products, filter).map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.imageUrl} alt={product.name} className="product-image" />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p><strong>Price:</strong> ${product.price} <small>({product.discount}% off)</small></p>
                        <button className="buy-now-button">Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
