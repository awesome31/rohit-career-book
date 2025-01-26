# Simple Storage Service

S3 buckets are created in one region.

## S3 Security (Resource Policies and ACLs)

There is one point that we always need to remember: S3 is private by default. No one can access a bucket or an object inside an AWS account apart from the root user.

### S3 Bucket Policies

- S3 bucket poilicies are a type of resource policy attached to a specific bucket. Resource policies are like identity policies, but they can refer ARNs from same account OR different accounts (In an organisation). With resource policy, we can allow/deny anonymous principals.

- Resource poilicies always have a key called "Principal" which controls which identity is affected by the resource policy.

### ACLs (Access Control Lists)

ACLs are legacy. They should not be used.

### Block Public Access

There were a lot of disasters and data leaks happening. While creating a bucket we have to explicitly uncheck the block public access setting to make sure that the buckets can be read by anonymous principals.

## S3 Static Website Hosting

- By default we can access S3 objects using the AWS API. Static website hosting allows access via HTTP.
- Index and Error documents are set and a website endpoint is created.

Apart from hosting static websites like blogs, this feature can be used for the following:

1. Offloading: Any static data can be put into S3 and dynamic data can be rendered from the compute service that we use.

2. Out of band pages: Pages like maintainence pages or error pages.

## Object Versioning and MFA Delete

Object versioning is disabled by default. It can be enabled through the API, but once enabled, it cannot be disabled again. It can only be suspended.

Versioning lets you store multiple versions of objects within a bucket. Operations which modify objects generate a new version instead of overriding the exisitng version. If versioning is enabled to a specific bucket then an ID is set for each version. Please remember these things:

1. Cannot be switched off. It can only be suspended.
2. Space is consumed by all the versions and billing happens according to all versions.
3. When we enable versioning, we can also enable MFA to change the bucket versioning state or to delete the versions.
4. Whenever we delete an object in a versioned bucket, the object is not actually deleted. Only a delete marker is added which essentially is a version of the object.

## S3 Performance Optimisation

We have a method called Single PUT Upload that delivers data to S3 in a single stream. This kind of transfer is NOT acceptable even for fast networks, let alone for slow ones. Only 5GB of data is allowed. The solution to this is multi-part upload. Multipart upload sends data in a chunked way. 10,000 max parts are allowed. Each part can fail and be restarted indivisually.

**S3 transfer acceleration** is a way to transfer data using the AWS edge locations instead of using the public internet.

## S3 Object Encryption

Buckets are NOT encrypted. Objects are. When we talk about encryption in S3, we are talking about encryption at rest and not encryption that happens during the transit of data (Which is done by default). There are 2 types of encryption that happens on S3:

1. Client Side Encryption: Here the encryption, key management and compute service cost happens on the client and S3 is used purely for storage of the object.

2. Server Side Encryption: Here the encryption happens once the data reaches S3 in AWS's server.

**Its is important to remember that SSE is mandatory in S3.**

There are 3 types of SSE that can happen. Lets discuss them one by one.

### SSE-C (Server Side Encryption with Customer Provided Keys)

In this type of SSE, the client is responsible to managing the keys whereas S3 is responsible for performing the cryptographic operations. The client sends the plaintext and the key to the S3 server and the server does the encryption/decryption. They key provided is destroyed by S3 and it only stored a hash version of the key.

### SSE-S3

In this type of SSE, S3 is responsible for managing the keys and also the cryptographic operations. For most situations, this is the best kind of SSE to use. The downside to this approach is that you cannot restrict the admin user of S3 to view data. This full and open access might not be ideal for some environments. AES-256 is used as the encryption algorithm.

### SSE-KMS (Server Side Encryption with Key Management Service)

Instead of S3 managing keys, KMS manages the keys. We can create customer managed keys to encrypt and decrypt objects in S3 instead of relying on S3 to store this data. This type is perfect for scenarios where role separation needs to be done.

## S3 Bucket Keys

In the general case, without bucket keys, each time a put operation happens on an S3 bucket, to encrypt each object S3 has to do an API call to KMS to generate a DEK, which inturn is used to encrypt the data of the object.

S3 bucket keys are way to reduce this operation. For a limited time, a bucket key is generated by KMS and this bucket key is used for encryption within S3 instead of doing API calls to KMS. CloudTrail events do not get logged at object level if we enable bucket keys.

## S3 Storage Classes

Storage classes are different types of methods to store S3 objects. Each storage class has a different pricing model. The following are the storage classes.

### S3 Standard

1. 99.999999999% availability.
2. Stored across atleast three AZs.
3. Should be used for frequently accessed data which is important and non replaceable data.
4. We are billed for the storage and the requests. No specific retrieval fee.
5. Has a millisecond of first byte latency.
6. Can be made publically available.

### S3 Standrd IA (Infrequent Access)

Exactly same as S3 Standard. The only difference is that storage cost is almost half of S3 standard but retrieval cost is higher. There is a retrieval fee for this storage class. Should be used for data which is long lived but not frequently accessed.

