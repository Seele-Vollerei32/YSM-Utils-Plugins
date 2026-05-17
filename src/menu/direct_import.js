import {checkDirectory} from "../import/check_directory.js";
import {readYsmFile} from "../import/ysm_file_read.js";
import importTypeVue from "../vue/import/import_type.vue";
import {pickDirectory} from "../util/dialogs.js";

export let directImportMenuAction = new Action("ysm_utils.direct_import", {
    name: "menu.ysm_utils.direct_import.name",
    icon: "fa-file-import",
    click: function () {
        let path = pickDirectory(tl("menu.ysm_utils.direct_import.name"));
        if (path && checkDirectory(path)) {
            openImportTypeDialog(path);
        }
    }
});

export function openImportTypeDialog(packDirectory) {
    let ysmJson = readYsmFile(packDirectory);

    let importTypeMenuDialog = new Dialog({
        title: "menu.ysm_utils.direct_import.name",
        cancel_on_click_outside: false,
        singleButton: true,
        width: 700,
        component: {
            data() {
                return {
                    dialogInput: importTypeMenuDialog,
                    ysmJson: ysmJson,
                    packDirectory: packDirectory
                };
            },
            components: {
                importTypeVue: importTypeVue
            },
            template: `
                <importTypeVue :import-type-menu-dialog="dialogInput"
                               :ysm-json="ysmJson"
                               :pack-directory="packDirectory"/>`
        }
    });

    importTypeMenuDialog.show();
}