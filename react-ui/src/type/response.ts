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
    fiveminute: FiveMinuteTraffic[]
    hour: HourTraffic[]
    month: MonthTraffic[]
    top: TopTraffic[]
    year: YearTraffic[]
    total: {
        rx: number
        tx: number
    }
}

export interface FiveMinuteTraffic{
    rx: number
    tx: number
    id: number
    date: VnDate
    time: VnTime
}

export interface HourTraffic{
    rx: number
    tx: number
    id: number
    date: VnDate
    time: VnTime
}

export interface DayTraffic{
    rx: number
    tx: number
    id: number
    date: VnDate
}


export interface MonthTraffic{
    rx: number
    tx: number
    id: number
    date: VnDate
}


export interface TopTraffic{
    rx: number
    tx: number
    id: number
    date: VnDate
}


export interface YearTraffic{
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
