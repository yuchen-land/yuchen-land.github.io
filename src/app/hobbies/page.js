"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { hobbies, hobbyActivities, volunteerService, brandVentures } from "@/data/hobbiesData";
import { useState } from "react";

export default function HobbiesPage() {
    const [lightboxImage, setLightboxImage] = useState(null);

    const openLightbox = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 relative overflow-hidden">
            <Navbar />

            {/* Background Orbs */}
            <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-gradient-to-br from-pink-200/30 via-rose-200/30 to-pink-300/30 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-gradient-to-br from-orange-200/30 via-pink-200/30 to-rose-300/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

            {/* Main Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 pt-32">
                {/* Page Header */}
                <div className="text-center mb-16 animate-fade-in-down">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 text-transparent bg-clip-text tracking-tight mb-4 font-[family-name:var(--font-outfit)]">
                        Beyond Code
                    </h1>
                    <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mb-6"></div>
                    <p className="text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Founder, creator, and lifelong learner. Discover my brand ventures, creative hobbies, and community involvement.
                    </p>
                </div>

                {/* Brand Ventures Section - First */}
                <section className="mb-20 animate-fade-in-up">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-3xl">🚀</span>
                        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 font-[family-name:var(--font-outfit)]">
                            Founder & Brand Ventures
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {brandVentures.map((brand) => (
                            <a
                                key={brand.id}
                                href={brand.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white/70 backdrop-blur-sm border border-pink-100/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                            >
                                {/* Brand Logo */}
                                <div className="relative h-40 bg-gradient-to-br from-violet-100 to-purple-100 overflow-hidden">
                                    <Image
                                        src={brand.logo}
                                        alt={brand.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                    {/* Status Badge */}
                                    <div className={`absolute top-3 left-3 px-3 py-1 backdrop-blur-sm rounded-full text-xs font-medium ${brand.status === 'Active'
                                        ? 'bg-green-100/90 text-green-600'
                                        : 'bg-amber-100/90 text-amber-600'
                                        }`}>
                                        {brand.status}
                                    </div>
                                    {/* Type Badge */}
                                    <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-violet-600">
                                        {brand.type}
                                    </div>
                                </div>

                                {/* Brand Content */}
                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-medium text-gray-800">{brand.name}</h3>
                                        <span className="text-xs text-violet-500 font-medium">{brand.role}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed font-light">
                                        {brand.description}
                                    </p>
                                    {/* External Link Icon */}
                                    <div className="mt-3 flex items-center text-xs text-violet-400 group-hover:text-violet-600 transition-colors">
                                        <span>Visit</span>
                                        <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Hobbies Sections */}
                <div className="space-y-20 animate-fade-in-up">
                    {hobbies.map((hobby) => (
                        <section key={hobby.id} className="space-y-6">
                            {/* Section Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl">{hobby.icon}</span>
                                <h2 className="text-2xl md:text-3xl font-medium text-gray-800 font-[family-name:var(--font-outfit)]">
                                    {hobby.title}
                                </h2>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 max-w-2xl leading-relaxed font-light">
                                {hobby.description}
                            </p>

                            {/* Gallery Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {hobby.gallery.map((image) => (
                                    <div
                                        key={image.id}
                                        onClick={() => openLightbox(image)}
                                        className="group relative aspect-square rounded-2xl overflow-hidden bg-white/50 border border-pink-100/50 shadow-sm cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300"
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-100 to-pink-100 text-rose-400">
                            <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                          </div>
                        `;
                                            }}
                                        />
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                            <svg
                                                className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Activities & Events Section */}
                <section className="mt-24 animate-fade-in-up">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-3xl">📅</span>
                        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 font-[family-name:var(--font-outfit)]">
                            Activities & Events
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {hobbyActivities.map((activity) => (
                            <div
                                key={activity.id}
                                className="group bg-white/70 backdrop-blur-sm border border-pink-100/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                {/* Activity Image */}
                                <div className="relative h-40 bg-gradient-to-br from-rose-100 to-pink-100 overflow-hidden">
                                    <Image
                                        src={activity.image}
                                        alt={activity.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                    {/* Type Badge */}
                                    <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-rose-600">
                                        {activity.type}
                                    </div>
                                </div>

                                {/* Activity Content */}
                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-medium text-gray-800">{activity.title}</h3>
                                        <span className="text-xs text-gray-400">{activity.date}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed font-light">
                                        {activity.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Volunteer Service Section */}
                <section className="mt-24 animate-fade-in-up">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-3xl">🤝</span>
                        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 font-[family-name:var(--font-outfit)]">
                            Volunteer Service
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {volunteerService.map((service) => (
                            <div
                                key={service.id}
                                className="group bg-white/70 backdrop-blur-sm border border-pink-100/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                {/* Service Image */}
                                <div className="relative h-40 bg-gradient-to-br from-emerald-100 to-teal-100 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.organization}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                    {/* Role Badge */}
                                    <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-emerald-600">
                                        {service.role}
                                    </div>
                                </div>

                                {/* Service Content */}
                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-medium text-gray-800 text-sm md:text-base">{service.organization}</h3>
                                        <span className="text-xs text-gray-400">{service.period}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed font-light">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <div className="mt-24 text-center">
                    <div className="w-32 h-0.5 bg-gradient-to-r from-pink-300 via-rose-300 to-orange-300 mx-auto rounded-full opacity-50 mb-4"></div>
                    <p className="text-rose-400/60 text-xs tracking-[0.25em] font-light">
                        BUILDING · CREATING · GIVING BACK
                    </p>
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <div className="relative max-w-4xl max-h-[90vh] w-full">
                        <button
                            onClick={closeLightbox}
                            className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="relative w-full aspect-square md:aspect-video rounded-2xl overflow-hidden bg-white/10">
                            <Image
                                src={lightboxImage.src}
                                alt={lightboxImage.alt}
                                fill
                                className="object-contain"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
