use std::process::Command;
use wasm_bindgen::prelude::*;
use serde::{Deserialize, Serialize};
use serde_json::Result;
use std::borrow::Cow;

#[wasm_bindgen]
fn days_chart() -> Cow<str> {
    let out = Command::new("vnstat")
        .arg("-i")
        .arg("wlp2s0")
        .arg("-d")
        .arg("--limit")
        .arg("0")
        .arg("--json")
        .output()
        .expect("err");

    println!("{}", String::from_utf8_lossy(&out.stdout));

    return String::from_utf8_lossy(&out.stdout)
}
