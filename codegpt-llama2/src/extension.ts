import * as vscode from "vscode";
import apiCall from "./lib/apiCall";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "codegpt-llama2.CODEGPT",
    () => {
      vscode.window.showInputBox().then(async (value) => {
        if (value === undefined) {
          return;
        }
        let res = await apiCall(value);
        if (res === undefined) {
          return;
        }
        vscode.workspace.openTextDocument({ content: res }).then((doc) => {
          vscode.window.showTextDocument(doc);
        });
      });
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
