import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Md5Service } from './services/md5.service';
import { UuidService } from './services/uuid.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationHelperService {

  public publicKey = environment.publicKey;

  private privateKey = environment.privateKey;


  constructor(private md5service: Md5Service,
    private uuidService: UuidService) { }


    public genereteHashMd5(): DataHash {
      let uuid = this.uuidService.genereteUuid();
      return {uuid: uuid,
        hash: this.md5service.genereteHashMd5([uuid, this.privateKey, this.publicKey])};
    }


}

export interface DataHash
{uuid: string,
hash: string}




