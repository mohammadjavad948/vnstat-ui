use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct DaysInterface {
    pub interfaces: Vec<Interface>,
    pub jsonversion: String,
    pub vnstatversion: String
}

#[derive(Serialize, Deserialize)]
pub struct Interface {
    alias: String,
    name: String,
    created: Created,
    updated: Updated
}

#[derive(Serialize, Deserialize)]
pub struct Traffic {
    day: Vec<Day>
}

#[derive(Serialize, Deserialize)]
pub struct Day {
    date: Date,
    id: usize,
    rx: usize,
    tx: usize
}

#[derive(Serialize, Deserialize)]
pub struct Updated {
    date: Date,
    time: Time
}

#[derive(Serialize, Deserialize)]
pub struct Created {
    date: Date
}

#[derive(Serialize, Deserialize)]
pub struct Date {
    year: u32,
    month: u32,
    day: u32
}

#[derive(Serialize, Deserialize)]
pub struct Time {
    hour: u32,
    minute: u32
}