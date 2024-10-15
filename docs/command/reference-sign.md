# Sign

Sign is a command to sign access token for stateless access.

```shell
strawc sign --action <action> --mode <mode> --path <path> --recursive <recursive> --expire <expire>
```

## Options

| Option        | Description                    | Value                                    |
|---------------|--------------------------------|------------------------------------------|
| `--action`    | Action that permitted to token | `get` or `upload`                        |
| `--mode`      | Mode access                    | `file` or `directory`                    |
| `--path`      | Path to access                 | Granted file path or directory prefix    |
| `--recursive` | Recursive access               | `1` or `0` used only in `directory` mode |
| `--expire`    | Token expiration time          | Time in seconds                          |

Please referred full documentation on [Signature Reference](/driver/reference-signature).

## Example

```shell
$ strawc sign --action get --mode file --path /path/to/file.txt --recursive 0 --expire 3600
AcEAZxe7EKPq8glw2lzLAEc8I8VdDTL3sODX
```
