import { ApplicationSettings } from '@nativescript/core';

export class StorageService {
  static setItem(key: string, value: any): void {
    ApplicationSettings.setString(key, JSON.stringify(value));
  }

  static getItem<T>(key: string, defaultValue: T = null): T {
    const value = ApplicationSettings.getString(key);
    return value ? JSON.parse(value) : defaultValue;
  }

  static removeItem(key: string): void {
    ApplicationSettings.remove(key);
  }

  static clear(): void {
    ApplicationSettings.clear();
  }
}