import React, { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=400&h=400&fit=crop&auto=format',
    alt: 'Waterfall',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=400&h=400&fit=crop&auto=format',
    alt: 'Boats on water',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&auto=format',
    alt: 'Woman in field',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=400&fit=crop&auto=format',
    alt: 'Cathedral',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=400&h=400&fit=crop&auto=format',
    alt: 'Mushroom',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?w=400&h=400&fit=crop&auto=format',
    alt: 'Group of friends',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1509460913899-515f1df34fea?w=400&h=400&fit=crop&auto=format',
    alt: 'Man with hat',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=400&fit=crop&auto=format',
    alt: 'Photographer',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop&auto=format',
    alt: 'Couple in water',
  },
];

const VIDEOS = [
  {
    id: 1,
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumb: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop&auto=format',
    title: 'Calle Ocho Walk',
    duration: '2:34',
  },
  {
    id: 2,
    src: 'https://www.w3schools.com/html/movie.mp4',
    thumb: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=300&fit=crop&auto=format',
    title: 'Little Havana Tour',
    duration: '4:12',
  },
  {
    id: 3,
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumb: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop&auto=format',
    title: 'Wynwood Art Night',
    duration: '1:57',
  },
];

const MemoryVault = () => {
  const [activeTab, setActiveTab] = useState('images');
  const [selected, setSelected] = useState(new Set());
  const [playingVideo, setPlayingVideo] = useState(null);
  const navigate = useNavigate();

  const toggleSelect = (id) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ── Header ── */}
      <div className="px-4 pt-6 pb-2">
        <button
          onClick={() => navigate(-1)}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors mb-4"
        >
          <ArrowLeft size={20} className="text-gray-800" />
        </button>

        <h1 className="text-xl font-bold text-gray-900 text-center">Memory Vault</h1>
        <p className="text-sm text-gray-400 text-center mt-1">
          Manage your tour reservations and view booking history
        </p>
      </div>

      {/* ── Tabs ── */}
      <div className="flex border-b border-gray-200 mx-4 mt-4">
        {['images', 'video'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2.5 text-sm font-medium capitalize transition-colors ${
              activeTab === tab
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-400'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* ── Content ── */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-28">

        {/* Images Tab */}
        {activeTab === 'images' && (
          <div className="grid grid-cols-3 gap-2">
            {IMAGES.map((img) => {
              const isSelected = selected.has(img.id);
              return (
                <button
                  key={img.id}
                  onClick={() => toggleSelect(img.id)}
                  className="relative aspect-square rounded-xl overflow-hidden focus:outline-none"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Dim overlay when selected */}
                  {isSelected && (
                    <div className="absolute inset-0 bg-orange-500/30" />
                  )}
                  {/* Checkmark badge */}
                  {isSelected && (
                    <div className="absolute top-1.5 right-1.5 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center shadow">
                      <Check size={11} className="text-white" strokeWidth={3} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Video Tab */}
        {activeTab === 'video' && (
          <div className="flex flex-col gap-4">
            {VIDEOS.map((vid) => (
              <div key={vid.id} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                {playingVideo === vid.id ? (
                  <video
                    src={vid.src}
                    className="w-full h-48 object-cover bg-black"
                    autoPlay
                    controls
                    playsInline
                  />
                ) : (
                  <button
                    onClick={() => setPlayingVideo(vid.id)}
                    className="relative w-full h-48 block"
                  >
                    <img
                      src={vid.thumb}
                      alt={vid.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#f97316">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </div>
                    </div>
                    {/* Duration badge */}
                    <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-md font-mono">
                      {vid.duration}
                    </div>
                  </button>
                )}
                <div className="px-3 py-2 bg-white">
                  <p className="text-sm font-semibold text-gray-800">{vid.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Save Button (fixed bottom) ── */}
      <div className="fixed bottom-0 inset-x-0 px-6 py-4 bg-white border-t border-gray-100">
        <button className="w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] transition-all text-white font-semibold py-3.5 rounded-full text-base shadow-lg shadow-orange-200">
          Save
        </button>
      </div>
    </div>
  );
};

export default MemoryVault;