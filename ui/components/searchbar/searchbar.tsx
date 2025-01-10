'use client';
import React, { FormEvent, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { CiSearch } from 'react-icons/ci';
import useSearch from '@/hooks/search/useSearch';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { shortenString } from '@/utils/strings';
import Image from 'next/image';
import { Router } from 'next/router';

export default function SearchBar() {
    const router = useRouter();
    const [query, setQuery] = useState<string>('');
    const { searchData, handleFetchSearch, isFirstBlock, resetData} = useSearch();

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleFetchSearch(query);
    };
    
    useEffect(() => {
        if (searchData && isFirstBlock() && searchData[0].url) {
            router.replace(searchData[0].url);
        }
        Router.events.on("routeChangeComplete", () => {
            setQuery('');
            resetData()
        })
    }, [searchData, isFirstBlock, router, resetData]);

    return (
        <div className="relative w-full">
            <form
                onSubmit={(e) => handleSearch(e)}
                className="flex w-full justify-center"
                autoComplete="off"
                autoCorrect="off"
            >
                <motion.div
                    whileHover={{
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                    }}
                    whileFocus={{
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                    }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.4,
                    }}
                    className="flex flex-row-reverse w-full lg:w-[500px] bg-container-default backdrop-blur-lg justify-between items-center bg-opacity-10 rounded-lg p-3 border border-border-normal"
                >
                    <input
                        type="text"
                        name="query"
                        id="query"
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                        className="w-full bg-transparent focus:outline-none text-white/50"
                        placeholder="Search txns, accounts, blocks, and more"
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck="false"
                    />

                    <CiSearch
                        size={'24px'}
                        className="justify-self-center mx-1"
                    />
                </motion.div>
            </form>

            {searchData && !isFirstBlock() ? (
                <div className="absolute w-full lg:w-[500px] mt-2 backdrop-blur-lg">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-3 bg-container-default backdrop-blur-lg p-3 rounded-lg border border-border-normal overflow-x-auto"
                    >
                        <div className="flex flex-col gap-4 mx-2">
                            <span className="text-white/50 text-sm font-semibold">
                                Results
                            </span>
                            <div className="flex flex-col gap-2 divide-y divide-border-normal">
                                {searchData.map((search, index) => (
                                    <Link
                                        href={search.url || (search.type == "address" ? search.address_url ?? "" : "")}
                                        key={index}
                                        className="text-white/50 text-sm p-2"
                                    >
                                        {search.type === 'address' ? (
                                            <div className="flex flex-col gap-2">
                                                <p className="font-semibold">
                                                    Address
                                                </p>
                                                <div className="flex flex-row gap-2 items-center">
                                                    <Image
                                                        src={
                                                            '/assets/svgs/avatars/1.svg'
                                                        }
                                                        className="rounded-full"
                                                        width={20}
                                                        height={20}
                                                        alt="avatar"
                                                    />
                                                    <p className="font-semibold">
                                                        {shortenString(
                                                            search.address ??
                                                                '',
                                                            10,
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        ) : search.type == 'transaction' ? (
                                            <div className="flex flex-col gap-2">
                                                <p className="font-semibold">
                                                    Transaction
                                                </p>

                                                <p>
                                                    {shortenString(
                                                        search.tx_hash ?? '',
                                                        10,
                                                    )}
                                                </p>
                                            </div>
                                        ) : null}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            ) : null}
        </div>
    );
}
