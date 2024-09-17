# Virtualization

## Before Virtualization

Each computing system consists of physical resources such as CPU and memory, network devices and other storage devices. Without virtualization the only piece able to directly interact with the hardware was the operating system. The operating system worked in privilidged mode, or a part of it does (which is called the kernel). Application softwares work in user mode or unprivilidged mode. They are not able to directly interact with the hardware and have to do a system call to the operating system to interact with the hardware.

In Summary, one computing system had one operating system and many applications interacting with the operating system.

## Introducing Virtualization

The idea was to run, multiple operating systems with priviledged mode on the same hardware. In the initial years, virtualization was really inefficient and virtualization had to be done at software level.

### Emulated Virtualization

The very first way of virtualization was to create something called virtual machines. These virtual machines have a dedicated logical CPU and memory that they can use to operate on. In emulated virtualization, there still IS a host operating system but the virtual machines have their operating system. The VMs operating system talks to the host operating system using binary translation. This software level emulation is REALLY slow because the operating system still assumes that its working in priviledge mode and binary translation needs to happen.

### Para Virtualization

Para virtualization was a way to address the problem of slow translations. With Para Virtualization, the virtual machine's OS is modified to make it aware about the hypervisor (host OS) so that it can make calls directly to the hypervisor.

### Hardware Assisted Virtualization

In this type, the hardware resources such as CPU become aware of the fact that virtualization exists. In this way the VMs OS directly talks to the CPU but the CPU redirects them to the Hypervisor.

### SR-IOV

Networks cards and everything is aware about virtualization. There is no translation happening.
