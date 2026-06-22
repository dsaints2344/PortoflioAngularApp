import { Injectable } from '@angular/core';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

import { environment } from '../../../environments/environment';

/**
 * Thin wrapper around the Supabase JS client.
 *
 * PLACEHOLDER: credentials live in `src/environments/environment*.ts`. The
 * client is created lazily, so the app still runs with the placeholder values —
 * it only throws if something actually tries to talk to Supabase before it has
 * been configured.
 *
 * To go live:
 *   1. Fill in `supabase.url` / `supabase.anonKey` in the environment files.
 *   2. Create your tables in the Supabase dashboard.
 *   3. Point `PortfolioService` / `ContactService` at real queries
 *      (see the TODOs in those files).
 */
@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private cachedClient: SupabaseClient | null = null;

  /** True once real (non-placeholder) credentials are present. */
  get isConfigured(): boolean {
    const { url, anonKey } = environment.supabase;
    return (
      !!url &&
      !!anonKey &&
      !url.includes('YOUR_') &&
      !anonKey.includes('YOUR_')
    );
  }

  /** The Supabase client. Throws if credentials are still placeholders. */
  get client(): SupabaseClient {
    if (!this.isConfigured) {
      throw new Error(
        '[SupabaseService] Supabase is not configured. Set `supabase.url` and ' +
          '`supabase.anonKey` in src/environments/environment.ts.',
      );
    }

    return (this.cachedClient ??= createClient(
      environment.supabase.url,
      environment.supabase.anonKey,
    ));
  }
}
