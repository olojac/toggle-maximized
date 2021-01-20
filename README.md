# Toggle Maximized
Improves maximizing behavior in VS Code

- Toggle maximize editor and terminal with one keybinding.
- Auto maximize embedded editors, like scm side by side diff on focus

## Details
Keybindings:
```json

{
  "command": "workbench.action.toggleMaximizedPanel",
  "key": "alt+z",
  "mac": "alt+z"
},
{
  "command": "toggle-maximized.toggleMaximizedEditor",
  "key": "alt+z",
  "mac": "alt+z",
  "when": "editorTextFocus"
}
```
Copy to your keybinding and change the key if you want a different keybinding.

*Note: the terminal toggle is only using the built-in toggleMaximizedPanel command*

Commands:
* `toggle-maximized.toggleMaximizedEditor`

Settings:
* `toggle-maximized.autoMaximizeEmbeddedEditors`: default: true

## Limitations
The terminal toggle and the editor toggle is not synced as I can't find relable way to
get the toggled state of the terminal, and there is only a toggle command for the terminal.

## Release Notes

### 0.0.1

Initial release


## Build
```sh
yarn install
npm install -g vsce
vsce package
```
