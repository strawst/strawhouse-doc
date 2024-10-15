# Driver SDK Reference

Driver featured both stateless signature signing / verification and client API communication. The list of functions
provided by the driver are as follows:

- [Initialize](/driver/reference#initialize)
- [Signature](/driver/reference-signature)
    - [Sign new token](/driver/reference-signature#sign)
    - [Verify token](/driver/reference-signature#verify)
- [Client](/driver/reference-client)
    - [Directory Item List](/driver/reference-client#directory-item-list)
    - [Feed Upload Event](/driver/reference-client#feed-upload-event)

## Initialize

Initialize the driver with the backend server URL.

::: code-group

```go [go]
package main

import (
  "github.com/strawstacks/strawhouse-go"
)

func main() {
  key := "6AnxPZy…"
  host := "localhost:3001"
  st = strawhouse.New(key, host, &strawhouse.Option{
    Secure: false,
  })
    
  _ = st
}
```

```c# [c#]
currently not available
```

:::

**Parameters**

| Name     | Description                                     |
|----------|-------------------------------------------------|
| `key`    | Key specified in the backend configuration file |
| `host`   | Hostname and port of the backend gRPC address   |
| `option` | Additional options for the driver               |

**Options**

| Name     | Type   | Description                        |
|----------|--------|------------------------------------|
| `Secure` | `bool` | Establish gRPC connection over SSL |