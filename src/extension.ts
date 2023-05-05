import * as vscode from 'vscode';
import * as cp from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.gitAddCommitPush', async () => {
        const gitCommands = [
            'git add .',
            'git commit -m "Your default commit message"',
            'git push'
        ];

        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (workspaceFolders) {
            const rootPath = workspaceFolders[0].uri.fsPath;

            for (const command of gitCommands) {
                try {
                    await executeCommand(command, rootPath);
                } catch (error) {
                    vscode.window.showErrorMessage(`Error: ${error.message}`);
                    return;
                }
            }

            vscode.window.showInformationMessage('Successfully added, committed, and pushed changes.');
        } else {
            vscode.window.showErrorMessage('No workspace folder found.');
        }
    });

    context.subscriptions.push(disposable);
}

function executeCommand(command: string, cwd: string): Promise<void> {
    return new Promise((resolve, reject) => {
        cp.exec(command, { cwd }, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
}
