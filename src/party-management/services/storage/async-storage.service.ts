import { AsyncStorage } from 'react-native';
import { StorageService } from './storage.service.type';
import { timeStart, logTimeEnd } from '../../../utils/time';

export class AsyncStorageService implements StorageService {

  async getItem<T>(key: string): Promise<T> {
    const raw = await AsyncStorage.getItem(key);
    return raw && JSON.parse(raw);
  }
  
  async setItem<T>(key: string, item: T): Promise<T> {
    const stringified = JSON.stringify(item);
    await AsyncStorage.setItem(key, stringified);
    return item;
  }

}
