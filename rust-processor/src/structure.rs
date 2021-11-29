use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct DaysInterface {
    interfaces: Vec<Interface>,
    jsonversion: str,
    vnstatversion: str
}

struct Interface {
    alias: str,
    name: str,
    created: Created,
    updated: Updated
}

struct Traffic {
    day: Vec<Day>
}

struct Day {
    date: Date,
    id: usize,
    rx: usize,
    tx: usize
}

struct Updated {
    date: Date,
    time: Time
}

struct Created {
    date: Date
}

struct Date {
    year: u32,
    month: u32,
    day: u32
}

struct Time {
    hour: u32,
    minute: u32
}