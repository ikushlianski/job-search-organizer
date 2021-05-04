import React from 'react';
import { OpportunityItemState } from '../../opportunity.interface';
import { Table } from 'evergreen-ui';

interface Props {
  opportunities: OpportunityItemState[];
}

export const OpportunitiesTable: React.FC<Props> = ({ opportunities }) => {
  return (
    <Table>
      <Table.Head>
        <Table.TextHeaderCell>Opportunity</Table.TextHeaderCell>
        <Table.TextHeaderCell>Start date</Table.TextHeaderCell>
        <Table.TextHeaderCell>Final date</Table.TextHeaderCell>
        <Table.TextHeaderCell>Score</Table.TextHeaderCell>
        <Table.TextHeaderCell>Company</Table.TextHeaderCell>
      </Table.Head>

      <Table.Body height={240}>
        {opportunities.map((opportunity) => (
          <Table.Row key={opportunity.id} isSelectable>
            <Table.TextCell>{opportunity.name}</Table.TextCell>
            <Table.TextCell>{opportunity.date}</Table.TextCell>
            <Table.TextCell>{opportunity.final_date}</Table.TextCell>
            <Table.TextCell>
              {opportunity.userOpportunityScore?.score}
            </Table.TextCell>
            <Table.TextCell>{opportunity.company?.name}</Table.TextCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
