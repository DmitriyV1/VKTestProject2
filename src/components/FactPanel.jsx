import { FormItem, Group, Header, Panel, Textarea } from "@vkontakte/vkui";
import FactButton from "./FactButton";
import { useGetFact } from "../functions/useGetFact";
import { useEffect, useRef } from "react";

function FactPanel({ id, children }) {
  const { fact, isLoading, refetch } = useGetFact();
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
    const space = fact?.indexOf(" ");
    ref.current.setSelectionRange(space, space);
  }, [fact]);

  function handleClick() {
    refetch();
  }

  return (
    <Panel id={id}>
      <Group header={<Header mode="secondary">Get random fact</Header>}>
        <FormItem>
          <Textarea getRef={ref} defaultValue={fact} />
        </FormItem>
        <FactButton handleClick={handleClick} disabled={isLoading} />
      </Group>
      {children}
    </Panel>
  );
}

export default FactPanel;
