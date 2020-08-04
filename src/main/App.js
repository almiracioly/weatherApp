import React, {useState} from 'react';
import '../configs/stringExtension';
import ThemeProvider from './ThemeProvider';
import usePermissions from './hooks/usePermissions';
import WeatherApp from '../screens';
import NoPermissionsWarn from '../screens/NoPermissionsWarn';

function App() {
  const [togglePermissionPrompt, setTogglePermissionPrompt] = useState(false);
  const locationPermissionsGranted = usePermissions(togglePermissionPrompt);

  if (!locationPermissionsGranted)
    return (
      <ThemeProvider>
        <NoPermissionsWarn
          onPress={() => setTogglePermissionPrompt(!togglePermissionPrompt)}
        />
      </ThemeProvider>
    );

  return (
    <ThemeProvider>
      <WeatherApp />
    </ThemeProvider>
  );
}

export default App;
