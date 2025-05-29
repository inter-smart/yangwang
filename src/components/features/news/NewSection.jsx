"use client";
import React, { useState, useMemo } from 'react';
import { Heading } from "@/components/layout/Heading";
import { Filter, ChevronDown } from 'lucide-react';
import { LinkButton } from "@/components/layout/Button";
import NewsCard from "./NewsCard";

const filters = [
    'All',
    'Product Launches',
    'Events',
    'Technology',
    'Press Releases',
    'Community'
];
const newsInfo = [
    {
        title: 'Lorem ipsum dolor sit amet con',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula nunc malesuada vitae, varius tortor at, sed, convallis magna.',
        date: '18.07.2024',
        category: 'Product Launches',
        image: "/images/news-1.jpg"
    },
    {
        title: 'Lorem ipsum dolor sit amet con',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula nunc malesuada vitae, varius tortor at, sed, convallis magna.',
        date: '18.07.2024',
        category: 'Technology',
        image: "/images/news-2.jpg"
    },
    {
        title: 'Lorem ipsum dolor sit amet con',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula nunc malesuada vitae, varius tortor at, sed, convallis magna.',
        date: '18.07.2024',
        category: 'Product Launches',
        image: "/images/news-3.jpg"
    },
    {
        title: 'Lorem ipsum dolor sit amet con',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula nunc malesuada vitae, varius tortor at, sed, convallis magna.',
        date: '18.07.2024',
        category: 'Events',
        image: "/images/news-4.jpg"
    },
    {
        title: 'Lorem ipsum dolor sit amet con',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula nunc malesuada vitae, varius tortor at, sed, convallis magna.',
        date: '18.07.2024',
        category: 'Product Launches',
        image: "/images/news-5.jpg"
    },
    {
        title: 'Lorem ipsum dolor sit amet con',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula nunc malesuada vitae, varius tortor at, sed, convallis magna.',
        date: '18.07.2024',
        category: 'Press Releases',
        image: "/images/news-6.jpg"
    }
];

const FilterButton = ({ activeFilter, setActiveFilter }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleFilterSelect = (filter) => {
        setActiveFilter(filter);
        setIsOpen(false);
    };
    return (
        <div className="sm:min-w-[240px] min-w-full ml-auto relative md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full h-auto gap-2 p-[10px] bg-black flex items-center justify-between"
            >
                <div className="gap-2 flex items-center">
                    <Filter size={14} 
                    className='text-white'
                    />
                    <span className="text-[12px] font-medium text-white">{activeFilter}</span>
                </div>
                <ChevronDown
                    size={16}
                    className={`text-white transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            {isOpen && (
                <div className="absolute z-1 top-full left-0 right-0 mt-2 bg-white border-1 border-black">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => handleFilterSelect(filter)}
                            className={`text-[12px] font-medium text-left w-full p-[10px] hover:bg-gray-50 transition-colors ${activeFilter === filter ? 'bg-[#5949A7] text-white font-bold' : ''
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

export default function NewSection() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredNews = useMemo(() => {
        if (activeFilter === 'All') return newsInfo;
        return newsInfo.filter(item => item.category === activeFilter);
    }, [activeFilter]);
    return (
        <section className="w-full h-auto block 3xl:py-[100px_145px] 2xl:py-[80px_110px] xl:py-[60px_90px] md:py-[50px_60px] py-[40px_40px]">
            <div className="container">
                <div className="3xl:mb-[75px] xl:mb-[50px] md:mb-[30px] mb-[20px] flex flex-wrap items-center">
                    <Heading
                        size="heading3"
                        as="h3"
                        className="text-black w-[70%] max-sm:mb-[15px]"
                    >
                        Discover the latest innovations,
                        launches & stories
                    </Heading>
                    {/* Desktop Filter Tabs */}
                    <div className="hidden 3xl:gap-[40px] xl:gap-[30px] md:gap-[20px] ml-auto md:flex flex-wrap">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] lg:text-[12px] text-[12px] font-normal leading-normal border-none cursor-pointer transition-all duration-300 hover:text-[#5949A7] ${activeFilter === filter ? 'text-[#5949A7] underline' : 'text-black'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                    {/* Mobile Filter Button */}
                    <FilterButton activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 3xl:gap-[60px] 2xl:gap-[50px] xl:gap-[35px] md:gap-[20px] gap-[15px] 3xl:mb-[100px] xl:mb-[70px] md:mb-[50px] mb-[35px]">
                    {filteredNews.map((item, index) => (
                        <div className="w-full h-auto block">
                            <NewsCard key={index} item={item} />
                        </div>
                    ))}
                </div>
                <div className='w-fit m-auto'>
                    <LinkButton
                        href="#"
                        aria-label="load More"
                        className="min-w-[70px] sm:min-w-[120px] xl:min-w-[140px] 3xl:min-w-[145px] m-auto hover:!bg-[#F1D1A8]"
                        color="black"
                    >
                        Load More
                    </LinkButton>
                </div>
            </div>
        </section>
    );
}