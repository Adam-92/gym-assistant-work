import { UserProvider } from "../contexts/user/provider/UserProvider";
import { ReactNode } from "react";
import { SettingsProvider } from "../contexts/settings/provider/SettingsProvider";
import { ModalProvider } from "../contexts/modal/provider/ModalProvider";
import { SidebarProvider } from "../contexts/sidebar/provider/SidebarProvider";

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <UserProvider>
      <SettingsProvider>
        <ModalProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ModalProvider>
      </SettingsProvider>
    </UserProvider>
  );
};
