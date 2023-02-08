import { v4 as uuidv4 } from 'uuid';

export function createSlug(str: string){
    return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .trim()
        .split(' ')
        .join('-') + '-' + uuidv4().substring(0, 8);
}
