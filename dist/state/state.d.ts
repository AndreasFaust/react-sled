export interface IState {
    currentIndex: number;
    prevIndex?: number;
    pause: boolean;
    viewCount: number;
    hasFocus: boolean;
    width: number | string;
    height: number | string;
}
export declare const initialState: IState;
