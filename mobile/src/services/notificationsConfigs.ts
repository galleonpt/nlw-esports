import * as Notifications from "expo-notifications";

//permissoes das notificações, da som, pede permissao, mostra badge
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowAlert: true,
  }),
});
