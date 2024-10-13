# API Reference

## Getting a file

Download a file in the server

- **Endpoint**: `/:filepath`
- **Method**: `GET`

**Query parameters**

| Parameter | Type     | Description                       |
|-----------|----------|-----------------------------------|
| `t`       | `string` | Token to authenticate the request |

**Example**

```sh
curl -X GET http://localhost:3000/path/to/file.txt?t=AcEAZsEs9TDs33vy0NOz9IwacfdPyAY2aj4Q
```

## Uploading a file

Upload a file to the server

- **Endpoint**: `/_/upload`
- **Method**: `POST`
- **Content-Type**: `multipart/form-data`

**Form data**

| Parameter     | Type     | Description                                                 |
|---------------|----------|-------------------------------------------------------------|
| `file`        | `file`   | File to upload                                              |
| `destination` | `string` | Destination path to store the file, start and end with `/`  |
| `attribute`   | `string` | Attributes to store with the file as base64-encoded payload |
| `token`       | `string` | Token to authenticate the request                           |

**Example**

```sh
curl -X POST \
    -F "file=@/home/user/cat.png" \
    -F "destination=/path/to/store/" \
    -F "attribute=eyJ1c2VyIjoiYWRtaW4" \
    -F "token=AcEAZsEs9TDs33vy0NOz9IwacfdPyAY2aj4Q" \
    http://localhost:3000/_/upload
```