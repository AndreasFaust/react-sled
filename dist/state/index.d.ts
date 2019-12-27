import React from 'react';
import { IState } from './state';
interface IContextProps {
    state: any;
    dispatch: ({ type }: {
        type: string;
    }) => void;
}
export declare const StateContext: React.Context<IContextProps>;
interface IProps {
    reducer: any;
    initialState: IState;
    children?: React.ReactNode;
}
export declare const StateProvider: React.FC<IProps>;
export declare const useStateContext: () => IContextProps;
export { default as reducer } from './reducer';
export { initialState } from './state';
