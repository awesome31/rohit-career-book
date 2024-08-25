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
