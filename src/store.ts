import create from "zustand";
import data from "./data/items.json";
import { persist } from "zustand/middleware";

const jsonItems = data.items;

export interface Item {
  id: string;
  text: string;
  category: string;
  projectBudget: string;
  isChecked: boolean;
}

interface Store {
  items: Item[];
  filter: string;
  updateItemIsChecked: (itemID: string) => void;
  setFilter: (filter: string) => void;
}

const useStore = create<Store>(
  persist(
    (set, get) => ({
      items: jsonItems,
      filter: "high",
      updateItemIsChecked: (itemID: string) =>
        set(() => {
          const items = get().items;

          const index = items.findIndex((item) => item.id === itemID);

          let newItems = [...items];

          newItems[index].isChecked = !newItems[index].isChecked;

          return {
            items: newItems,
          };
        }),

      setFilter: (filter: string) =>
        set(() => {
          return {
            filter: filter,
          };
        }),
    }),
    {
      name: "items",
    }
  )
);

export default useStore;
