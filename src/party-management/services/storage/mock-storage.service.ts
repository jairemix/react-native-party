import { Dictionary } from '../../../utils/dictionary.type';

export class MockStorage {

  private mockDictionary: Dictionary<any>;

  constructor(
    mockDictionary: Dictionary<any>,
  ) {
    this.mockDictionary = mockDictionary;
  }

  async getItem<T>(key: string): Promise<T> {
    return this.mockDictionary[key] as any;
  }
  async setItem<T>(key: string, item: T): Promise<T> {
    return item;
  }
}