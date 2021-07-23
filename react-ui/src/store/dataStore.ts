import create from "zustand";
import {VnstatI} from "../type/response";

interface DataI{
    data: VnstatI,
    setData: (data: VnstatI) => void
}

// @ts-ignore
export const useDataStore = create<DataI>((set) => {
    return {
        data: {
            interfaces: [
                {
                    traffic: {
                        day: []
                    }
                }
            ]
        },
        setData: (data) => {
            set({data});
        }
    }
})
