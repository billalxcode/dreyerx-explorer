'use client';
import Container from '@/ui/components/container/container';
import SearchBar from '@/ui/components/searchbar/searchbar';
import Footer from '@/ui/shared/footer/footer';
import Header from '@/ui/shared/header/header';
import HeroSection from '@/ui/shared/home/hero';
import HomeWrapper from '@/ui/shared/home/wrapper';

export default function Home() {
    return (
        <>
            <Header />

            <Container>
                <SearchBar />

                <HeroSection />

                <HomeWrapper />
            </Container>

            <Footer />
        </>
    );
}
