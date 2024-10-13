# Reference

Driver featured both stateless signature signing / verification and client API communication. The list of functions provided by the driver are as follows:

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
    "github.com/strawstacks/strawhouse/strawhouse-go"
)

func main() {
    key := "6AnxPZy…"
    host := "localhost:3001"
    st := strawhouse.New(key, host)
    
    _ = st
}
```

```c# [c#]
currently not available
```

:::
