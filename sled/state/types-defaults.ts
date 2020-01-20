import { SpringConfig } from 'react-spring'
import CSS from 'csstype'

export type TRef = React.MutableRefObject<HTMLDivElement>

export type TSelect = number | 'next' | 'prev'
export type TDirection = 'horizontal' | 'vertical' | null
export type TProportion = string | null
export type TDimension = string | number | null

export interface IInternalState {
  currentIndex: number
  prevIndex?: number
  viewCount: number
  slideSteps: number
  sliderSize: number
  hasFocus: boolean
  dimensions: {
    width: number
    height: number
  }
  dimensionsDOM: {
    width: TDimension
    height: TDimension
  }
}

interface IStateFromProps {
  width?: number | string
  height?: number | string
  direction?: TDirection
  select?: TSelect
  proportion?: TProportion
  showElements?: number,
  slideBy?: number,
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
  width: null,
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
  direction: 'horizontal',
  showElements: 1,
  slideBy: 1,
  slideSteps: 1,
  sliderSize: 0,
  dimensions: { width: 0, height: 0 },
  dimensionsDOM: { width: 0, height: 0 },
  ...stateFromProps
}
