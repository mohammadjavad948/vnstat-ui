use std::process::Command;

fn main(){
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
}
