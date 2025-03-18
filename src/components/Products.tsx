
import React from 'react';
import AnimatedElement from './ui/AnimatedElement';
import { cn } from '@/lib/utils';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "SkyView Pro X",
    description: "Professional-grade aerial photography drone with 8K camera and extended flight time.",
    price: "$1,499",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    features: ["8K Camera", "45-min flight time", "10km range", "Obstacle avoidance"]
  },
  {
    id: 2,
    name: "NanoExplorer",
    description: "Compact and portable drone perfect for beginners and travel enthusiasts.",
    price: "$499",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    features: ["4K Camera", "25-min flight time", "5km range", "Foldable design"]
  },
  {
    id: 3,
    name: "AeroMap Enterprise",
    description: "Industrial mapping and surveying drone with precision sensors and analytics software.",
    price: "$2,999",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    features: ["LiDAR sensor", "60-min flight time", "15km range", "Real-time 3D mapping"]
  }
];

const Products = () => {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="container mx-auto">
        <AnimatedElement animation="animate-fade-in" threshold={0.1}>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-50 text-primary rounded-full text-sm font-medium mb-3">
              Our Products
            </span>
            <h2 className="section-title">Precision Crafted Drones</h2>
            <p className="section-subtitle">
              Discover our lineup of innovative drones designed for various applications, 
              from professional cinematography to industrial surveying.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <AnimatedElement
              key={product.id}
              animation="animate-scale-in"
              delay={200 * index}
              className="drone-card group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <span className="font-medium text-primary">{product.price}</span>
                </div>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-secondary rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="w-full rounded-lg bg-secondary text-sm font-medium py-2 transition-colors hover:bg-secondary/70 focus:outline-none focus:ring-2 focus:ring-primary/50">
                  Learn More
                </button>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
