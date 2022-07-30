import ModeChange from './ModeChange';
import { useState, useCallback } from 'react';
import ThemeContext from './ThemeContext';


function PageBase(props) {

  const [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(() => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('light');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ModeChange />
      <div
        className={theme === 'light' ? 'light' : 'dark'}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: theme === 'light' ? 'white' : '#1e1d1d',
          color: theme === 'light' ? '#1e1d1d' :' white ',
        }}>
        {props.children}
      </div>
    </ThemeContext.Provider>
  )
}

export default PageBase;