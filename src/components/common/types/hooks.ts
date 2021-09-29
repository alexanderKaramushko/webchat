import { Dispatch, SetStateAction } from 'react';

export type State<S> = [S | undefined, Dispatch<SetStateAction<S | undefined>>];
