import {ID, Nullable} from "../types";

export interface Option {
    id: ID;
    questionId: ID;
    value: Nullable<string | boolean | number>
}
