import { TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  icon: keyof typeof Feather.glyphMap;
  type?: ButtonIconTypeStyleProps;
};

export default function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container>
      <Icon name={icon} type={type} {...rest} />
    </Container>
  );
}
