export enum Routing {
  catchAll = '*',
  home = '/',
  iterations = '/iterations',
  iterationDetails = '/iterations/:iterationId',
  singleOpportunityDetails = 'opportunities/:opportunityId',
  currentOpportunities = '/opportunities/current',
  signIn = '/sign-in',
  signUp = '/sign-up',
  suggest = '/suggest',
}
