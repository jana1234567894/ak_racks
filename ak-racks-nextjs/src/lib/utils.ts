import { type ClassValue, clsx } from 'clsx';

// Utility function for combining class names
export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}

// Format phone number for display
export function formatPhone(phone: string): string {
    return phone.replace(/(\d{5})(\d{5})/, '$1 $2');
}

// Create WhatsApp link with pre-filled message
export function createWhatsAppLink(phone: string, message?: string): string {
    const baseUrl = `https://wa.me/${phone}`;
    if (message) {
        return `${baseUrl}?text=${encodeURIComponent(message)}`;
    }
    return baseUrl;
}

// Debounce function for scroll events
export function debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

// Check if reduced motion is preferred
export function prefersReducedMotion(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Check if device is low-end (rough estimation)
export function isLowEndDevice(): boolean {
    if (typeof navigator === 'undefined') return false;
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    return memory !== undefined && memory < 4;
}

// Check if mobile device
export function isMobileDevice(): boolean {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
}
