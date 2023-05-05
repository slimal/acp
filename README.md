# Git Add, Commit, Push VSCode Extension

This Visual Studio Code extension simplifies your Git workflow by allowing you to add, commit with a default message, and push your changes to the current project's repository using a keyboard shortcut.

## Features

- Adds all changes to the staging area.
- Commits changes with a default commit message.
- Pushes changes to the remote repository.
- Executes all actions with a single keyboard shortcut.

## Installation

1. Launch Visual Studio Code.
2. Open the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window.
3. Search for "Git Add, Commit, Push".
4. Click the Install button to install the extension.

## Usage

Once the extension is installed, you can trigger the Git Add, Commit, Push command using the following keyboard shortcut:

- **Windows/Linux**: `Ctrl+Shift+G`
- **Mac**: `Cmd+Shift+G`

This will add, commit, and push changes to the current project's Git repository.

## Customization

You can customize the default commit message and keyboard shortcut by modifying the extension's source code. To do this, follow these steps:

1. Clone the repository or download the source code.
2. Open the `src/extension.ts` file.
3. Change the default commit message by modifying the following line:

   ```typescript
   'git commit -m "Your default commit message"'
   ```

4. Open the `package.json` file.
5. Change the keyboard shortcut by modifying the `key` and `mac` properties in the `keybindings` section:

   ```json
   "keybindings": [
       {
           "command": "extension.gitAddCommitPush",
           "key": "ctrl+shift+g",
           "mac": "cmd+shift+g",
           "when": "editorTextFocus"
       }
   ]
   ```

6. Save your changes and build the extension according to the [official documentation](https://code.visualstudio.com/api/working-with-extensions/publishing-extension).

## Contributing

We welcome contributions! Please feel free to submit issues or pull requests for improvements or bug fixes.

## License

This extension is released under the [MIT License](LICENSE).