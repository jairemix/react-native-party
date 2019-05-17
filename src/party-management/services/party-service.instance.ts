import { PartyService } from './party.service';
import { storageService } from './storage/storage.service.instance';

export const partyService = new PartyService(storageService);
