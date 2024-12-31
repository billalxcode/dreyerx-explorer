import Card from "@/ui/components/card/card";
import TableContainer from "@/ui/components/table/container";
import TableDataCol from "@/ui/components/table/Td";
import TableHeaderCol from "@/ui/components/table/Th";
import React from "react";

export default function LatestBlocks() {
  return (
    <Card title="Latest Blocks" className="w-1/3">
      <TableContainer>
        <thead>
          <tr>
            <TableHeaderCol>Block ID</TableHeaderCol>
            <TableHeaderCol>Size</TableHeaderCol>
            <TableHeaderCol>Time</TableHeaderCol>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableDataCol>1</TableDataCol>
            <TableDataCol>20</TableDataCol>
            <TableDataCol>1 minutes ago</TableDataCol>
          </tr>
        </tbody>
      </TableContainer>
    </Card>
  );
}
