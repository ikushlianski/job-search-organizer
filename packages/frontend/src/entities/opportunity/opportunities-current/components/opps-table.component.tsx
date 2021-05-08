import React from 'react';
import { Link } from 'react-router-dom';
import { OpportunityItemState } from '../current-opps.interface';
import { Table } from 'evergreen-ui';

interface Props {
  opportunities: OpportunityItemState[];
}

export const OpportunitiesTable: React.FC<Props> = ({ opportunities }) => {
  const sortedOpportunities = [...opportunities].sort((opp1, opp2) => {
    if (opp2.userOpportunityScore?.score && opp1.userOpportunityScore?.score) {
      return (
        opp2.userOpportunityScore?.score - opp1.userOpportunityScore?.score
      );
    }

    return 1;
  });

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
        {sortedOpportunities.map((opportunity) => (
          <Table.Row key={opportunity.id}>
            <Table.TextCell>
              <Link to={`/opportunities/id/${opportunity.id}`}>
                {opportunity.name || opportunity.project?.name || 'N/A'}{' '}
              </Link>
            </Table.TextCell>
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
