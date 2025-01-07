import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Provider from './provider';
import { Suspense } from 'react';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
    title: 'DreyerX Explorer',
    description:
        'Explore the world of DreyerX with our comprehensive explorer.',
    keywords: ['DreyerX', 'Explorer', 'Blockchain', 'Crypto'],
    authors: [
        {
            name: 'DreyerX Labs',
        },
    ],
    creator: 'DreyerX Labs',
    icons: {
        apple: '/assets/apple-touch-icon.png',
        icon: '/assets/favicon.ico',
    },
    robots: 'index, follow',
    openGraph: {
        title: 'DreyerX Explorer',
        description:
            'Explore the world of DreyerX with our comprehensive explorer.',
        url: 'https://dreyerx.com',
        emails: ['info@dreyerx.com'],
        type: 'website',
        locale: 'en_US',
        siteName: 'DreyerX Explorer',
        images: [
            {
                url: '/assets/og-image.png',
                width: 1920,
                height: 1080,
                alt: 'DreyerX Explorer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@dreyerxcoin',
        creator: '@dreyerxcoin',
        title: 'DreyerX Explorer',
        description:
            'Explore the world of DreyerX with our comprehensive explorer.',
        images: ['/assets/og-image.png'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.className} antialiased text-white/80`}>
                <Suspense>
                    <Provider>{children}</Provider>
                </Suspense>
            </body>
        </html>
    );
}
