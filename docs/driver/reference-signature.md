# Signature SDK Reference

Signature is a SDK for signing and verifying tokens. The token mechanism is stateless, so all functions is performed
locally based on provided key.

## Signing a token

Sign a new token with the provided payload.

::: code-group

```go [go]
st := strawhouse.New(…)
action := strawhouse.SignatureActionUpload
mode := strawhouse.SignatureModeFile
path := "/a/b/c"
recursive := true
expired := time.Now().Add(time.Duration(20) * time.Second)
attr := []byte("uploaderId:1234")
token := st.Signature.Generate(action, mode, path, recursive, expired, attr)
fmt.Println(token)
```

:::

This should output a token string:

```shell
AcEAZwykrTDs33vy0NOz9IwacfdPyAY2aj4Q
```

**Parameters**

| # | Name        | Type                   | Description                                                                          |
|---|-------------|------------------------|--------------------------------------------------------------------------------------|
| 1 | `action`    | `enum:SignatureAction` | Whether signed permission for upload (`upload`) or download (`get`)                  |
| 2 | `mode`      | `enum:SignatureMode`   | Whether signed permission for single file (`file`) or directory (`directory`)        |
| 3 | `path`      | `string`               | Allowed file path (in `File` mode) or allowed directory prefix (in `directory` mode) |
| 4 | `recursive` | `bool`                 | Allow permission to recursive subdirectories or not  (used only in `directory` mode) |
| 5 | `expired`   | `time.Time`            | Token expiration time                                                                |
| 7 | `attr`      | `[]byte`               | Token attribute (optional)                                                           |

For `directory` mode, the `recursive` option is required. The example of permission is shown below:

| Path            | Recursive | Allowed access                          |
|-----------------|-----------|-----------------------------------------|
| /               | `true`    | `/*`,  `/**/*` (all paths)              |
| /               | `false`   | `/*` (e.g. `/cat.jpg`)                  |
| /photo/         | `true`    | `/photo/cat.jpg`, `/photo/2024/dog.jpg` |
| /photo/         | `false`   | `/photo/cat.jpg`                        |
| /docs/research/ | `true`    | `/docs/research/2024/09/whale.txt`      |
| /docs/research/ | `false`   | `/docs/research/giraffe.webp`           |
