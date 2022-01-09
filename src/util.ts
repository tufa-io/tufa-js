export const awsEnvs = (awsParams: { [id: string]: any }) => {
  return {
    AWS_ACCESS_KEY_ID: awsParams.credentials.accessKeyId,
    AWS_SECRET_ACCESS_KEY: awsParams.credentials.secretAccessKey,
    AWS_SESSION_TOKEN: awsParams.credentials.sessionToken,
    AWS_REGION: awsParams.awsRegion,
  };
};

export const pgEnvs = (pgParams: { [id: string]: any }) => {
  return {
    PGHOST: pgParams.host,
    PGUSER: pgParams.user,
    PGDATABASE: pgParams.database,
    PGPASSWORD: pgParams.password,
    PGPORT: pgParams.port,
  };
};

export const envsString = (envs: { [id: string]: any }) => {
  return Object.entries(envs)
    .map((env) => `${env[0]}=${env[1]}`)
    .join(' ');
};

export const setEnvs = (params: { [id: string]: any }) => {
  for (const [key, value] of Object.entries(params)) {
    process.env[key] = value;
  }
};
