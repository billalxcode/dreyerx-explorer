import Container from '@/ui/components/container/container';
import SearchBar from '@/ui/components/searchbar/searchbar';
import BlocksContainer from '@/ui/shared/blocks/container';
import Header from '@/ui/shared/header/header';
import React from 'react';

export default function Page() {
    return (
        <>
            <Header />

            <Container>
                <SearchBar />
                <BlocksContainer />
            </Container>
        </>
    );
}
