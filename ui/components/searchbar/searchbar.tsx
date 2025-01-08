'use client';
import React, { FormEvent, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { CiSearch } from 'react-icons/ci';
import useSearch from '@/hooks/search/useSearch';

export default function SearchBar() {
    const [query, setQuery] = useState<string>('');
    const { searchData, handleFetchSearch } = useSearch()

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        handleFetchSearch(query)
    }
    
    useEffect(() => {
        console.log(searchData)
    }, [searchData])

    return (
        <form
        onSubmit={(e) => handleSearch(e)}
        className="flex w-full justify-center"
        autoComplete='off'
        autoCorrect='off'
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

                <CiSearch size={'24px'} className="justify-self-center mx-1" />
            </motion.div>
        </form>
    );
}
