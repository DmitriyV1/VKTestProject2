import { CellButton, Panel, View } from "@vkontakte/vkui";

function FactButton({ handleClick, disabled }) {
  return (
    <View activePanel="button">
      <Panel id="button">
        <CellButton onClick={handleClick} disabled={disabled}>
          Get random fact
        </CellButton>
      </Panel>
    </View>
  );
}

export default FactButton;
