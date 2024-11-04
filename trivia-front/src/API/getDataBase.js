export const APITRIVIA  = 'http://localhost:3000'

export const getDataBase = () => fetch (`${APITRIVIA}`) 
export const getAvatars = () => fetch (`${APITRIVIA}/avatars`) 
export const getCategory = () => fetch(`${APITRIVIA}/category`)
export const getGames = () => fetch(`${APITRIVIA}/games`)
export const getDifficulty = () => fetch(`${APITRIVIA}/difficulty`)
export const getQuestions = () => fetch(`${APITRIVIA}/question`)


export const createGame = (gameData) =>
    fetch(`${APITRIVIA}/games/trivia-categoria`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(gameData),
    });