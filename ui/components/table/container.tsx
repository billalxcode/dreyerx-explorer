import React from 'react';

export default function TableContainer(props: { children: React.ReactNode }) {
    return (
        <div className="overflow-x-auto mt-2">
            <table className="table-auto w-full border-collapse border rounded bg-container-default text-sm">
                {props.children}
            </table>
        </div>
    );
}