"use client";
import React, { useState, useMemo } from 'react';
import { Calendar, ChevronRight, Filter, ChevronDown } from 'lucide-react';

const filters = [
    'All',
    'Product Launches',
    'Events',
    'Technology',
    'Press Releases',
    'Community'
];

const newsData = [
    {
        title: 'Revolutionary Electric Hypercar Unveiled',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula nunc malesuada vitae, varius tortor at, sed, convallis magna.',
        date: '18.07.2024',
        category: 'Product Launches',
        image: '/api/placeholder/400/250',
        bgColor: 'from-red-500/20 to-orange-500/20'
    },
    {
        title: 'Next-Gen SUV Technology Preview',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula nunc malesuada vitae, varius tortor at, sed, convallis magna.',
        date: '18.07.2024',
        category: 'Technology',
        image: '/api/placeholder/400/250',
        bgColor: 'from-blue-500/20 to-cyan-500/20'
    },
    {
        title: 'High-Performance Sports Car Launch',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula nunc malesuada vitae, varius tortor at, sed, convallis magna.',
        date: '18.07.2024',
        category: 'Product Launches',
        image: '/api/placeholder/400/250',
        bgColor: 'from-slate-500/20 to-gray-500/20'
    },
    {
        title: 'Auto Show Exhibition Highlights',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula nunc malesuada vitae, varius tortor at, sed, convallis magna.',
        date: '18.07.2024',
        category: 'Events',
        image: '/api/placeholder/400/250',
        bgColor: 'from-emerald-500/20 to-teal-500/20'
    },
    {
        title: 'Desert Adventure Vehicle Reveal',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula nunc malesuada vitae, varius tortor at, sed, convallis magna.',
        date: '18.07.2024',
        category: 'Product Launches',
        image: '/api/placeholder/400/250',
        bgColor: 'from-amber-500/20 to-yellow-500/20'
    },
    {
        title: 'Premium Luxury Coupe Announcement',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula nunc malesuada vitae, varius tortor at, sed, convallis magna.',
        date: '18.07.2024',
        category: 'Press Releases',
        image: '/api/placeholder/400/250',
        bgColor: 'from-purple-500/20 to-violet-500/20'
    }
];

const FilterButton = ({ activeFilter, setActiveFilter }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleFilterSelect = (filter) => {
        setActiveFilter(filter);
        setIsOpen(false);
    };

    return (
        <div className="relative md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm w-full justify-between"
            >
                <div className="flex items-center gap-2">
                    <Filter size={16} />
                    <span className="font-medium text-gray-700">{activeFilter}</span>
                </div>
                <ChevronDown
                    size={16}
                    className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => handleFilterSelect(filter)}
                            className={`w-full text-left px-4 py-3 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors ${activeFilter === filter ? 'bg-gray-100 text-blue-600 font-medium' : 'text-gray-700'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

const NewsCard = ({ item }) => {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className={`relative h-64 bg-gradient-to-br ${item.bgColor} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                        <Calendar size={16} />
                        <span>{item.date}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        {item.category}
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                </p>
                <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                    Read More
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
            </div>
        </div>
    );
};

export default function NewSection() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredNews = useMemo(() => {
        if (activeFilter === 'All') return newsData;
        return newsData.filter(item => item.category === activeFilter);
    }, [activeFilter]);

    return (
        <section className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        Discover the latest innovations,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            launches & stories
                        </span>
                    </h1>
                </div>

                {/* Mobile Filter Button */}
                <div className="mb-8">
                    <FilterButton activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                </div>

                {/* Desktop Filter Tabs */}
                <div className="hidden md:flex flex-wrap justify-center gap-2 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${activeFilter === filter
                                    ? 'bg-gray-900 text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredNews.map((item, index) => (
                        <NewsCard key={index} item={item} />
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center">
                    <button className="px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Load More
                    </button>
                </div>
            </div>

            {/* Background decoration */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
}