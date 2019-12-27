declare type ActionType = {
    type: string;
    index?: number;
    pause?: boolean;
    mouseOver?: boolean;
    count?: number;
    focus?: boolean;
    height?: number;
    width?: number;
    dragging?: boolean;
    dragDistance?: string;
    autoPlayInterval?: number;
    config?: number;
    rewind?: boolean;
    stopOnInteraction?: boolean;
};
declare const _default: (state: any, action: ActionType) => any;
export default _default;
