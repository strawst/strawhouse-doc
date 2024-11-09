---
outline: deep
---

# Installation

Strawhouse command line interface (CLI) can be installed using pre-built binary or building from source.

## Installing

### Using pre-built binary

1. Download the latest release from [GitHub Releases](https://github.com/strawst/strawhouse/releases) or command:
    ```shell
    sudo wget -O /usr/local/bin/strawc https://github.com/strawst/strawhouse/releases/download/v0.2.0/strawc_darwin_amd64
    ```
   > Please replace command with latest release version and matching architecture.

2. After downloading the binary, change the permission to executable:
    ```shell
    sudo chmod +x /usr/local/bin/strawc
    ```

3. Verify the installation:
    ```shell
    strawc
    ```

### Using Homebrew

1. Tap `pixcee/common` repository:
    ```shell
    brew tap pixcee/common https://gitlab.pixcee.dev/distribute/homebrew-common
    ```

2. Install Strawhouse CLI:
    ```shell
    brew install strawhouse-command
    ```

3. Verify the installation:
    ```shell
    strawc
   ```

### Building from source

To build from source, you need to have [Go](https://go.dev/doc/install) installed in your system.

1. Clone repository:
    ```shell
    git clone https://github.com/strawst/strawhouse.git
    ```

2. Enter directory and checkout latest release:
    ```shell
    cd strawhouse
    git checkout v0.2.0
    ```
   > Please replace version with latest release version referred
   from [GitHub Tag](https://github.com/strawst/strawhouse/tags)

3. Build the CLI:
    ```shell
    go build -o .local/strawc ./strawhouse-command
    ```

4. (optional) Copy binary to `/usr/local/bin`:
    ```shell
    sudo cp .local/strawc /usr/local/bin
    ```

5. Verify the installation:
    ```shell
    strawc
    ```

## Setting up

For the setup, you need to set backend key, backend address, and secure mode. The configuration can be set using the
following command:

```shell
$ strawc config set --name key
Enter value: a1b2c3d4e5f6g7h8i9j0 # backend key

$ strawc config set --name server
Enter value: localhost:3001 # backend proto address

$ strawc config set --name secure
Enter value: y # y for secure, n for insecure
```

And done! You can start using the CLI to interact with the backend using
following [Command Reference](/command/reference).
