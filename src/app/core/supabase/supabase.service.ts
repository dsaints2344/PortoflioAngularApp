import { Injectable } from '@angular/core';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

import { environment } from '../../../environments/environment';


@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private cachedClient: SupabaseClient | null = null;

  /** True once real (non-placeholder) credentials are present. */
  get isConfigured(): boolean {
    const { url, anonKey } = environment.supabase;
    return (
      !!url &&
      !!anonKey
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

    console.debug('[SupabaseService] Creating Supabase client with URL:', environment.supabase.url);

    return (this.cachedClient ??= createClient(
      environment.supabase.url,
      environment.supabase.anonKey,
    ));
  }
}
