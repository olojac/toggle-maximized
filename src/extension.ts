import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let editorMaximized = false;

	let toggleMaximizedEditor = vscode.commands.registerCommand('toggle-maximized.toggleMaximizedEditor', () => {
		editorMaximized = toggleMaximize(editorMaximized)
	});

	context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(event => toggleOnDiff(event, editorMaximized)));
	context.subscriptions.push(toggleMaximizedEditor);
}

function toggleMaximize(maximized: boolean) {
	if (maximized)
		vscode.commands.executeCommand('workbench.action.evenEditorWidths');
	else
		vscode.commands.executeCommand('workbench.action.minimizeOtherEditors');

	return !maximized;
}

function toggleOnDiff(event: any, maximized: boolean) {
	let settings = vscode.workspace.getConfiguration('toggle-maximized')

	if (!event || !settings['autoMaximizeEmbeddedEditors'])
		return

	let embedded = event && event['_viewColumn'] == undefined

	if (embedded) {
		vscode.commands.executeCommand('workbench.action.minimizeOtherEditors');
	}
	else if (!maximized) {
		vscode.commands.executeCommand('workbench.action.evenEditorWidths');
	}
}

export function deactivate() { }