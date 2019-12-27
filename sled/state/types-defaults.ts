import { SpringConfig } from 'react-spring'

export interface IInternalState {
  currentIndex: number
  prevIndex?: number
  viewCount: number
  hasFocus: boolean
}

interface IStateFromProps {
  width: number | string
  height: number | string
  goto?: number | string
  keyboard: boolean
  dragging: boolean
  dragDistance: number | string
  autoPlayInterval?: number | string
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
  style?: object
}

const stateFromProps = {
  width: '100%',
  height: '50ow',
  goto: null,
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
  children: null,
  style: null,
  ...stateFromProps
}

export const initialState: IState = {
  currentIndex: 0,
  prevIndex: undefined,
  pause: false,
  viewCount: 0,
  hasFocus: false,
  ...stateFromProps
}
