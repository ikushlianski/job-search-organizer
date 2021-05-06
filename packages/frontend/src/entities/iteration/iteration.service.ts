import { IterationItemState } from './iteration.interface';

export const findActiveIterationId = (
  iterations: IterationItemState[],
): number | undefined => {
  const iteration = iterations.find(
    (iteration: IterationItemState) =>
      Date.parse(iteration.final_date) >= Date.now(),
  );

  return iteration?.id;
};
