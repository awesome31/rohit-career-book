# AWS Accounts

An AWS account is a container that contains identites and resources. An AWS account is created with a combination of a unique email address and credit card. When an AWS account is created, an account root user is created automatically with the email ID provided. Account Root User has unrestricted access to the account.

We can create identities in the AWS account. These indentities are created using a service called Identity and Access Management (IAM). We can create users groups and roles using IAM. The key thing to remember is that by default, each identity has no access to do anything on an AWS account. Each permission has to be given explicitly.

## Multi Factor Authentication

A factor in cyber security is something that can be used to prove identity:

1. Knowledge: Something that you know, username and password.
2. Possession: Something that you own, MFA apps.
3. Inherent: Something that you are, fingerprint or face scan.
4. Location: Where the network is.

AWS supports multi factor authentication using MFA devices. It is always good practice to create a budget along to monitor your spends and send alerts if the usage of resources on AWS exceeds the budget specified.

## Public vs Private Services

This distinction between public and private resources is not from a permission point of view but from a networking point of view. In AWS there are 3 zones as opposed to the popular belief of 2 zones.

1. PUBLIC Internet Zone: This is the internet zone that can be accessed from anywhere in the world.
2. Private AWS Zone: This is the zone which is under a Virtual Private Cloud system and any service sitting in this zone cannot access the public internet or vice versa unless the correct permissions are given.
3. Public AWS Zone: This is the zone where the services can talk to the public internet and vice versa.

Just to get more clarity, suppose we create a new EC2 instance in the VPC. Unless we explicitly give that EC2 instance a public IP address, the instance cannot access the internet directly. The moment I assign a public IP address, the instance is projected in the Public AWS Zone and can talk to the internet.

This distinction between the Public and Private Services is important.

## AWS Regions, Edge Locations and Availability Zones

1. AWS regions are places in the world where the infrastructure of AWS is located. By infrastructure, I mean the hardware resources required to make the cloud system work. AWS regions contain all the hardware resources required for the region wide services like Databases, Compute. AI, Analytics etc.

2. AWS Edge locations on the other hand are generally used for Content distribution. Companies like Netflix or Jio need these edge locations to provide low latency outputs to the end users. As guessed, the number of edge locations is far greater than the number of regions.

3. Things to remember when we talk about AWS regions as a solutions architect

   1. AWS regions are 100 percent isolated from any disasters. This makes the systems extremely fault tolerant.
   2. AWS regions are geopolitically isolated. The governance and the rules of the country where the infrastructure is affect the services and the way data is stored.
   3. AWS regions provide locality based performance.
   4. Each region has a dedicated region code and region name.

4. Each AWS region also has something called Availability Zones. Availability Zones are logical separations inside a region and are isolated from each other. If we want to create a resilient system then we can distribute the services we are creating across these Availability Zones.

5. It is important to understand what is the resilience level that each service offers to become a better Solutions Architect:
   1. Global Resilience: These services will almost never fail. IAM and Route53 are some examples.
   2. Region Resilience: These services create duplicate data across AZs to make sure that within a region, if any AZ fails then the system is resilient enough. RDS is an example of such a service.
   3. AZ Resilience: These services are resilient only in a particular AZ..
