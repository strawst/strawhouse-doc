# Directory List

List file and subdirectory in the directory.

```shell
strawc client directory-list --directory <path>
```

## Options

| Option        | Description                    | Value   |
|---------------|--------------------------------|---------|
| `--directory` | Directory path to list         | `/photo/` |

## Example

```shell
$ strawc client directory-list --directory /photo/
{
  "name": "/",
  "files": [
    {
      "name": "_DSC_0001.jpg",
      "directory": "/photo/",
      "size": 24413698,
      "mtime": 1727255153
    },
    {
      "name": "_DSC5090.jpg",
      "directory": "/photo/album/1/img/",
      "size": 9281236,
      "mtime": 1728934388
    }
  ],
  "directories": [
    {
      "name": "album",
      "path": "/photo/album/"
    },
    {
      "name": "1",
      "path": "/photo/album/1/"
    },
    {
      "name": "img",
      "path": "/photo/album/1/img/"
    },
    {
      "name": "test",
      "path": "/photo/test/"
    }
  ]
}
```
