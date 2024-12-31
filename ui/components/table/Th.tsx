import React from 'react';

export default function TableHeaderCol(props: { children: React.ReactNode }) {
    return (
        <th className={`px-4 py-2 border border-container-default uppercase`}>
            {props.children}
        </th>
    );
}