### S3 One Zone IA

Similar to Standard IA but stored in a single AZ. Should be used for data which is long lived but not frequently accessed. Should be used for data which is not critical.

### S3 Glacier Instant

Similar to S3 Standard IA but the access of data if even less frequent. The retreival is almost instant though.

### S3 Glacier - Flexible Retreival

We need to think of these objects as cold object stored. They cant be made public, neither are they instantly available. First byte latency is minutes to hours.

### S3 Glacier Deep Archive

Data in a frozen state. First byte latency is hours or days.

### S3 Intelligent Tiering

Intelligent tiering is a way to automate the tier in which an object lives. We have frequent access, infrequent access, archive instant access, archive access and deep archive.

## S3 Lifecycle Configuration

- Lifecycle Configuration is a set of rules that consists of actions that can be done based on certain conditions.
- The actions performed are of 2 types:
  - Transition action: Change the storage class.
  - Expiration action: Expire or add a delete marker to objects.

If the objects that we are storing in our bucket has a defined lifecycle then setting up the lifecyle configuration makes sense. Minimum of 30 days in S3 standard is required before transition.

## S3 Replication

Replication is a way to tell S3 to replicate the objects or buckets created. There are two types of replication that can be done:

1. Cross Region Replication: In this type of replication, the source and the destination buckets are in different regions.
2. Same Region Replication: In this type, the source and the bucket destination buckets are in the same region.

For replication in S3, the replication configuration is setup in the source bucket. There are a few options that we have for the configuration:

1. Destination bucket.
2. IAM role to assume when replicating.

In same account replication, the IAM role is automatically trusted by the AWS account within which the role is created. For cross account replication, its important to know that the destination bucket needs to attach a bucket policy that trusts the IAM roles of the other account.

Lets talk about some replication options:

1. Ownership.
2. If we want to replicate all objects or a subset of objects.
3. Which storage class the destination bucket should be stored in. By default it maintains the storage class of the source destination.
4. Replication Time Control. When this is set to true, the replication happens within 15 seconds.

Also, lets talk about the S3 considerations:

1. By default, replication is not retroactive and versioning needs to be ON. Batch replication can be used to replace existing objects.
2. One-way replication
3. Can do replication with any kind of encryption that we use.
4. Source bucket owner needs permissions to objects.
5. Glacier and Glacier Deep Archive are not replicated.

## S3 Presigned URLs

Let us talk about the problem that S3 presigned URLs try to solve. There are a lot of usecases where an anonymous principal needs access to an object sitting in an S3 bucket. This might be temporary access that is given. There are 3 ways to solve this:

1. Give the principal an AWS identity.
2. Give the principal AWS credentials.
3. Make the bucket public.

None of the 3 are ideal. This is the problem presigned URLs try to solve for.

### Most common scenario for Presigned URLs

Suppose I have a client application and a server that provides the backend for this application. I can create an IAM User identity for this application and let this application generate presigned URLs for a specific object that the client wants to access.

### Things to know

1. You can create a presigned URL for an object you have no access to.
2. When using the URL, the permissions match the identity which generated it.
3. Access denined could mean the generating ID never had access... or doesn't now.
4. Don't generate with a role, URL stops working when temporary credentials expire.
5. Presigned URLs have the authentication and authorization of the identity that generated the URL right NOW.

```
aws s3 presign s3://animals4lifemedia12121/aotm.jpg --expires-in 60
```

## S3 Select and Glacier Select

There are some usecase where we want only a part of an object instead of the whole object. For example, in cases like logs that are stored, if we want to only get the first 1000 lines of a CSV file. S3 select and Glacier select help us to write SQL like statement to filter the data and send it to the client.

## S3 Events

S3 Event notification is a way we can listen to different actions happening on an object or a bucket and react to it. We can listen to actions like:

1. Object creation.
2. Object deleltion.
3. Object restoration from deep archive or glacier storage classes.
4. Bucket replication.

The way to react to these actions is to either put an event in the SQS queue or an SNS topic or run a lambda function. All these services need to have the correct resource policy attached to it so that S3 as a principal is able to access them.

## S3 Access Logs

S3 Access logs can be setup on a source bucket and the logs can be store in a target bucket. It logs the access of the source S3 bucket.

## S3 Object Lock

Its a feature of S3 objects in which the object is locked and can be written once and read more than one times. (WORM)

There are different modes in which object lock feature can be enabled:

1. Retention Compliance => In this mode days or years are set for an object to be locked. Once set, even the account root user cannot change, delete or modify an object untill the retention period expires.

2. Rentention Governance => Same as Compliance but a little less restrict. You can add special permissions.

3. Legal Hold => This is just a lock between on and off. Cannot delete or modify an object if its on.

## S3 Access Points

1. Simplifies managing access to S3 buckets and objects.
2. We try and create multiple access points and each access point can have its own policy and own endpoint address instead of the default S3 address.

```
aws s3endpoint create-access-point
```
