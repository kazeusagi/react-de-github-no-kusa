import type { ReactNode } from 'react';

export type Props = {
  children?: ReactNode;
};

export function Button({ children }: Props) {
  return <button type="button">{children}</button>;
}
