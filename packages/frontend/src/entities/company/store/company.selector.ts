import { ApplicationState } from '../../../app/store/app.store';
import { Company, CompanyListState } from '../company.interface';

export const selectCompanyState = (state: ApplicationState): CompanyListState =>
  state.company;

export const selectCompaniesList = (state: ApplicationState): Company[] =>
  state.company.companies;
