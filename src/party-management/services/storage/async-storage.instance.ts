import { AsyncStorageService } from "./async-storage.service";

const asyncStorageService = new AsyncStorageService();

// asyncStorageService.getItem = timeDecoratorAsync('🍎 getItem', asyncStorageService.getItem) as any;
// asyncStorageService.setItem = timeDecoratorAsync('✔️ setItem', asyncStorageService.setItem);

export { asyncStorageService };
