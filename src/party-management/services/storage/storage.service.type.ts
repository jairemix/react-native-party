export interface StorageService {
  getItem<T>(key: string): Promise<T>;
  setItem<T>(key: string, item: T): Promise<T>;
}
