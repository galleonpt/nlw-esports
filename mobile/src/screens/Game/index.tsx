import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles";
import { GameParams } from "../../@types/navigation";
import { THEME } from "../../theme";
import logo from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { DuoMatch } from "../../components/DuoMatch";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState("");

  const route = useRoute();
  const game = route.params as GameParams;

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  // funcao executada ao carregar no botao de conectar
  async function getDiscordUser(adsId: string) {
    fetch(`http://192.168.1.5:3333/ads/${adsId}/discord`)
      .then((response) => response.json())
      .then((data) => setDiscordDuoSelected(data.discord));
  }

  useEffect(() => {
    fetch(`http://192.168.1.5:3333/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => setDuos(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image source={logo} style={styles.logo} />

          {/* hack: View used to center logo */}
          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading title={game.title} subtitle="Conecte-se e comece a jogar" />

        <FlatList
          data={duos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DuoCard data={item} onConnect={() => getDiscordUser(item.id)} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.containerList}
          contentContainerStyle={[
            duos.length > 0 ? styles.contentList : styles.emptyListContent,
          ]}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>Sem anuncios publicados</Text>
          )}
        />

        {/* se tiver algum user selecionado a modal abre */}
        <DuoMatch
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          onClose={() => {
            {
              /* se alguem tocar no botao de fechar, o estado é alterado para vazio e a condiçao do visible faz com que a modal feche */
            }
            setDiscordDuoSelected("");
          }}
        />
      </SafeAreaView>
    </Background>
  );
}
