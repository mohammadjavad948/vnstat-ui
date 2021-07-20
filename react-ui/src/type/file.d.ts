import {VnstatI} from "./response";


declare global {
    interface Window {
        api: {
            interfaces: () => Promise<string>
            getData: (options: string[]) => Promise<VnstatI>
        }
    }
}
