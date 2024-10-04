import Header from "@components/Header";
import Highlight from "@components/Highlight";

import { Container } from "./styles";
import ButtonIcon from "@components/ButtonIcon";
import Input from "@components/Input";
import { Form } from "@components/ButtonIcon/styles";

export default function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonIcon icon="plus" />
      </Form>
    </Container>
  );
}
