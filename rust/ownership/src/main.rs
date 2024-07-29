/**
 * Ownership is the most important concept in Rust. It is the way Rust manages memory.
 * 1. Each value in Rust has a variable that is its owner.
 * 2. There can only be one owner at a time.
 * 3. When the owner goes out of scope, the value will be dropped.
 * 
 * Rust has a special trait called Copy which is used for stack only data types.
 */

fn main() {
    let mut x = String::from("Hello World"); //This is string type.
    x.push_str("!");
    println!("{}", x);

    let s1 = String::from("Hello World from s1");
    let s2 = s1; //This is not called a shallow copy. This is called a move. s1 is no longer valid.

    // println!("{}", s1); This is not allowed in Rust. It will throw an error.
    let s1: String = String::from("Hello World from s1C");
    let s2 = s1.clone(); //This is called a deep copy. s1 is still valid.

    println!("s1: {}, s2: {}", s1, s2);

    let s3 = String::from("Hello World from s3");
    let len = calculate_length(&s3);

    println!("The length of '{}' is {}", s3, len);

    let mut s4 = String::from("Hello World from s4");
    change(&mut s4);

    println!("{}", s4);
}

//We call the action of passing a reference to a value borrowing. By default, borrows are immutable.
fn calculate_length(s: &String) -> usize { //These & are references. They allow you to refer to some value without taking ownership of it.
    s.len()
}

/**
 * Mutable references:
 * 1. You can only have one mutable reference to a particular piece of data in a particular scope.
 * 2. References must always be valid. We cannot have dangling references.
 */
fn change(s: &mut String) {
    s.push_str("What is life?");
}

//This piece of code will not compile because the reference is dangling.
// fn dangling() -> &String {
//     let s = String::from("Hello World from dangling");
//     &s
// }