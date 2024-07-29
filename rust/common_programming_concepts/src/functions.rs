/**
 * Functions in Rust.
 */
pub fn learn_functions() {
    let x = function_with_parameter(5, 'h');

    println!("{x}")
}

/**
 * Function with paremeters and return value.
 * 1. There are 2 entities in a rust program, statements and expressions.
 * 2. Statements in rust are actions that are done and they do not return any value.
 * 3. Expressions are entities that return a value out of them. They can be function calls, blocks etc.
 * 4. In functions the last expression of the function is set as the return value.
 * 5. We can also explicitly return a value using the return keyword.
 */
fn function_with_parameter(value: i32, unit: char) -> i32 {
    println!("The value with unit is {value}{unit}");

     2
}