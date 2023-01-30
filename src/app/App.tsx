import { Navbar } from '@/widgets/Navbar';

import { useTheme } from '@/shared/config/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames';

import { AppRouter } from './providers/router';
import './styles/index.scss';

function App() {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar className='чьлен' />
      <AppRouter />
    </div>
  );
}

export default App;
