import React from 'react';
import { Autocomplete, TextInput } from 'evergreen-ui';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies } from '../../company/store/company.action';
import { selectCompanyState } from '../../company/store/company.selector';
import { PageLoader } from '../../../common/components/loader.component';

export const CompanyPicker: React.FC = () => {
  const dispatch = useDispatch();

  const { loading, companies } = useSelector(selectCompanyState);

  React.useEffect(() => {
    dispatch(fetchCompanies);
  }, [dispatch]);

  if (loading) return <PageLoader />;

  return (
    <>
      <Autocomplete
        title="Companies"
        // onChange={onSelectCompany}
        onChange={console.log}
        items={companies}
      >
        {(props) => {
          const { getInputProps, getRef } = props;

          return (
            <TextInput
              placeholder="Your company"
              // value={inputValue}
              ref={getRef}
              {...getInputProps()}
            />
          );
        }}
      </Autocomplete>
      <small>
        If your company is not listed, just type and leave it in the input
      </small>
    </>
  );
};
