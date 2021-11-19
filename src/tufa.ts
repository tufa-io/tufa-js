import { TufaConf, TufaResponse } from './types';
import { getResources, stopEnv } from './request';
import { getTufaKey } from './env';

export class Tufa {
  constructor(conf: TufaConf) {
    this.conf = conf;
  }
  private conf: TufaConf;
  private response: TufaResponse | undefined;

  public async connect() {
    const key = getTufaKey();
    if (!key) {
      throw new Error('TUFA_KEY not found');
    }
    this.response = await getResources(this.conf, key);
    return this.response;
  }

  public async end() {
    await stopEnv(this.response?.requestId as string, getTufaKey() || '', this.conf.tufa);
    this.response = undefined;
  }
}
