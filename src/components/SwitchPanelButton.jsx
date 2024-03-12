import { CellButton, Panel, View } from "@vkontakte/vkui";

function SwitchPanelButton({ handleClick }) {
  return (
    <View activePanel="button">
      <Panel id="button">
        <CellButton onClick={handleClick} centered>
          Try another feature
        </CellButton>
      </Panel>
    </View>
  );
}

export default SwitchPanelButton;
