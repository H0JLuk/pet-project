/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
import { useTheme } from '@/shared/config/providers/ThemeProvider';
import { classNames, type CnMods } from '@/shared/lib/classNames';
import { memo, MouseEventHandler } from 'react';
import { Portal } from '../../Portal';
import cls from './Modal.module.scss';

export type ModalProps = React.PropsWithChildren<{
  className?: string;
  isOpen?: boolean;
  onClose?(): void;
}>;

export const Modal = memo(({ className, isOpen = false, onClose, children }: ModalProps) => {
  const { theme } = useTheme();

  const mods: CnMods = {
    [cls.opened]: isOpen,
  };

  const preserveContentClosing: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
  };

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className])} onClick={onClose}>
        <div className={cls.overlay}>
          <div className={cls.content} onClick={preserveContentClosing}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
});
