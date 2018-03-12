
export interface ICryptoUtils {
    encrypt(type: string, message: string, key: string): string;
    decrypt(type: string, ciphertext: string, key: string): string;
}