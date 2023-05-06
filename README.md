# LGScratchpad <img src="icon.png" width="32" height="32" alt="Icon">

LGScratchpad is a Visual Studio Code extension that provides a quick and convenient way to open a user-defined Jupyter Notebook file, referred to as the "scratchpad", directly from the editor's status bar. The scratchpad file is intended to be used for taking quick notes, experimenting with code, or keeping track of useful snippets.

## Features

- ✏️ Adds a "Scratchpad" item to the status bar.
- 📒 Clicking the status bar item opens the user-defined scratchpad file in the Jupyter Notebook viewer.
- 📁 Allows users to select their preferred scratchpad file through a file selection dialog.
- ✨ Stores the scratchpad file path as a setting for future use.

## Demo

![Demo](demo.gif)

## Usage

1. Install the LGScratchpad extension in Visual Studio Code.
2. Ensure the Jupyter extension is installed and enabled.
3. Click the "Scratchpad" item in the status bar.
4. If it's your first time using the extension, a file selection dialog will appear. Select your preferred Jupyter Notebook file to use as the scratchpad.
5. The selected file will open in the Jupyter Notebook viewer.
6. The extension will remember your selected scratchpad file, so you won't need to select it again.

## Configuration

The following settings are available for the LGScratchpad extension:

- `lgscratchpad.scratchpadPath`: The path to the scratchpad Jupyter Notebook file. This setting is automatically updated when you select a scratchpad file for the first time.

## Requirements

- Visual Studio Code
- Jupyter extension for Visual Studio Code

## Contributing

If you'd like to contribute to the development of this extension, please feel free to submit a pull request or open an issue on the project's GitHub repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
