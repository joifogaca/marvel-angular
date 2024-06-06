import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Md5Service } from './services/md5.service';
import { UuidService } from './services/uuid.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';



export interface DataHash
{uuid: string,
hash: string}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationHelperService {

  private publicKey = environment.publicKey;

  private privateKey = environment.privateKey;


  private uuid = new BehaviorSubject<string>('');

  getUuid(): string {
    return this.uuid.value;
  }

  updateUuid(): void {
    this.uuid.next(this.uuidService.genereteUuid());
  }
  public getPublicKey(): string {
    return this.publicKey;
  }


  constructor(private md5service: Md5Service,
    private uuidService: UuidService) { }


    public genereteHashMd5(): string {
        return this.md5service.genereteHashMd5([this.uuid.value,
           this.privateKey, this.publicKey]);
    }

}





