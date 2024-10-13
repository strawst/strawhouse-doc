# Client SDK Reference

Client provides a set of functions to interact with the backend server using gRPC-backed API.

## Directory Item List

List all the items in the directory.

::: code-group

```go [go]
st := strawhouse.New(…)
resp, err := st.Client.DirectoryList("/a/b/c")
if err != nil {
    log.Fatalf("failed to list directory: %v", err)
}
for _, item := range resp.Items {
    fmt.Println(item)
}
```

:::

This should output a list of items in the directory as follows:

```json
{
  "name": "/test/",
  "files": [
    {
      "name": "Document_2.pdf",
      "directory": "/test/",
      "size": 24413698,
      "mtime": 1727255153
    },
    {
      "name": "Screenshot_2024-09-25_at_9.22.07_PM.png",
      "directory": "/test/",
      "size": 612525,
      "mtime": 1728795250
    }
  ],
  "directories": [
    {
      "name": "photo",
      "path": "/test/photo"
    },
    {
      "name": "test2",
      "path": "/test/test2"
    }
  ]
}
```

**Parameters**

| # | Name   | Type     | Description            |
|---|--------|----------|------------------------|
| 1 | `path` | `string` | Directory path to list |

## Feed Upload Event

Feed an upload event to the backend server.

::: code-group

```go [go]
st := strawhouse.New(…)
closeCh := make(chan struct{})
upload, err := st.Driver.Client.FeedUpload(
    "/a/b/c,
    func(resp *pb.UploadFeedResponse, err error) {
        if err != nil {
            log.Fatalf("err while feeding upload event: %v", err)
            close(closeCh)
            return
        }
        fmt.Println(resp)
    },
)
if err != nil {
    log.Fatalf("failed to feed upload event: %v", err)
    return
}
defer upload.Close()
<-closeCh
```

**Parameters**

| # | Name   | Type     | Description                    |
|---|--------|----------|--------------------------------|
| 1 | `path` | `string` | Directory path prefix to watch |

:::

