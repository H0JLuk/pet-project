import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, VariantButton } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames';

import cls from './Navbar.module.scss';
import { Modal } from '@/shared/ui/Modal/ui/Modal';

export type NavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('translation');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setIsAuthModalOpen(prev => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button onClick={toggleModal} variant={VariantButton.CLEAR_INVERTED}>
        Log in
      </Button>
      <Modal isOpen={isAuthModalOpen} onClose={toggleModal}>
        Log in
      </Modal>
    </div>
  );
};
