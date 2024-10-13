---
outline: deep
---

# Configuration

Strawhouse backend is configured using a YAML file or environment variables. The configuration file can be used by
specifying the path using the `--config` flag, which recommends using path `/etc/strawhouse/backend/config.yaml`. If the
flag is not specified, backend will fallback to environment variables.

## Example configuration file

```yaml
webListen: [ "tcp", ":3000" ]
protoListen: [ "tcp", ":3001" ]
dataRoot: /var/lib/strawhouse/data/
pogrebPath: /var/lib/strawhouse/pogreb/
key: a1b2c3d4e5f6g7h8i9j0
```

## Configuration options

### Web Listen

- YAML key: `webListen`
- Environment variable: `STRAWHOUSE_WEB_LISTEN`

The address to listen for HTTP server. The value should be an array of two strings, the first string is the network
type (refer to [net.Dial](https://pkg.go.dev/net#Dial) for supported network types), and the second string should be the
address to listen on.

Example:

- `["tcp", ":3000"]` Listen on all interfaces on port 3000
- `["tcp6", "[::]:3000"]` Listen on all IPv6 interfaces on port 3000
- `["unix", "/var/run/strawhouse.sock"]` Listen on Unix socket

### Proto Listen

- YAML key: `protoListen`
- Environment variable: `STRAWHOUSE_PROTO_LISTEN`

The address to listen for gRPC server. The value should is in same format as [Web Listen](#web-listen).

### Data Root

- YAML key: `dataRoot`
- Environment variable: `STRAWHOUSE_DATA_ROOT`

Root directory to store data files. The directory should be writable by the backend process and in the inode-supported
file system.

### Pogreb Path

- YAML key: `pogrebPath`
- Environment variable: `STRAWHOUSE_POGREB_PATH`

Root directory to store Pogreb database files, used by internal operations (e.g. store metadata). The directory should be writable by the backend process.

### Key

- YAML key: `key`
- Environment variable: `STRAWHOUSE_KEY`

Secret key used to sign the token for stateless access. Formatted as base64 encoded 48-byte key, can be generated using `openssl rand -base64 48`.