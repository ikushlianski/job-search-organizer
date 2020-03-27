import {IterationQuestion} from "../iteration-question";
import {ID} from "../types";

export interface Iteration {
    id: ID;
    name?: string;
    startDate: number; // timestamp
    endDate: number; // timestamp
    parameters: IterationQuestion;
}
