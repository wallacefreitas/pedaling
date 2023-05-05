import { create } from "zustand"

interface User {
  username: string;
  admin: boolean;
  token: string;
}

interface UserState {
  user: User;
  setUser: (data: User) => void
}

export const useUserStore = create<UserState>()((set) => ({
  user: {
    username: "",
    admin: false,
    token: ""
  },
  setUser: (user: User) => set(() => ({ user })),
}))