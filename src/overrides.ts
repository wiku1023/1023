import { Species } from './data/enums/species';
import { Abilities } from "./data/enums/abilities";
import { Biome } from "./data/enums/biome";
import { Moves } from "./data/enums/moves";
import { WeatherType } from "./data/weather";

export const SEED_OVERRIDE = '';
export const STARTER_SPECIES_OVERRIDE = 0;
export const STARTER_FORM_OVERRIDE = 0;
export const STARTING_LEVEL_OVERRIDE = 0;
export const STARTING_WAVE_OVERRIDE = 0;
export const STARTING_BIOME_OVERRIDE = Biome.TOWN;
export const STARTING_MONEY_OVERRIDE = 0;
export const STARTING_MODIFIER_OVERRIDE = []; // [['EXP_SHARE'], ['GOLDEN_EXP_CHARM', 10]]
export const WEATHER_OVERRIDE = WeatherType.NONE;
export const DOUBLE_BATTLE_OVERRIDE = false;
export const STARTING_HELD_ITEMS_OVERRIDE = []; // [['REVIVER_SEED'], ['LUCKY_EGG', 3]]

export const ABILITY_OVERRIDE = Abilities.NONE;
export const PASSIVE_ABILITY_OVERRIDE = Abilities.NONE;
export const MOVE_OVERRIDE = Moves.NONE;
export const MOVE_OVERRIDE_2 = Moves.NONE;
export const OPP_SPECIES_OVERRIDE = 0;
export const OPP_ABILITY_OVERRIDE = Abilities.NONE;
export const OPP_PASSIVE_ABILITY_OVERRIDE = Abilities.NONE;
export const OPP_MOVE_OVERRIDE = Moves.NONE;
export const OPP_MOVE_OVERRIDE_2 = Moves.NONE;
export const OPP_HELD_ITEMS_OVERRIDE = []; // [['LUCKY_EGG', 2]]
export const OPP_MODIFIER_OVERRIDE = []; // [['ENEMY_DAMAGE_REDUCTION'], ['ENEMY_ATTACK_POISON_CHANCE', 2]]

export const OPP_SHINY_OVERRIDE = false;
export const OPP_VARIANT_OVERRIDE = 0;
