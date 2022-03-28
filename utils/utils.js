export const formatConnectedWallet = (wallet, option = 36) => {
  return wallet.replace(wallet.substring(5, option), "...");
};

export const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};
