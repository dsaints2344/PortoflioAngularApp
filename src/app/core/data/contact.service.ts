import { Injectable, inject } from '@angular/core';

import { SupabaseService } from '../supabase/supabase.service';
import type { ContactMessage } from '../models/portfolio.models';

/**
 * Handles contact-form submissions.
 *
 * PLACEHOLDER: currently simulates a successful send (matching the original
 * prototype — nothing is actually emailed or stored). Once your Supabase table
 * exists, replace the body of `send()` with a real insert.
 */
@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly supabase = inject(SupabaseService);

  async send(message: ContactMessage): Promise<void> {
    // TODO (Supabase): persist the message, e.g.
    //
    //   const { error } = await this.supabase.client
    //     .from('contact_messages')
    //     .insert({
    //       email: message.email,
    //       subject: message.subject,
    //       message: message.message,
    //     });
    //   if (error) throw error;
    //
    // (You can also fan out to an Edge Function / email provider here.)
    void this.supabase;
    void message;

    // Placeholder: simulate a network round-trip so the UI flow feels real.
    await new Promise((resolve) => setTimeout(resolve, 600));
  }
}
