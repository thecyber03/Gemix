import React from 'react';

// List of image URLs and text
const imageData = [
  { img: '/error.jpg', text: 'Image 1' },
  { img: '/hero.jpg', text: 'Image 2' },
  { img: '/hero1.jpg', text: 'Image 3' },
  { img: '/hero2.jpg', text: 'Image 4' },
  { img: '/error.jpg', text: 'Image 5' },
  { img: '/hero.jpg', text: 'Image 6' },
  { img: '/hero1.jpg', text: 'Image 7' },
];

export default function AboutPage() {
  return (
    <div className="p-1">
      <div className="flex flex-wrap gap-4 justify-center">
        {imageData.map((item, index) => (
          <div
            key={index}
            className="min-w-[400px] h-[200px] m-2 relative rounded shadow-md overflow-hidden flex items-center justify-center"
          >
            <img
              src={item.img}
              alt={item.text}
              className="absolute w-full h-full object-cover"
            />
            <div className="relative z-10 text-white text-3xl font-bold  px-4 py-2 rounded">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
