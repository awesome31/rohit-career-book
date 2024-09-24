# Elastic Block Storage (EBS)

## Architecture

1. EBS is a block storage service in AWS. As we know block storage system consists of volumes and blocks.
2. EBS is an AZ resilient service. It is important to know this.
3. Usually EBS volumes are mounted by the OS using NTFS or any other protocol and EBS volumnes are attached to one EC2 instance (In most cases.). However, EBS volumes are not dependent on the lifecycle of an EC2 instance and can be detached and re attached to other instances. Also, EBS volumes are storage systems over a network.
4. We can create a snapshot of an EBS volume in S3 and store it for others to use.
5. EBS volumes are billed for GB/Month.

## Volume Types

### General Purpose SSD (GP2)

General purpose SSD are the default volume type that is used. The general purpose SSD has a concept of IO credits and buckets. One IO credit is 16kb. There are two things that happen:

1. We do IO operations on the disk. This results in the usage of IO credits.
2. The IO credit bucket keeps refilling. It replinishes or reduces depends on the IO operation.

We have a baseline refilling performance of 100 IOPS. Based on the size of the volume, the refilling performnace increases. For volumes greater than 1TB, the performance is even better. Credit bucket architecture of GP2 is a great innovation.

### General Purpose SSD 3 (GP3)

The baseline performance of GP3, irrespective of the size of the volume is 3000 IOPS and 125MB/s. This means the base price of GP3 is 20 percent cheaper than GP2. We can increase the IO performance of GP3 easily and at max we can do 1000mb/s and 16000 IOPS.

### Provisioned IOPS (io1/2)

There are three types of volumes in this category: io1/2/blockexpress.
Here the performance and IOPS are provisioned by the identity and is irresepctive of the size of the volume. With io/1/2 and exprerss we can go upto 64000 IOPS to 256000 IOPS.
Generally we use these types of volumes in high performance, latency sensitive workloads.

### HDD Based

Hard disk drive. There are 2 types: st1 and sc1

**st1**: Works similar to gp2 in terms of architecture. Max 500 IOPS where one IO credit is 1MB. Frequent Access, Sequential data.

**sc1**: Cold HDD. This is used for fewer scan per day.
