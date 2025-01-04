import Container from '@/ui/components/container/container';
import SearchBar from '@/ui/components/searchbar/searchbar';
import Header from '@/ui/shared/header/header';
import TransactionsContainer from '@/ui/shared/transactions/container';
import React from 'react';

export default function Page() {
    return (
        <>
            <Header />

            <Container>
                <SearchBar />

                <TransactionsContainer />
            </Container>
        </>
    );
}
