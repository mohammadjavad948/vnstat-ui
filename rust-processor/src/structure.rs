use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct DaysInterface {
    pub interfaces: Vec<Interface>,
    pub jsonversion: String,
    pub vnstatversion: String
}

#[derive(Serialize, Deserialize)]
pub struct Interface {
    pub alias: String,
    pub name: String,
    pub created: Created,
    pub updated: Updated,
    pub traffic: Traffic
}

#[derive(Serialize, Deserialize)]
pub struct Traffic {
    pub day: Vec<Day>
}

#[derive(Serialize, Deserialize)]
pub struct Day {
    pub date: Date,
    pub id: usize,
    pub rx: u64,
    pub tx: u64
}

#[derive(Serialize, Deserialize)]
pub struct Updated {
    pub date: Date,
    pub time: Time
}

#[derive(Serialize, Deserialize)]
pub struct Created {
    pub date: Date
}

#[derive(Serialize, Deserialize)]
pub struct Date {
    pub year: u32,
    pub month: u32,
    pub day: u32
}

#[derive(Serialize, Deserialize)]
pub struct Time {
    pub hour: u32,
    pub minute: u32
}

#[derive(Serialize, Deserialize)]
pub struct DaysReturn {
    pub min: Vec<String>,
    pub max: Vec<String>,
    pub avg: Vec<String>,
}