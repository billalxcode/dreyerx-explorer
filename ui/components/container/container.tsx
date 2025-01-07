import React from 'react';

export default function Container(props: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen w-screen lg:w-screen px-4 lg:px-8 pt-8 flex flex-col gap-4">
            {props.children}
        </div>
    );
}
