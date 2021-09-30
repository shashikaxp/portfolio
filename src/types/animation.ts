import { RouteChildrenProps } from 'react-router';

export interface ProjectDetailsLocation {
  imageRect: DOMRect;
  containerRect: DOMRect;
}

export interface Positions {
  height: number;
  width: number;
  left: number;
  top: number;
}

export type RouterProps = RouteChildrenProps<{ id: string }>['match'];

export interface AnimatedComponentProps {
  match: RouterProps;
  isReverse: boolean;
  onPageAnimationEnd: () => void;
}
