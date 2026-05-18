import {fs, shell} from "./native.js";

export function pickDirectory(title) {
    return Blockbench.pickDirectory({title});
}

export function showMessageBox(options, callback) {
    let bbOptions = {
        icon: options.type === "warning" ? "fa-warning" : undefined,
        title: options.title,
        message: options.message,
        buttons: options.buttons,
        confirm: options.buttons ? 0 : undefined,
        cancel: options.buttons ? options.buttons.length - 1 : undefined,
        width: options.width
    };
    Blockbench.showMessageBox(bbOptions, callback);
}

export async function trashItem(filePath) {
    if (fs.existsSync(filePath)) {
        await shell.trashItem(filePath);
    }
}
