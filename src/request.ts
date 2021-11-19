import { TufaConf, TufaResponse, version } from './types';

const host = 'https://api.tufa.io/';

import needle from 'needle';
const TUFA_KEY_HEADER = 'tufa-key';

export async function getResources(conf: TufaConf, key: string): Promise<TufaResponse> {
  return needle(
    'post',
    conf.tufa || host,
    {
      version,
      resources: conf.request.resources,
    },
    { json: true, headers: { [TUFA_KEY_HEADER]: key } }
  ).then((res) => {
    return JSON.parse(res.body as string) as TufaResponse;
  });
}

export async function stopEnv(requestId: string, key: string, url?: string): Promise<any> {
  return needle('delete', `${url || host}${requestId}`, null, { headers: { [TUFA_KEY_HEADER]: key } }).then((res) => res.body);
}
