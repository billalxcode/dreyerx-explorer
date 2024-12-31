import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Provider from './provider';

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
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
    themeColor: '#000000',
    openGraph: {
        title: 'DreyerX Explorer',
        description:
            'Explore the world of DreyerX with our comprehensive explorer.',
        url: 'https://dreyerx-explorer.com',
        type: 'website',
        locale: 'en_US',
        siteName: 'DreyerX Explorer',
        images: [
            {
                url: 'https://dreyerx-explorer.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'DreyerX Explorer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@dreyerx',
        creator: '@dreyerx',
        title: 'DreyerX Explorer',
        description:
            'Explore the world of DreyerX with our comprehensive explorer.',
        images: ['https://dreyerx-explorer.com/twitter-image.jpg'],
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
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
