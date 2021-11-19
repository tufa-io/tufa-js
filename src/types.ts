export interface Resource {
  id: string;
  type: string;
}

interface TufaRequest {
  environment?: string;
  resources: Resource[];
}

export interface TufaConf {
  tufa?: string;
  debug?: boolean;
  request: TufaRequest;
}

export interface TufaResponse {
  version: string;
  requestId: string;
  credentials: {
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken: string;
  };
  resources: {
    [id: string]: {
      [id: string]: string | number | boolean;
    };
  };
}

export const version = '0.0.1';
