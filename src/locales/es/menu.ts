import { SimpleTranslationEntries } from "#app/plugins/i18n";

/**
 * The menu namespace holds most miscellaneous text that isn't directly part of the game's
 * contents or directly related to Pokemon data. This includes menu navigation, settings,
 * account interactions, descriptive text, etc.
 */
export const menu: SimpleTranslationEntries = {
    "yes": "Yes",
    "no": "No",
    "cancel": "Cancelar",
    "continue": "Continuar",
    "dailyRun": "Reto diario (Beta)",
    "loadGame": "Cargar partida",
    "newGame": "Nueva partida",
    "selectGameMode": "Elige un modo de juego.",
    "logInOrCreateAccount": "Inicia sesión o crea una cuenta para empezar. ¡No se requiere correo electrónico!",
    "failedToLoadSaveData": "No se ha podido cargar los datos guardados. Por favor, recarga la página.\nSi el fallo continúa, por favor contacta al administrador.",
    "sessionSuccess": "Sesión cargada con éxito.",
    "failedToLoadSession": "No se ha podido cargar los datos de tu sesión.\nPuede que estén corruptos.",
    "boyOrGirl": "¿Eres un chico o una chica?",
    "boy": "Chico",
    "girl": "Chica",
    "confirmStarterSelection": "Begin with these Pokémon?",
    "evolving": "What?\n{{pokemonName}} is evolving!",
    "stoppedEvolving": "{{pokemonName}} stopped evolving.",
    "pauseEvolutionsQuestion": "Would you like to pause evolutions for {{pokemonName}}?\nEvolutions can be re-enabled from the party screen.",
    "evolutionsPaused": "Evolutions have been paused for {{pokemonName}}.",
    "evolutionDone": "Congratulations!\nYour {{pokemonName}} evolved into {{evolvedPokemonName}}!",
    "dailyRankings": "Daily Rankings",
    "weeklyRankings": "Weekly Rankings",
    "noRankings": "No Rankings",
    "loading": "Loading…",
    "playersOnline": "Players Online"
} as const;