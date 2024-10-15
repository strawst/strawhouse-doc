# Feed Upload

Feed realtime upload event to backend, the data will be streamed to output.

```shell
strawc client feed-upload --directory <directory>
```

## Options

| Option        | Description                   | Value     |
|---------------|-------------------------------|-----------|
| `--directory` | Directory path prefix to feed | `/photo/` |

## Example

```shell
$ strawc client feed-upload --directory /photo/
{
  "name": "_DSC_0001.jpg",
  "directory": "/photo/",
  "size": 24413698
}
{
  "name": "_DSC5090.jpg",
  "directory": "/photo/album/1/img/",
  "size": 9281236,
  "mtime": 1728934388
}
```
