# Virtual Private Cloud

## IP Addressing Primer

IP Addresses are layer 3 addresses that are used to uniquely identify a digital entity. IP Addresses are represented using dotted decimal notation. Each IP address has 2 parts: Network ID and Host ID. These IDs are figured out using the CIDR or the subnet mask.

CIDR or Classless InterDomain Routing is a way for addresses to use variable length subnet masks instead of static octet base Subnet masks. This helps us in optimising the hosts and the networks.

## Overview

1. VPCs are configured in one region. One region can have multiple VPCs.
2. Each AZ in a region can have private subnets inside a VPC.
3. A CIDR value is set at the VPC level and each private subnet can have a subset of the CIDR.
   For example:
   VPC can have CIDR of 10.0.0.0/16 and the subnets can have values 10.0.1.0/24, 10.0.2.0/24.

4. Its analagous to having your own data center inside AWS.
5. We can launch EC2 instances or other resources inside our VPC. A CIDR needs to be specified for a VPC.
6. A VPC Spans all AZs. A default VPC is always created by AWS.

We should create Bigger CIDR blocks and smaller subnets. For high availability systems, its best to split resources across subnets.
