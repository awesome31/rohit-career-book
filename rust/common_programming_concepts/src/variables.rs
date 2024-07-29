/**
 * Understanding Variables in Rust:
 * 
 * 1. By default variables are immutable in Rust. 
 * 2. We can make variables mutable by explictly adding the 'mut' keyword.
 * 3. With variables defined with let, the types can be inferred by the compiler.
 * 4. We can define constants too in rust using the 'const' keywords. constants are ALWAYS immutable and they can be defined in the global scope.
 * 5. The naming convention for constants in UPPER_CASE.
 * 6. Shadowing means redeclaring the variables again using the let keyword again. 
 * 7. With shadowing you can also change the type of the variables.
 */

 const THREE_HOURS_IN_SECONDS: i32 = 60 * 24 * 3;

 pub fn learn_variables() {
     //Mutable vs Immutable
     let mut x = 5;
     println!("The value of x is {x}");
     x = 6;
     println!("The value of x is {x}");
     println!("The value of 3 hours in seconds is {THREE_HOURS_IN_SECONDS}");
 
     //Shadowing
     let y = 64;
     let y = y + 1;
 
     {
         let y = y + 2;
         println!("The value of y is {y}");
     }
 
     println!("The value of y is {y}");
 }