pub mod variables;
use variables::learn_variables;

pub mod data_types;
use data_types::learn_data_types;

pub mod functions;
use functions::learn_functions;

pub mod control_flow;
use control_flow::learn_control_flow;
use control_flow::learn_control_flow_loop;


fn main() {
    learn_variables();
    learn_data_types();
    learn_functions();
    learn_control_flow();
    learn_control_flow_loop();
}
