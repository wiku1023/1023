import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "{{bossName}} appeared.",
  "trainerAppeared": "{{trainerName}}\n来挑战了！",
  "singleWildAppeared": "啊！野生的\n{{pokemonName}}跑出来了！",
  "multiWildAppeared": "啊！野生的\n{{pokemonName1}}和{{pokemonName2}}跑出来了！",
  "playerComeBack": "Come back, {{pokemonName}}!",
  "trainerComeBack": "{{trainerName}} withdrew {{pokemonName}}!",
  "playerGo": "上吧！{{pokemonName}}!",
  "trainerGo": "{{trainerName}}派出了{{pokemonName}}!",
  "switchQuestion": "Will you switch\n{{pokemonName}}?",
  "trainerDefeated": `成功战胜了\n{{trainerName}}!`,
  "pokemonCaught": "太好了！\n捉到{{pokemonName}}了！",
  "pokemon": "宝可梦",
  "sendOutPokemon": "上吧！{{pokemonName}}!",
  "hitResultCriticalHit": "A critical hit!",
  "hitResultSuperEffective": "It's super effective!",
  "hitResultNotVeryEffective": "好像效果不好……",
  "hitResultNoEffect": "It doesn't affect {{pokemonName}}!",
  "hitResultOneHitKO": "It's a one-hit KO!",
  "attackFailed": "But it failed!",
  "attackHitsCount": `Hit {{count}} time(s)!`,
  "expGain": "{{pokemonName}}获得了\n较多的{{exp}}经验值！",
  "levelUp": "{{pokemonName}}\n上升到了等级{{level}}！",
  "learnMove": "{{pokemonName}} learned\n{{moveName}}!",
  "learnMovePrompt": "{{pokemonName}} wants to learn the\nmove {{moveName}}.",
  "learnMoveLimitReached": "However, {{pokemonName}} already\nknows four moves.",
  "learnMoveReplaceQuestion": "Should a move be forgotten and\nreplaced with {{moveName}}?",
  "learnMoveStopTeaching": "Stop trying to teach\n{{moveName}}?",
  "learnMoveNotLearned": "{{pokemonName}} did not learn the\nmove {{moveName}}.",
  "learnMoveForgetQuestion": "Which move should be forgotten?",
  "learnMoveForgetSuccess": "{{pokemonName}} forgot how to\nuse {{moveName}}.",
  "levelCapUp": "The level cap\nhas increased to {{levelCap}}!",
  "moveNotImplemented": "{{moveName}} is not yet implemented and cannot be selected.",
  "moveNoPP": "There's no PP left for\nthis move!",
  "moveDisabled": "{{moveName}} is disabled!",
  "noPokeballForce": "An unseen force\nprevents using Poké Balls.",
  "noPokeballTrainer": "You can't catch\nanother trainer's Pokémon!",
  "noPokeballMulti": "You can only throw a Poké Ball\nwhen there is one Pokémon remaining!",
  "noPokeballStrong": "The target Pokémon is too strong to be caught!\nYou need to weaken it first!",
  "noEscapeForce": "An unseen force\nprevents escape.",
  "noEscapeTrainer": "You can't run\nfrom a trainer battle!",
  "noEscapePokemon": "{{pokemonName}}'s {{moveName}}\nprevents {{escapeVerb}}!",
  "runAwaySuccess": "You got away safely!",
  "runAwayCannotEscape": 'You can\'t escape!',
  "escapeVerbSwitch": "switching",
  "escapeVerbFlee": "fleeing",
  "notDisabled": "{{moveName}} is disabled\nno more!",
  "skipItemQuestion": "Are you sure you want to skip taking an item?",
  "eggHatching": "Oh?",
  "ivScannerUseQuestion": "Use IV Scanner on {{pokemonName}}?"
} as const;