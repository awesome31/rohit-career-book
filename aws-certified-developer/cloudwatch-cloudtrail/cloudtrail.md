# CloudTrail

CloudTrail is a product that is used to log actions in AWS. By default 90 days of events are stored. There are 2 types of events that are a part of cloudtrail, management events and data events.

1. Management Events: These are events that are actions done to create or delete or modify resources in an AWS account.
2. Data Events: These are events that are actions to upload or use an AWS service.

By default, only management events are logged in an AWS account, since the volume of data events is usually very high.

## CloudTrail Trail

Trail is a unit inside CloudTrail to log actions. A trail in CloudWatch can be a region based trail or a global trail. If the service, that is sending the logging data in region scoped, then the trail will be available only on that region. All the logs are stored in a bucket in S3. We can also make sure the logs are stored in CloudWatch logs so that we can use metric filters.

1. CloudTrail is enabled by default and it stores 90 days history data.
2. Trails are how we can configure S3 and CloudWatch logs.
3. Trails only store management events by default. If we need to log data events, we have to pay extra.
4. IT IS NOT REALTIME.
