export const DATABASE = 'http://localhost:3000'

export const getDataBase = () => fetch (`${DATABASE}`) 
export const getAvatars = () => fetch (`${DATABASE}/avatars`) 
