---
outline: deep
---

# Backend Installation

Strawhouse backend can be installed in two ways: standalone and Docker. Standalone installation is recommended for production use, while Docker is recommended for development and testing.

## Standalone

Standalone installation is the recommended way to install the backend, also for production use. It has direct I/O access to the filesystem without any overhead and easy to manage with systemd.

**Requirements**

- Linux, macOS, or UNIX-like system
- Data file system with xattr-supported (ext4, zfs, xfs, btrfs, apfs, etc.)

### Using pre-built binary

1. Download the latest release from [GitHub Releases](https://github.com/strawstacks/strawhouse/releases) or using the following command:
    ```shell
    sudo wget -O /usr/local/bin/strawhousebackd https://github.com/strawstacks/strawhouse/releases/download/v0.1.0/strawhousebackd_linux_amd64
    ```
    > Please replace command with latest release version and matching architecture.
2. Change the permission to executable:
    ```shell
    sudo chmod +x /usr/local/bin/strawhousebackd
    ```
   
3. Create configuration file at `/etc/strawhouse/backend/config.yaml` from [Configuration](/backend/configuration).
4. Create a systemd service file at `/etc/systemd/system/strawhousebackd.service` with the following content:
    ```ini
    [Unit]
    Description=Strawhouse Backend Service
    After=network.target

    [Service]
    Type=simple
    ExecStart=/usr/local/bin/strawhousebackd --config /etc/strawhouse/backend/config.yaml
    Restart=always

    [Install]
    WantedBy=multi-user.target
    ```
5. Enable and start the service:
    ```shell
    sudo systemctl enable --now strawhousebackd
    ```
   
### Building from source

1. Clone repository:
    ```shell
    git clone https://github.com/strawstacks/strawhouse.git
    ```

2. Enter directory and checkout latest release:
    ```shell
    cd strawhouse
    git checkout v0.1.0
    ```
    > Please replace version with latest release version referred from [GitHub Releases](https://github.com/strawstacks/strawhouse/releases)

3. Build protobuf and backend:
    ```shell
    make protoc
    env GOOS=linux GOARCH=amd64 go build -o .local/strawhousebackd ./backend
    ```
   
4. (optional) Copy binary to `/usr/local/bin`:
    ```shell
    sudo cp .local/strawhousebackd /usr/local/bin
    ```
   
5. Continue with step 3 from [Using pre-built binary](#using-pre-built-binary).
   
## Docker

::: warning
Docker installation is intended only for development and **not recommended for production use**, since it has limited I/O access which degrade the production performance.
:::

Official Docker image is available at [GitHub Container Registry](https://github.com/strawstacks/strawhouse/pkgs/container/strawhouse%2Fbackend).

### Using Docker Compose

To use Docker Compose, create `docker-compose.yml` file with the following content:
```yaml
services:
strawhouse:
  image: ghcr.io/strawstacks/strawhouse-backend:latest
  container_name: strawhouse
  ports:
    - "3000:3000"
    - "3001:3001"
  volumes:
    - "./data/:/opt/"
  environment:
    STRAWHOUSE_WEB_LISTEN: tcp,:3000
    STRAWHOUSE_PROTO_LISTEN: tcp,:3001
    STRAWHOUSE_DATA_ROOT: /opt/data/
    STRAWHOUSE_POGREB_PATH: /opt/pogreb/
    STRAWHOUSE_KEY: a1b2c3d4e5f6g7h8i9j0
  restart: unless-stopped
```

Environment variables is referred from [Configuration](/backend/configuration).

Then, run `docker-compose up -d` to start backend.

### Using Docker CLI

To use Docker CLI, run the following command:
```shell
docker run -d --name strawhouse \
  -p 3000:3000 \
  -p 3001:3001 \
  -v $(pwd)/data:/opt/ \
  -e STRAWHOUSE_WEB_LISTEN=tcp,:3000 \
  -e STRAWHOUSE_PROTO_LISTEN=tcp,:3001 \
  -e STRAWHOUSE_DATA_ROOT=/opt/data/ \
  -e STRAWHOUSE_POGREB_PATH=/opt/pogreb/ \
  -e STRAWHOUSE_KEY=a1b2c3d4e5f6g7h8i9j0 \
  ghcr.io/strawstacks/strawhouse-backend:latest
```

Environment variables is referred from [Configuration](/backend/configuration).

## Homebrew

Currently, Homebrew formula is not available. Homebrew support is planned in roadmap.