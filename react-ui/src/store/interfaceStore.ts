import create from "zustand";
import {persist} from "zustand/middleware";

interface InterfaceStoreI{
    interfaces: string[];
    selected: string;
    setSelected: (select: string) => void
    setInterfaces: (i: string[]) => void
}

export const useInterfaceStore = create<InterfaceStoreI>(
    persist(
        (set) => ({
            interfaces: [],
            selected: '',
            setSelected: (s) => set({selected: s}),
            setInterfaces: (s) => set({interfaces: s})
        }),
        {
            name: "interface-storage", // unique name
        }
    )
);
