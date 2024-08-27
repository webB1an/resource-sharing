import { defineStore } from "pinia";
import { store } from "@/store";

export const useNavTitleStore = defineStore({
  id: "nav-title",
  state: () => ({
    // 导航栏标题
    navTitle: ""
  }),
  actions: {
    setNavTitle(title: string) {
      this.navTitle = title;
    }
  }
});

export function useNavTitleStoreHook() {
  return useNavTitleStore(store);
}
