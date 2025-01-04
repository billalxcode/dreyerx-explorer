import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface PopoverProps {
    content: ReactNode;
    children: ReactNode;
}

export default function Popover({ content, children }: PopoverProps) {
    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            popoverRef.current &&
            !popoverRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={popoverRef}>
            <div onClick={() => setIsOpen(!isOpen)}>{children}</div>
            {isOpen && (
                <div className="absolute bg-white shadow-lg rounded p-4 mt-2">
                    {content}
                </div>
            )}
        </div>
    );
}
