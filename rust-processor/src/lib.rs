mod structure;

use structure::DaysInterface;

use std::process::Command;
use wasm_bindgen::prelude::*;
use serde_json::Result;

#[wasm_bindgen]
pub fn days_chart(data: &str) -> String {

    let converted: DaysInterface = serde_json::from_str(data).unwrap();

    let dayavg = converted.interfaces.first().unwrap().

    return converted.to_string();
}
