import { AddressTokens } from '@/hooks/address/useAddressTokens';
import { useDisclosure } from '@/hooks/useDisclosure';
import { weiToFormattedDecimals } from '@/utils/number';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiChevronDown } from 'react-icons/hi2';

export default function AddressTokensContainer(props: {
    addressTokens: AddressTokens[] | null;
}) {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <div className="w-full lg:w-[400px]">
            <div
                onClick={onToggle}
                className="p-2 cursor-pointer w-full lg:w-[400px] px-5 bg-container-default rounded-lg shadow-md border border-border-normal transition duration-300 hover:border-border-hover"
            >
                <div className="flex flex-row gap-5 items-center justify-between">
                    <p>{props.addressTokens?.length || 0} Tokens</p>

                    <HiChevronDown />
                </div>
            </div>
            {isOpen ? (
                <div className="absolute w-full lg:w-[400px] mt-2 backdrop-blur-lg max-w-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-3 bg-container-default backdrop-blur-lg p-3 rounded-lg border border-border-normal overflow-x-auto"
                    >
                        <div className="flex flex-col gap-4 mx-2">
                            <span className="text-white/50 text-sm font-semibold">
                                ERC-20
                            </span>
                            <div className="flex flex-col gap-2 divide-y divide-border-normal">
                                {props.addressTokens?.map(
                                    (tokenItem, index) => (
                                        <Link
                                            href={`/token/${tokenItem.token.address}`}
                                            key={index}
                                            className="text-white/50 text-sm p-2"
                                        >
                                            <div className="flex flex-row items-center gap-5">
                                                <Image
                                                    src={
                                                        '/assets/svgs/avatars/4.svg'
                                                    }
                                                    className="rounded-full"
                                                    width={20}
                                                    height={20}
                                                    alt="avatar"
                                                />
                                                <div className="flex flex-col gap-1">
                                                    <p className="font-semibold">
                                                        {tokenItem.token.name} (
                                                        {tokenItem.token.symbol}
                                                        )
                                                    </p>
                                                    <p className="font-semibold">
                                                        {weiToFormattedDecimals(
                                                            tokenItem.value,
                                                            parseInt(
                                                                tokenItem.token
                                                                    .decimals,
                                                            ),
                                                        )}

                                                        <span className='ml-1 text-white/50'>
                                                        { tokenItem.token.symbol }
                                                        </span>
                                                    </p>
                                                </div>
                                                {/* <div className="flex flex-row gap-2 items-center">
                                                </div> */}
                                            </div>
                                        </Link>
                                    ),
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            ) : null}
        </div>
    );
}
