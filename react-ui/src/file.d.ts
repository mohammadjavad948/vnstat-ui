import {VnstatI} from "./type/response";


declare global {
    interface Window {
        api: {
            interfaces: () => Promise<string>
            getData: (options: string[]) => Promise<VnstatI>
        }
    }
}
