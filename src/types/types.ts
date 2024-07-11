import { ReactElement } from "react";

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

export type TData = {
  _id: string;
  name: string;
  price: number;
  description: string;
  images: string;
  category: string;
  stock: number;
};

export type TinitialState = {
  data: TData[];
};
