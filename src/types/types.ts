import { ReactElement } from 'react';

export type TChildren = {
  path: string;
  element: ReactElement;
};

export type TRouter = {
  path: string;
  element: ReactElement;
  errorElement?: ReactElement;
  children?: TChildren[];
};
