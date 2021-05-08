export enum Routing {
  catchAll = '*',
  home = '/',
  iterations = '/iterations',
  iterationDetails = '/iterations/:iterationId',
  singleOpportunityDetails = '/opportunities/id/:opportunityId',
  currentOpportunities = '/opportunities/current',
  signIn = '/sign-in',
  signUp = '/sign-up',
  createOpportunity = '/opportunities/create',
}
