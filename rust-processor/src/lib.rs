mod structure;

use structure::DaysInterface;

use std::process::Command;
use wasm_bindgen::prelude::*;
use serde_json::Result;

#[wasm_bindgen]
pub fn days_chart(data: &str) -> String {

    return data.to_string();
}
