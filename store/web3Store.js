import create from "zustand";

const useWeb3Store = create((set) => ({
  messages: [],
  setMessages: (message) => set(() => ({ messages: message })),
}));

export default useWeb3Store;
