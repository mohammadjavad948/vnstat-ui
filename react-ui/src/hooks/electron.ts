import {useEffect, useState} from "react";

export function useIsElectron(){
    const [isElectron, setIsElectron] = useState(false);

    useEffect(() => {

        const userAgent = navigator.userAgent.toLowerCase();

        if (userAgent.indexOf(' electron/') > -1) {
            setIsElectron(true);
        } else {
            setIsElectron(false);
        }

    }, [])

    return isElectron
}
