import { classNames } from '@/shared/lib/classNames';
import { Modal } from '@/shared/ui/Modal/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

export type LoginModalProps = {
  className?: string;
  onClose?(): void;
  isOpen: boolean;
};

export const LoginModal = ({ isOpen, onClose, className }: LoginModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={classNames(cls.loginModal, {}, [className])}>
      <LoginForm />
    </Modal>
  );
};
