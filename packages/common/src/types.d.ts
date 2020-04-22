export type Nullable<T> = T | null;

export type ID = number | string;

export type EntityToCreate<T> = Omit<T, 'id'>;

export type Environment = 'development' | 'staging' | 'production';
