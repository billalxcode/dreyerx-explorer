import Container from '@/ui/components/container/container';
import SearchBar from '@/ui/components/searchbar/searchbar';
import AddressContainer from '@/ui/shared/address/container';
import AddressTransactions from '@/ui/shared/address/transactions';
import Footer from '@/ui/shared/footer/footer';
import Header from '@/ui/shared/header/header';
import React from 'react';

export default async function Page(props: {
    params: Promise<{ address: string }>;
}) {
    const address = (await props.params).address;
    return (
        <>
            <Header />

            <Container>
                <SearchBar />

                <AddressContainer address={address} />

                <AddressTransactions address={address} />
            </Container>

            <Footer />
        </>
    );
}
