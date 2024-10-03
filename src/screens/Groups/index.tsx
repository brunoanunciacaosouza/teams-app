import Header from "@components/Header";
import Highlight from "@components/Highlight";

import { Container } from "./styles";
import GroupCard from "@components/GroupCard";

export default function Groups() {
  return (
    <Container>
      <Header showBackButton={true} />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <GroupCard title="Galera do Ignite" />
    </Container>
  );
}
