import { AppRoot, View } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import FactPanel from "./components/FactPanel";
import YearPanel from "./components/AgePanel";
import { useState } from "react";
import SwitchPanelButton from "./components/SwitchPanelButton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const queryClient = new QueryClient();

const App = () => {
  const [activePanel, setActivePanel] = useState("FactPanel");

  function handleSwitchPanel() {
    setActivePanel(activePanel === "FactPanel" ? "YearPanel" : "FactPanel");
  }

  return (
    <AppRoot>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <View activePanel={activePanel}>
          <FactPanel id="FactPanel">
            {<SwitchPanelButton handleClick={handleSwitchPanel} />}
          </FactPanel>

          <YearPanel id="YearPanel">
            {<SwitchPanelButton handleClick={handleSwitchPanel} />}
          </YearPanel>
        </View>
      </QueryClientProvider>
    </AppRoot>
  );
};

export default App;
