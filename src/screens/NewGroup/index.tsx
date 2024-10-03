import Header from "@components/Header";
import Highlight from "@components/Highlight";

import { Container, Content, Icon } from "./style";
import Button from "@components/Button";

export default function NewGroup() {
  return (
    <Container>
      <Header showBackButton={true} />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Button title="Criar" />
      </Content>
    </Container>
  );
}
