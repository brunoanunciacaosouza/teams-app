import Header from "@components/Header";
import Highlight from "@components/Highlight";

import { Container } from "./styles";
import GroupCard from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";

export default function Groups() {
  const [groups, setGroups] = useState<string[]>(["Galera da faculdade", "Amigos"]);
  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  );
}
