import { v4 as uuidv4, validate as uuidValidate} from 'uuid';

/**
 * Generates a new UUID v4.
 * @returns {string} A UUID string.
 */
export function generateUuid() {return uuidv4;}

/**
 * Validates if the given string is a valid UUID.
 * @param value {string} -The string to validate.
 * @returns {boolean} True if the string a valid UUID,false
 */

export function validateUuid(value) {return uuidValidate(value);}