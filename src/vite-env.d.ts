/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** API key assigned by Crowded, sent as the `apiKey` query param. */
  readonly API_KEY: string;
  /** Optional override for the API base URL. */
  readonly VITE_API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
