import { SpringConfig } from 'react-spring'
import CSS from 'csstype';

export type TSelect = number | 'next' | 'prev'

export interface IInternalState {
  currentIndex: number
  prevIndex?: number
  viewCount: number
  hasFocus: boolean
  dimensions: {
    width: number
    height: number
  }
}

interface IStateFromProps {
  width?: number | string
  height?: number | string
  select?: TSelect
  proportion?: boolean | '1:1' | '1:2' | '2:1' | '3:1' | '3:2'
  keyboard: boolean
  dragging: boolean
  dragDistance: number | string
  autoPlayInterval?: number
  pauseOnMouseOver: boolean
  rewind: boolean
  config: SpringConfig,
  stopOnInteraction: boolean
  pause: boolean
  onSledEnd?(): void
  onAnimationStart?(): void
  onAnimationEnd?(): void
}

export interface IState extends IInternalState, IStateFromProps { }

export interface IViewsProps extends IStateFromProps {
  children?: React.ReactNode
  style?: CSS.Properties
}

const stateFromProps = {
  width: '100%',
  proportion: null,
  select: null,
  keyboard: true,
  dragging: true,
  dragDistance: '25ow',
  autoPlayInterval: null,
  config: { mass: 1, tension: 210, friction: 20, clamp: true },
  pauseOnMouseOver: true,
  stopOnInteraction: false,
  rewind: false,
  pause: false,
  onSledEnd: null,
  onAnimationStart: null,
  onAnimationEnd: null
}

export const ViewsProps: IViewsProps = {
  ...stateFromProps
}

export const initialState: IState = {
  currentIndex: 0,
  prevIndex: undefined,
  pause: false,
  viewCount: 0,
  hasFocus: false,
  dimensions: {
    width: 0,
    height: 0
  },
  ...stateFromProps
}
