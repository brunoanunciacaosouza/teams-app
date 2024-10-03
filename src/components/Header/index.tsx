import { Container, Logo } from "./styles";

import logoImg from "@assets/logo.png";

export default function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
    </Container>
  );
}
