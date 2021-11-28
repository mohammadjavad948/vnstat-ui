use std::process::Command;

fn main(){
    let out = Command::new("vnstat")
        .arg("--json")
        .arg("-d")
        .arg("-i")
        .arg("wlp2s0")
        .spawn()
        .expect("err");
}
