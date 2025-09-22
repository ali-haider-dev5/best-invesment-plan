'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Combined Card data and Component
const FocusCards = ({ cards }: { cards: { title: string; src: string }[] }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const CardItem = ({
    card,
    index,
    hovered,
    onHover,
  }: {
    card: { title: string; src: string };
    index: number;
    hovered: number | null;
    onHover: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const isActive = hovered === index;
    const isDimmed = hovered !== null && !isActive;

    return (
      <div
        onMouseEnter={() => onHover(index)}
        onMouseLeave={() => onHover(null)}
        className={cn(
          'rounded-lg relative p-4 dark:bg-[#1f2938] bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out',
          isDimmed && 'blur-sm scale-[0.98]'
        )}
      >
        <Image
          src={card.src}
          alt={card.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover absolute inset-0"
          priority={index < 2}
        />
        <div
          className={cn(
            'absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300',
            isActive ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-[#f3a84f] bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='dark:bg-[#1a2333]'>
    <div className="grid  grid-cols-1 p-4 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <CardItem
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          onHover={setHovered}
        />
      ))}
    </div>
    </div>
  );
};

// Example card array to be used within the component
export const cards = [
  { title: 'Forest Adventure', src: 'https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Valley of life', src: 'https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=1600&auto=format&fit=crop' },
  { title: 'The First Rule', src: 'https://assets.aceternity.com/the-first-rule.png' },
  { title: 'Camping is for pros', src: 'https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop' },
  { title: 'The road not taken', src: 'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop' },
  { title: 'Sala behta hi jayega', src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop' },
];

export default FocusCards;
