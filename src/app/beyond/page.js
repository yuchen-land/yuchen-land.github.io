"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { hobbies, hobbyActivities, volunteerService, brandVentures } from "@/data/hobbiesData";
import { useState } from "react";

export default function BeyondPage() {
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
                <div className="text-center mb-16 animate-fade-in">
                    <p className="text-sm font-medium text-rose-500/80 tracking-widest uppercase mb-4">
                        Beyond
                    </p>
                    <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">
                        Beyond Code
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Founder, creator, and lifelong learner. Discover my brand ventures, creative hobbies, and community involvement.
                    </p>
                </div>

                {/* Brand Ventures Section */}
                <section className="mb-20 animate-fade-in">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                        Founder & Brand Ventures
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {brandVentures.map((brand) => (
                            <div
                                key={brand.id}
                                className="group backdrop-blur-sm bg-white/50 border border-white/60 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                {/* Brand Logo */}
                                <div className="relative h-40 bg-gradient-to-br from-rose-50 to-pink-50 overflow-hidden">
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
                                    <div className={`absolute top-3 left-3 px-2.5 py-1 backdrop-blur-sm rounded-lg text-xs font-medium ${brand.status === 'Active'
                                        ? 'bg-emerald-50/90 text-emerald-600'
                                        : 'bg-amber-50/90 text-amber-600'
                                        }`}>
                                        {brand.status}
                                    </div>
                                    {/* Type Badge */}
                                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-rose-50/90 backdrop-blur-sm rounded-lg text-xs font-medium text-rose-500">
                                        {brand.type}
                                    </div>
                                </div>

                                {/* Brand Content */}
                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-medium text-gray-900">{brand.name}</h3>
                                        <span className="text-xs text-rose-400 font-medium">{brand.role}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                        {brand.description}
                                    </p>

                                    {/* Action Buttons */}
                                    <div className="flex items-center gap-2 flex-wrap">
                                        {brand.url && brand.url !== "#" && (
                                            <a
                                                href={brand.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-50/80 hover:bg-rose-100/80 text-rose-500 rounded-lg text-xs font-medium transition-colors"
                                            >
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                Visit
                                            </a>
                                        )}

                                        {brand.social?.instagram && (
                                            <a
                                                href={brand.social.instagram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-pink-50/80 hover:bg-pink-100/80 text-pink-500 rounded-lg text-xs font-medium transition-colors"
                                            >
                                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                </svg>
                                                IG
                                            </a>
                                        )}

                                        {brand.social?.facebook && (
                                            <a
                                                href={brand.social.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50/80 hover:bg-blue-100/80 text-blue-500 rounded-lg text-xs font-medium transition-colors"
                                            >
                                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                </svg>
                                                FB
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Activities & Events Section */}
                <section className="mb-20 animate-fade-in">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                        Activities & Events
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {hobbyActivities.map((activity) => (
                            <div
                                key={activity.id}
                                className="group backdrop-blur-sm bg-white/50 border border-white/60 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                {/* Activity Image */}
                                <div className="relative h-40 bg-gradient-to-br from-rose-50 to-pink-50 overflow-hidden">
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
                                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-rose-50/90 backdrop-blur-sm rounded-lg text-xs font-medium text-rose-500">
                                        {activity.type}
                                    </div>
                                </div>

                                {/* Activity Content */}
                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-medium text-gray-900 text-sm">{activity.title}</h3>
                                        <span className="text-xs text-gray-400 flex-shrink-0 ml-2">{activity.date}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed mb-3">
                                        {activity.description}
                                    </p>
                                    {activity.tags && (
                                        <div className="flex flex-wrap gap-1.5">
                                            {activity.tags.map((tag, i) => (
                                                <span key={i} className="text-xs px-2 py-0.5 bg-rose-50/80 text-rose-400 rounded-md">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Volunteer Service Section */}
                <section className="mb-20 animate-fade-in">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                        Volunteer Service
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {volunteerService.map((service) => (
                            <div
                                key={service.id}
                                className="group backdrop-blur-sm bg-white/50 border border-white/60 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                {/* Service Image */}
                                <div className="relative h-40 bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden">
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
                                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-emerald-50/90 backdrop-blur-sm rounded-lg text-xs font-medium text-emerald-600">
                                        {service.role}
                                    </div>
                                </div>

                                {/* Service Content */}
                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-medium text-gray-900 text-sm md:text-base">{service.organization}</h3>
                                        <span className="text-xs text-gray-400">{service.period}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Hobbies Sections (Art, Pastry, Photography) */}
                <div className="space-y-20 animate-fade-in">
                    {hobbies.map((hobby) => (
                        <section key={hobby.id}>
                            {/* Section Header */}
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                {hobby.title}
                            </h2>

                            {/* Description */}
                            <p className="text-gray-500 max-w-2xl leading-relaxed mb-6">
                                {hobby.description}
                            </p>

                            {/* Gallery Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {hobby.gallery.map((image) => (
                                    <div
                                        key={image.id}
                                        onClick={() => openLightbox(image)}
                                        className="group relative aspect-square rounded-xl overflow-hidden backdrop-blur-sm bg-white/50 border border-white/60 shadow-sm cursor-pointer hover:shadow-md transition-all duration-300"
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.innerHTML = `
                                                    <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-50 text-rose-300">
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

                {/* Footer */}
                <footer className="mt-24 pt-8 border-t border-rose-100/50">
                    <p className="text-center text-gray-400 text-xs">
                        © 2026 Yu-Chen Liu
                    </p>
                </footer>
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
                        <div className="relative w-full aspect-square md:aspect-video rounded-xl overflow-hidden bg-white/10">
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
