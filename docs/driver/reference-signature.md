# Signature SDK Reference

Signature is a SDK for signing and verifying tokens. The token mechanism is stateless, so all functions is performed
locally based on provided key.

## Signing a token

Sign a new token with the provided payload.

::: code-group

```go [go]
st := strawhouse.New(…)
mode := strawhouse.SignatureModeFile
action := strawhouse.SignatureActionUpload
depth := 2
expired := time.Now().Add(time.Duration(20) * time.Second)
path := "/a/b/c"
attr := []byte("Hello, World!")
token := st.Signature.Generate(1, mode, action, uint32(depth), expired, path, attr)
fmt.Println(token)
```

:::

This should output a token string:

```shell
AcEAZwykrTDs33vy0NOz9IwacfdPyAY_aj4Q
```

**Parameters**

| # | Name      | Type                   | Description                                                                   |
|---|-----------|------------------------|-------------------------------------------------------------------------------|
| 1 | `version` | `int`                  | Token version, exclusively to 1                                               |
| 2 | `mode`    | `enum:SignatureMode`   | Whether signed permission for single file (`file`) or directory (`directory`) |
| 3 | `action`  | `enum:SignatureAction` | Whether signed permission for upload (`upload`) or download (`get`)           |
| 4 | `depth`   | `int`                  | Depth of directory from root to be fixed, ignored for `file` mode             |
| 5 | `expired` | `time.Time`            | Token expiration time                                                         |
| 6 | `path`    | `string`               | Destination path                                                              |
| 7 | `attr`    | `[]byte`               | Token attribute (optional)                                                    |

For `directory` mode, `get` action: the `depth` is required. The example of depth to permission is shown below:

| Depth | Path   | Allowed access                         | Denied access             |
|-------|--------|----------------------------------------|---------------------------|
| 0     | /      | `/*`, `/a.png`, `/a/b/c.png`           | none                      |
| 1     | /a     | `/a/*`, `/a/cat.png`,`/a/b/z/meow.png` | `/b/dog.png`, `/c.png`    |
| 1     | /a/b/d | `/a/*`, `/a/cat.png`                   | `/dog.png`, `/b/fish.png` |
| 2     | /a/b   | `/a/b/*`, `/a/b/giraffe.png`           | `/a/cat.png`              |

For `directory` mode, `upload` action: the `depth` is ignored. Client can only upload to the specified directory without
any subdirectory as this example:

| Path | Allowed upload     | Denied upload                  |
|------|--------------------|--------------------------------|
| /    | `/a.png`           | `/a/b/c.png`                   |
| /a   | `/a/cat.png`       | `/a/b/meow.png`                |
| /a/b | `/a/b/giraffe.png` | `/a/cat.png`, `/a/b/c/dog.png` |