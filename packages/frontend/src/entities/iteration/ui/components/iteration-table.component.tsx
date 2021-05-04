import { Table } from 'evergreen-ui';
import React from 'react';
import { IterationItemState } from '../../iteration.interface';

interface Props {
  iterations: IterationItemState[];
}

export const IterationTable: React.FC<Props> = ({ iterations }) => {
  return (
    <Table>
      <Table.Head>
        <Table.TextHeaderCell>Iteration Name</Table.TextHeaderCell>
        <Table.TextHeaderCell>Start date</Table.TextHeaderCell>
        <Table.TextHeaderCell>Planned end date</Table.TextHeaderCell>
      </Table.Head>

      <Table.Body height={240}>
        {iterations.map((iteration) => (
          <Table.Row key={iteration.id} isSelectable>
            <Table.TextCell>{iteration.name}</Table.TextCell>
            <Table.TextCell>{iteration.start_date}</Table.TextCell>
            <Table.TextCell>{iteration.final_date}</Table.TextCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
