import { UserProvider } from "./contexts/user/provider/UserProvider";
import { SettingsProvider } from "./contexts/settings/provider/SettingsProvider";
import { ReactNode } from "react";

interface AppProvidersProps {
  children: ReactNode;
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <UserProvider>
      <SettingsProvider>{children}</SettingsProvider>
    </UserProvider>
  );
};

export default AppProviders;
