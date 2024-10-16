# Config

Config is a command that allows you to view and modify the configuration of the CLI.

1. Set backend key
    ```shell
    strawc config set --name key
   ```
   > You may be prompted to enter device password as the key is stored in [Keychain](https://support.apple.com/guide/keychain-access/welcome/mac).
   
2. Set backend address
    ```shell
    strawc config set --name server
    ```
   > The backend's proto address (e.g. `localhost:3001`, `strawhouse.example.com:443`).
   
3. Set secure mode
    ```shell
    strawc config set --name secure
    ```
   > Valid values are `y` for secure and `n` for insecure.