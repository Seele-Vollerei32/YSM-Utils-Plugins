# YSM Utils Plugins - Revibed

A Blockbench plugin designed for the [Yes Steve Model](https://github.com/TartaricAcid/Yes-Steve-Model) (YSM) mod - Minecraft Java Edition.

## Features

- **Create Default Model** - Generate a complete YSM model pack with all default files (models, animations, textures, controllers, languages) in one click.
- **Open / Edit YSM Info** - Load and manage the `ysm.json` configuration with a graphical interface including:
  - Metadata (name, tips, license, authors with avatars)
  - Model properties (scale, extra animations, preview animation, GUI settings, etc.)
  - Player files (models, animations, textures, animation controllers)
  - Projectile & vehicle model files
  - Multi-language editing (supports 12 languages)

- **Direct Import** - Quickly import YSM model packs and open them in the info editor.

- **Open Recent Model** - Quick access to previously opened YSM model packs with a history menu.

- **Edit Current Info** - Re-open the info dialog for the currently loaded project.

- **MoLang Autocomplete** - Adds YSM-specific MoLang queries and `ctrl`/`tlm` namespace expansions for use in Blockbench's MoLang editor, including:
  - Entity state queries (`is_sleep`, `is_sneak`, `head_yaw`, etc.)
  - Inventory & equipment queries (`has_helmet`, `equipped_enchantment_level`, etc.)
  - Mod compatibility queries (TAC, SWEM, Parcool, SlashBlade, TLM, CarryOn)
  - Animation controller queries (`run`, `walk`, `sneak`, `death`, `swim`, etc.)
  - Sound, particle, and input queries

- **Old Version Migration** - Automatically detect and convert legacy YSM models to the current format.

## Requirements

- Blockbench 5.0.0+

## Installation

1. Download `ysm-utils.js` from the [releases page](https://github.com/TartaricAcid/YSM-Utils-Plugins/releases).
2. In Blockbench, go to **File > Plugins...**.
3. Click **Load Plugin from File** and select `ysm-utils.js`.
4. The **YSM** menu will appear in the menu bar.

## Usage

After installation, access all features from the **YSM** menu in the Blockbench menu bar:

| Menu Item | Description |
|---|---|
| **Create Default Model** | Creates a new YSM model pack from default templates |
| **Direct Import** | Opens an existing YSM model pack for editing |
| **Edit Current Info** | Edits the `ysm.json` of the currently loaded project |
| **Open Recent Model** | Quick list of recently opened model packs |

### Creating a New Model

1. Click **YSM > Create Default Model**.
2. Select an output directory.
3. Enter a pack name.
4. The pack is created and the info editor opens automatically.

### Editing a Model

1. Click **YSM > Direct Import** and select the model folder, or use **Open Recent Model**.
2. The info dialog opens with sidebar pages:
   - **Meta Data** - Model name, tips, license, authors
   - **Properties** - Height/width scale, extra animations, GUI settings
   - **Player Files** - Main/arm models, animations, textures, controllers
   - **Projectile Files** - Entity-specific projectile models
   - **Vehicle Files** - Entity-specific vehicle/ride models
   - **Language** - Multi-language text editing

## Development

```bash
npm install
npm run build
```

## License

MIT License - see [LICENSE](LICENSE) for details.
