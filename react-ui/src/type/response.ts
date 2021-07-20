export interface VnstatI{
    vnstatversion: string
    jsonversion: string
    interfaces: Interfaces[]
}

export interface Interfaces {
    alias: string
    name: string
    created: {
        date: VnDate
    }
    updated: {
        date: VnDate,
        time: VnTime
    }
    traffic: Traffic
}

export interface Traffic{
    day: DayTraffic[]
}

export interface DayTraffic{
    rx: number
    tx: number
    id: number
    date: VnDate
}

export interface VnDate{
    day: number
    month: number
    year: number
}

export interface VnTime{
    hour: number
    minute: number
}
