# Course Fundamentals and AWS accounts

## AWS Accounts - The Basics

AWS accounts are containers for AWS resources and identities. An AWS account is created using a unique email address and a payment method. The email address that we use to create an AWS account is the account root user and the payment method that is used is called the Billing method. AWS is a pay as you go service where each account is charged for the resources and identities that we use in the account. An AWS account disallows any external user to get into it unless explicity permissions are given.

## Multi-Factor Authentication

Factors are essentially ways to verify an identity. There are 4 types of factors:

1. Knowledge: Something that you know is the correct. (username/Password)
2. Possession: Something that you own. (MFA Device/Token)
3. Identity: Something that you are. (Fingerprint)
4. Location: Something that you are near. (Geolocation)

Multi-Factor authentication is a way to verify your identity by using more than one factor to verify your identity.

## Identity and Access Management Basics
Identity and Access management or IAM is a service that is used by AWS to do these 3 things:

1. Manage Users and Groups
2. Authentication: Verify the identity of the user
3. Authorization: Verify the permissions of the user

Each AWS account has its own copy of IAM and identities created are specific to an AWS account.

## IAM Access Keys

A user can access AWS resources using the AWS Management Console, AWS CLI, AWS SDKs and APIs. To access these resources, a user needs to provide their access keys. Access keys are a combination of an Access Key ID and a Secret Access Key. The Access Key ID is used to identify the user and the Secret Access Key is used to sign requests made to AWS.

IAM username and password and access keys are both long term credential set.