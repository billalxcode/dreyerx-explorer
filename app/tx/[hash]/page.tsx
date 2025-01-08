import Container from '@/ui/components/container/container';
import SearchBar from '@/ui/components/searchbar/searchbar';
import Footer from '@/ui/shared/footer/footer';
import Header from '@/ui/shared/header/header';
import TransactionDetailsContainer from '@/ui/shared/transactions/details/container';
import React from 'react';

export default async function Page(props: {
    params: Promise<{ hash: string }>;
}) {
    const transaction_hash = (await props.params).hash;
    return (
        <>
            <Header />

            <Container>
                <SearchBar />

                <TransactionDetailsContainer transaction={transaction_hash} />
            </Container>

            <Footer />
        </>
    );
}
