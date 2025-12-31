"use client";

import { useState, useEffect } from "react";

export default function TypewriterText({
    texts = [],
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseTime = 2000,
    className = ""
}) {
    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isWaiting, setIsWaiting] = useState(false);

    useEffect(() => {
        if (texts.length === 0) return;

        const currentFullText = texts[textIndex];

        if (isWaiting) {
            const waitTimer = setTimeout(() => {
                setIsWaiting(false);
                setIsDeleting(true);
            }, pauseTime);
            return () => clearTimeout(waitTimer);
        }

        if (isDeleting) {
            if (displayText === "") {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
            } else {
                const deleteTimer = setTimeout(() => {
                    setDisplayText((prev) => prev.slice(0, -1));
                }, deletingSpeed);
                return () => clearTimeout(deleteTimer);
            }
        } else {
            if (displayText === currentFullText) {
                setIsWaiting(true);
            } else {
                const typeTimer = setTimeout(() => {
                    setDisplayText(currentFullText.slice(0, displayText.length + 1));
                }, typingSpeed);
                return () => clearTimeout(typeTimer);
            }
        }
    }, [displayText, textIndex, isDeleting, isWaiting, texts, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <span className={className}>
            {displayText}
            <span className="animate-blink text-rose-400">|</span>
        </span>
    );
}
