import ButtonIcon from "@components/ButtonIcon";

import { Container, Name, Icon } from "./styles";

interface Props {
  name: string;
  onRemove: () => void;
}

export default function PlayerCard({ name, onRemove }: Props) {
  return (
    <Container>
      <Icon name="user" />

      <Name>{name}</Name>

      <ButtonIcon icon="x" type="SECONDARY" onPress={onRemove} />
    </Container>
  );
}
