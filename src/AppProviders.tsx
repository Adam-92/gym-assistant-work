import { UserProvider } from "./contexts/user/provider/UserProvider";
import { SettingsProvider } from "./contexts/settings/provider/SettingsProvider";
import { AddedExerciseModalProvider } from "./contexts/addedExerciseModal/provider/AddedExerciseModalProvider";

import { ReactNode } from "react";

interface AppProvidersProps {
  children: ReactNode;
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <UserProvider>
      <SettingsProvider>
        <AddedExerciseModalProvider>{children}</AddedExerciseModalProvider>
      </SettingsProvider>
    </UserProvider>
  );
};

export default AppProviders;
