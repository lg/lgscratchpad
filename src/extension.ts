import * as vscode from 'vscode'
import * as fs from 'fs'

async function selectScratchpadFile(): Promise<string | undefined> {
    const options: vscode.OpenDialogOptions = {
        canSelectMany: false,
        openLabel: 'Select',
        filters: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Jupyter Notebook': ['ipynb']
        }
    }

    const fileUri = await vscode.window.showOpenDialog(options)
    if (fileUri && fileUri[0]) {
        return fileUri[0].fsPath
    } else {
        return undefined
    }
}

export async function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('lgscratchpad.openScratchpad', async () => {
        const config = vscode.workspace.getConfiguration('lgscratchpad')
        let scratchpadPath = config.get('scratchpadPath', '')

        if (!scratchpadPath) {
            scratchpadPath = await selectScratchpadFile() ?? ""
            if (!scratchpadPath) {
                vscode.window.showInformationMessage('No scratchpad file selected.')
                return
            }

            await config.update('scratchpadPath', scratchpadPath, vscode.ConfigurationTarget.Global)
        }

        if (!fs.existsSync(scratchpadPath)) {
            vscode.window.showErrorMessage(`Scratchpad file not found: ${scratchpadPath}`)
            return
        }

        const scratchpadUri = vscode.Uri.file(scratchpadPath)

        try {
            await vscode.commands.executeCommand('vscode.openWith', scratchpadUri, 'jupyter-notebook')
        } catch (err) {
            if (err instanceof Error) {
                vscode.window.showErrorMessage(`Error opening scratchpad: ${err.message}`)
            } else {
                vscode.window.showErrorMessage('Error opening scratchpad.')
            }
        }
    })

    context.subscriptions.push(disposable)

    const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100)
    statusBarItem.text = 'Scratchpad'
    statusBarItem.command = 'lgscratchpad.openScratchpad'
    statusBarItem.show()
    context.subscriptions.push(statusBarItem)
}

export function deactivate() {}
