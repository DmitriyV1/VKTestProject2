import {
  FormItem,
  Group,
  Header,
  Input,
  Panel,
  Textarea,
} from "@vkontakte/vkui";
import GetAgeButton from "./GetAgeButton";
import { useGetAge } from "../functions/useGetAge";
import { useRef, useState } from "react";

function AgePanel({ id, children }) {
  const [name, setName] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const { age, refetch, isLoading } = useGetAge(name);
  const ref = useRef();

  function handleAge() {
    // No timeout by pressing button

    if (ref.current.value === name) return;
    refetch();
  }

  function handleChange() {
    // Timeout while writing name

    if (ref.current.value === name) return;
    setName(ref.current.value);
    setIsFetching(true);

    setTimeout(() => {
      if (isFetching === true) return;
      refetch();
      setIsFetching(false);
    }, 3000);
  }

  return (
    <Panel id={id}>
      <Group header={<Header mode="secondary">Get age by name</Header>}>
        <FormItem>
          <Input getRef={ref} onChange={handleChange} />
        </FormItem>
        {age && <Textarea defaultValue={age} />}
        <GetAgeButton handleClick={handleAge} disabled={isLoading} />
      </Group>

      {children}
    </Panel>
  );
}

export default AgePanel;
