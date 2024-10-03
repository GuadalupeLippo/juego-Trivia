export const APITRIVIA  = 'http://localhost:3000'

export const getDataBase = () => fetch (`${APITRIVIA}`) 
export const getAvatars = () => fetch (`${APITRIVIA}/avatars`) 
