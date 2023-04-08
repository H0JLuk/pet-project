import { createPortal } from 'react-dom';

export type PortalProps = Required<React.PropsWithChildren> & {
  className?: string;
  container?: Element;
};

export const Portal = ({ className, children, container = document.body }: PortalProps) => {
  return createPortal(children, container);
};
