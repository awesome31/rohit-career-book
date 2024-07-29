/**
 * There are 2 type categories that we have on Rust. One is scalar and one is Compound.
 */

 pub fn learn_data_types() {
    learn_scalar_types();
    learn_compound_types();
}

/**
 * Scalar types:
 * 1. Integers: They can be signed or unsigned. Also they can be of 8, 16, 32 or 64 bits.
 * 2. Floating types: These are number with a fractional part in them. Floating types are always signed.
 * 3. Boolean types: These are true or false values and are represented using 1 byte.
 * 4. Character type: These represent a 4 byte unicode value and are used with single quotes.
 */
fn learn_scalar_types() {
    let a = 3;
    let b = 5.44;
    let c = true;
    let d = 'a';

    println!("The value of a is {a}");
    println!("The value of a is {b}");
    println!("The value of a is {c}");
    println!("The value of a is {d}");
}

/**
 * Compound types:
 * 1. Tuples: They are tuples which cannot grow in size when declared. Tuples with no elements is called a unit.
 * 2. Arrays: They are fixed sized list of similar typed elements. (unlike other programming languages.)
 */
fn learn_compound_types() {
    let tuple = (3, 3.2, 'a');
    let first_element = tuple.1;
    println!("The first element of this tuple is {first_element}");

    let array = [1, 2, 3, 4, 5];
    let third_element = array[2];
    println!("The third element of this array is {third_element}")
}