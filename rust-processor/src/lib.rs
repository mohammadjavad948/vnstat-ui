mod structure;

use structure::DaysInterface;

use wasm_bindgen::prelude::*;
use serde_json::Result;

macro_rules! console_log {
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}
macro_rules! console_warn {
    ($($t:tt)*) => (warn(&format_args!($($t)*).to_string()))
}

#[wasm_bindgen]
extern {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
    #[wasm_bindgen(js_namespace = console)]
    fn warn(s: &str);
}

#[wasm_bindgen]
pub fn days_chart(data: &str) -> String {

    console_log!("before");

    let converted: DaysInterface = serde_json::from_str(data).unwrap();

    console_log!("after");

    converted.vnstatversion.to_string()
}
