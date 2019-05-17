import { Observable, from } from 'rxjs';
import { PersistedPartyState } from '../state/party.state';
import { StorageService } from './storage/storage.service.type';

export class PartyService {

  private readonly PARTY_KEY: string = 'PARTY';
  private storage: StorageService;

  constructor(
    // private storage: StorageService,
    storage: StorageService,
  ) {
    this.storage = storage;
  }

  getParty(): Observable<PersistedPartyState> {
    return from(this.storage.getItem<PersistedPartyState>(this.PARTY_KEY));
  }

  setParty(party: PersistedPartyState): Observable<PersistedPartyState> {
    return from(this.storage.setItem<PersistedPartyState>(this.PARTY_KEY, party));
  }

}
