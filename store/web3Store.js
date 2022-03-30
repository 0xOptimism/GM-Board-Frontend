import create from "zustand";

const useWeb3Store = create((set) => ({
  messages: [],
  totalGms: null,
  setMessages: (message) => set(() => ({ messages: message })),
  setTotalGms: (data) => set(() => ({ totalGms: data })),
}));

export default useWeb3Store;
