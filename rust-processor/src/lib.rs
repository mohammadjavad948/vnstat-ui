extern crate console_error_panic_hook;

mod structure;

use structure::DaysInterface;
use structure::DaysReturn;

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

    let mut max: Vec<String> = vec![];
    let mut min: Vec<String> = vec![];
    let mut avg: Vec<String> = vec![];

    console_error_panic_hook::set_once();


    let converted: DaysInterface = serde_json::from_str(data).unwrap();


    for i in 1..=7 {
        let day = converted.interfaces
            .first()
            .unwrap()
            .traffic
            .day
            .iter()
            .filter(|x| x.date.day == i)
            .map(|x| x.tx + x.rx);

        let day_max = day
            .clone()
            .max()
            .unwrap()
            .to_string();

        let day_min = day
            .clone()
            .min()
            .unwrap()
            .to_string();

        let day_avg: f64 = day.clone().sum::<u64>() as f64 / day.clone().count() as f64;

        min.push(day_min.to_string());
        max.push(day_max.to_string());
        avg.push(day_avg.to_string());
    }

    let final_data = DaysReturn {
        avg,
        min,
        max
    };

    return serde_json::to_string::<DaysReturn>(&final_data).unwrap();
}
