---
outline: deep
---

# Installation

Strawhouse command line interface (CLI) can be installed using pre-built binary or building from source.

## Installing

### Using pre-built binary

Currently, pre-built binary only supported Intel-based macOS which planned to support ARM-based macOS, Linux, and Windows
in the future. The installation steps are as follows:

1. Download the latest release from [GitHub Releases](https://github.com/strawstacks/strawhouse/releases) or using the following command:
    ```shell
    sudo wget -O /usr/local/bin/strawc https://github.com/strawstacks/strawhouse/releases/download/v0.1.2/strawc_darwin_amd64
    ```
   > Please replace command with latest release version and matching architecture.

2. After downloading the binary, change the permission to executable:
    ```shell
    sudo chmod +x /usr/local/bin/strawc
    ```
   
3. Verify the installation by running the following command:
    ```shell
    strawc --help
    ```

### Building from source

To build from source, you need to have Go installed in your system. The steps are as follows:

1. Clone repository:
    ```shell
    git clone https://github.com/strawstacks/strawhouse.git
    ```
   
2. Enter directory and checkout latest release:
    ```shell
    cd strawhouse
    git checkout v0.1.2
    ```
   > Please replace version with latest release version referred from [GitHub Tag](https://github.com/strawstacks/strawhouse/tags)

3. Build the CLI:
    ```shell
    go build -o .local/strawc ./strawhouse-command
    ```
   
4. (optional) Copy binary to `/usr/local/bin`:
    ```shell
    sudo cp .local/strawc /usr/local/bin
    ```
   
5. Verify the installation by running the following command:
    ```shell
    strawc --help
    ```
   
## Setting up

For the setup, you need to set backend key, backend address, and secure mode. The configuration can be set using the following command:
```shell
$ strawc config set --name key
Enter value: a1b2c3d4e5f6g7h8i9j0 # backend key

$ strawc config set --name server
Enter value: localhost:3001 # backend proto address

$ strawc config set --name secure
Enter value: y # y for secure, n for insecure
```

And done! You can start using the CLI to interact with the backend using following [Command Reference](/command/reference).
