import React, { useState } from "react";
import {
  View,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { CheckCircle } from "phosphor-react-native";

import { styles } from "./styles";
import { THEME } from "../../theme";
import { Heading } from "../Heading";
import * as Clipboard from "expo-clipboard";
import { Loading } from "../Loading";

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  const [isCopying, setIsCopying] = useState<boolean>(false);

  async function handleCopyDiscordToClipboard() {
    setIsCopying(true); //motrar o loading enquando estiver a copiar o discord. Pode demorar mais dependendo dos telemoveis. Estamos a mexer com a memoria do dispositivo
    await Clipboard.setStringAsync(discord);

    Alert.alert("Discord copiado", "O username foi copiado com sucesso");
    setIsCopying(false);
  }

  return (
    // statusBarTranslucent -> cover status bar with modal
    <Modal animationType="fade" transparent statusBarTranslucent {...rest}>
      {/*ecra todo - background cinza*/}
      <View style={styles.container}>
        {/*retangulo onde aparece o conteudo*/}
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold" />

          <Heading
            style={{ alignItems: "center", marginTop: 24 }}
            title="Let's play"
            subtitle="Agora é só começar a jogar!"
          />

          <Text style={styles.label}>Adicione no discord</Text>

          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyDiscordToClipboard}
            disabled={
              isCopying /* prevenir que o user esteja sempre a copiar. Se a variavel for true o botao fica desativo */
            }
          >
            <Text style={styles.discord}>
              {isCopying ? <Loading /> : discord}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
