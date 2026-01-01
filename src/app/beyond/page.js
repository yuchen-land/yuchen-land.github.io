"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { hobbies, hobbyActivities, scholarships, brandVentures } from "@/data/hobbiesData";
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

                {/* Scholarships Section */}
                <section className="mb-20 animate-fade-in">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                        Scholarships & Awards
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {scholarships.map((scholarship) => (
                            <div
                                key={scholarship.id}
                                className="group backdrop-blur-sm bg-white/50 border border-white/60 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                {/* Header with gradient */}
                                <div className="relative h-20 bg-gradient-to-br from-amber-50 to-rose-50 flex items-center justify-center">
                                    {/* Trophy/Academic Icon */}
                                    <div className="text-rose-300/60">
                                        {scholarship.icon === "trophy" ? (
                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228M7.73 9.728a6.726 6.726 0 002.748 1.35m3.044 0a6.726 6.726 0 002.748-1.35m-8.592 0a6.966 6.966 0 00.52 3.172M16.27 9.728a6.966 6.966 0 01-.52 3.172" />
                                            </svg>
                                        ) : (
                                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                            </svg>
                                        )}
                                    </div>
                                    {/* Year Badges */}
                                    <div className="absolute top-3 right-3 flex gap-1">
                                        {scholarship.years.map((year) => (
                                            <span key={year} className="px-2 py-0.5 bg-white/80 backdrop-blur-sm rounded-md text-xs font-medium text-rose-500">
                                                {year}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <h3 className="font-medium text-gray-900 text-sm leading-tight">{scholarship.name}</h3>
                                        {scholarship.url && (
                                            <a
                                                href={scholarship.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-shrink-0 text-gray-300 hover:text-rose-400 transition-colors"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-400 mb-2">{scholarship.nameEn}</p>
                                    <p className="text-xs text-gray-500 leading-relaxed">{scholarship.organization}</p>
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
