/**
 * Control flow if expressions
 * 1. Like any programming language we have concepts of if, else if and else.
 * 2. IF is an expression in Rust and can be assigned to a variable.
 * 3. We cannot return differently types expression in different arms of an IF statement.
 */

pub fn learn_control_flow() {
    let number = 12;
    if number < 7 {
     println!("Number is less than 7")
    } else {
     println!("Number is greater than 7")
    }
 
    let condition = true;
    let number = if condition {5} else {6};
    println!("{number}")
 }
 
 /**
  * Control flow loops
  1. We have 3 types of loops in Rust, loop, while and for.
  2. loop keyword is used to create an infinite loop. We can use break to break out of the loop and continue to skip the current iteration.
  3. We can use loop labels to break out of a specific loop.
  4. We can use while loop to loop over a condition.
  */
pub fn learn_control_flow_loop() {
    let mut counter = 0;

    let new_value = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2;
        }
    };

    println!("{new_value}");

    'counting_up: loop {
        let mut counter = 0;
        loop {
            counter += 1;
            if counter == 10 {
                break 'counting_up;
            }
        }
    };

    let mut counter = 3;
    while counter != 0 {
        println!("{counter}");
        counter -= 1;
    }
    
    let arr = [10, 20, 30, 40, 50];

    for element in arr {
        println!("{element}");
    }

    //We can even use for loops to loop over a range of numbers. The syntax 1..4 creates a range.
    for i in 1..4 {
        println!("{i}");
    }
}