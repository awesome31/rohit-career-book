# Understanding Storage in AWS

## Storage Referesher

### Key Terms

- Direct attached storage: Storage on the EC2 Host, like the instance storage.
- Network attached storage: These are volumes that are delivered over the network like EBS (Elastic Block Storage)
- Ephemeral storage: Temporary storage.
- Persistent storage: Long term storage, lives on past the lifetime of an instance.
- Block Storage: Block storage is a type of commonly used storage. Here we have a block volume and a number of blocks that store data. Block storage is unstructured and its the job of the OS to make the data the way it is.
- File Storage: This type of storage is structured and preserves the heirchial structure of the data.

### Storage Performance

1. I/O Size.
2. IOPS (Input Output per second)
3. Throughput (Number of operations per second) (mb/s)

```JSON
If 16KB is the IO Size and 100IOPS then throughput is 1.6mb/s
```
