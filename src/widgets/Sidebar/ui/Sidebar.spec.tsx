import { renderWithTranslation } from '@/shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withTranslation } from 'react-i18next';

import { Sidebar, SidebarProps } from './Sidebar';

const baseProps = { testId: 'sidebar-test-id' } satisfies SidebarProps;

const renderComponent = (props: SidebarProps = {}) => {
  const mergedProps: SidebarProps = { ...baseProps, ...props };

  return renderWithTranslation(<Sidebar {...mergedProps} />);
};

describe('<Sidebar />', () => {
  test('should be match snapshot', () => {
    renderComponent();
    expect(screen.getByTestId(baseProps.testId)).toBeInTheDocument();
    // expect(screen.debug()).toMatchSnapshot();
  });

  test('should be collapse', async () => {
    renderComponent();
    const toggleBtn = screen.getByTestId('sidebar-toggle-btn');

    expect(screen.getByTestId(baseProps.testId)).not.toHaveClass('collapsed');

    await userEvent.click(toggleBtn);
    expect(screen.getByTestId(baseProps.testId)).toHaveClass('collapsed');

    await userEvent.click(toggleBtn);
    expect(screen.getByTestId(baseProps.testId)).not.toHaveClass('collapsed');
  });
});
