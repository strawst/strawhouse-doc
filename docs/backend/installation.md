---
outline: deep
---

# Installation

Strawhouse backend can be installed in two ways: standalone and Docker. Standalone installation is recommended for production use, while Docker is recommended for development and testing.

## Standalone

Standalone installation is the recommended way to install the backend, also for production use. It has direct I/O access to the filesystem without any overhead and easy to manage with systemd.

**Requirements**

- Linux, macOS, or UNIX-like system
- Data file system with inode-supported (ext4, zfs, xfs, btrfs, apfs, etc.)

### Using pre-built binary

1. Download the latest release from [GitHub Releases](https://github.com/strawstacks/strawhouse/releases) or using the following command:
    ```shell
    sudo wget -O /usr/local/bin/strawhousebackd https://github.com/strawstacks/strawhouse/releases/download/v0.1.0/strawhousebackd_linux_arm64
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
    ExecStart=/usr/local/bin/strawhousebackd
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
    env GOOS=linux GOARCH=arm64 go build -o .local/strawhousebackd ./backend
    ```
   
4. (optional) Copy binary to `/usr/local/bin`:
    ```shell
    sudo cp .local/strawhousebackd /usr/local/bin
    ```
   
5. Continue with step 3 from [Using pre-built binary](#using-pre-built-binary).
   
## Docker

Currently, Docker image is not available. Docker support is planned in roadmap.

## Homebrew

Currently, Homebrew formula is not available. Homebrew support is planned in roadmap.