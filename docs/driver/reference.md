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
  st, err := strawhouse.New(&strawhouse.Option{
    Host: "6AnxPZy…",
    Key: "localhost:3001",
    Secure: false,
  })
  if err != nil {
      log.Fatalf("failed to initialize strawhouse: %v", err)
      return
  }
    
  _ = st
}
```

```c# [c#]
currently not available
```

:::

**Options**

| Name     | Type     | Description                                | Example          | 
|----------|----------|--------------------------------------------|------------------|
| `host`   | `string` | Address of the backend proto/gRPC address  | `localhost:3001` |
| `key`    | `string` | Key specified in the backend configuration | `6AnxPZy…`       |
| `Secure` | `bool?`  | Establish gRPC connection over SSL         | `false`          |