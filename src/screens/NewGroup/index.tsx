import Header from "@components/Header";
import Highlight from "@components/Highlight";

import { Container, Content, Icon } from "./style";
import Button from "@components/Button";
import Input from "@components/Input";

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

        <Input placeholder="Nome da turma" />

        <Button title="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}
