import * as Notifications from "expo-notifications";

//Obter o token do identificador do dispositivo
export async function getPushNotificationToken() {
  //Saber se o utilizador permitiu receber notificações
  const { granted } = await Notifications.getPermissionsAsync();

  if (!granted) {
    await Notifications.requestPermissionsAsync();
  }

  if (granted) {
    const pushToken = await Notifications.getExpoPushTokenAsync();
    console.log(pushToken);

    return pushToken.data;
  }
}
