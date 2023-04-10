import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button, ButtonProps, VariantButton } from './Button';

const baseProps: ButtonProps = {};

const renderComponent = (props: ButtonProps) => {
  const mergedProps: ButtonProps = { ...baseProps, ...props };
  return render(<Button {...mergedProps} />);
};

describe('<Button />', () => {
  test('should be render with empty props', () => {
    renderComponent({});
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('should be render with correct children', () => {
    renderComponent({ children: <p>1234!</p> });
    expect(screen.getByText(/1234!/)).toBeInTheDocument();
  });

  test('should be called click handler', async () => {
    const mockOnClick = jest.fn();
    renderComponent({ onClick: mockOnClick });

    await userEvent.click(screen.getByRole('button'));

    expect(mockOnClick).toBeCalledTimes(1);
  });

  test('should be render with CLEAR variant', async () => {
    renderComponent({ variant: VariantButton.CLEAR });

    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('button')).toHaveClass(VariantButton.CLEAR);
  });

  test('should be render with default PRIMARY variant', async () => {
    renderComponent({});

    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('button')).toHaveClass(VariantButton.PRIMARY);
  });
});
