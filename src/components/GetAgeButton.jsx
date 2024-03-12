import { CellButton, Panel, View } from "@vkontakte/vkui";

function GetAgeButton({ handleClick, disabled }) {
  return (
    <View activePanel="button">
      <Panel id="button">
        <CellButton onClick={handleClick} disabled={disabled}>
          Check age
        </CellButton>
      </Panel>
    </View>
  );
}

export default GetAgeButton;
