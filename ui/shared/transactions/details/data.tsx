import { Transaction } from '@/hooks/transactions/useTransactionDetails';
import Card from '@/ui/components/card/card';
import TableContainer from '@/ui/components/table/container';
import TableDataCol from '@/ui/components/table/Td';
import TableHeaderCol from '@/ui/components/table/Th';
import React from 'react';

export default function TransactionDetailsData(props: {
    transaction: Transaction | null;
}) {
    return (
        <Card title="Data" className="w-full">
            <div className="flex flex-col gap-4 mt-2 w-full">
                <div className="flex flex-col w-full">
                    <h2 className="text-white/50 text-sm">Call</h2>
                    <p className="font-semibold text-lg">
                        {props.transaction?.decoded_input.method_call ??
                            'unknown'}
                    </p>
                </div>
                <TableContainer className="w-full">
                    <thead>
                        <tr>
                            <TableHeaderCol className="w-16">#</TableHeaderCol>
                            <TableHeaderCol>Name</TableHeaderCol>
                            <TableHeaderCol>Type</TableHeaderCol>
                            <TableHeaderCol>Value</TableHeaderCol>
                        </tr>
                    </thead>
                    <tbody>
                        {props.transaction?.decoded_input.parameters.map(
                            (argument, index) => (
                                <tr key={index}>
                                    <TableDataCol className="text-center">
                                        {index + 1}
                                    </TableDataCol>
                                    <TableDataCol>{argument.name}</TableDataCol>
                                    <TableDataCol>{argument.type}</TableDataCol>
                                    <TableDataCol>
                                        {argument.value}
                                    </TableDataCol>
                                </tr>
                            ),
                        )}
                    </tbody>
                </TableContainer>
            </div>
        </Card>
    );
}
