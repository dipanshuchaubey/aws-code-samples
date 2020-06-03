## Upload Files to an AWS S3 Bucket using Node.js

The `upload` method of S3 class requires four parameters:

- `bucket` - The bucket name in which the file has to be stored.

  - If you want to save the file into a sub directory of your bucket than follow this syntax:
    ```bash
    bucket: 'path/to/dir/filename.jpg'
    ```

- `key` - It is the filename of the document uploaded.

- `Body` - Location of file / Raw file, which has to be uploaded.

- `ACL` - It is the file permissions paramter.
  - Here are some ACL params that can be passed as a string:

![ACL Params](https://i.ibb.co/BCrqDFR/AWS-S3-ACL-png.jpg)

### References

For advanced methods take reference from [offical AWS docs.](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-creating-buckets.html)

Files can also be uploaded to s3 using AWS S3 Console [using these instrunctions.](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/upload-objects.html)
