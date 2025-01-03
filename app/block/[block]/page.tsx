import Container from '@/ui/components/container/container';
import SearchBar from '@/ui/components/searchbar/searchbar';
import BlockDetailsContainer from '@/ui/shared/blocks/details/container';
import Header from '@/ui/shared/header/header';
import React from 'react';

export default async function Page(props: {
    params: Promise<{ block: string }>;
}) {
    const block = (await props.params).block;
    return (
        <>
            <Header />

            <Container>
                <SearchBar />

                <BlockDetailsContainer block={block} />
            </Container>
        </>
    );
}
