export const environment = {
  production: true,
  supabase: {
    url: import.meta.env['SUPABASE_URL'],
    anonKey: import.meta.env['SUPABASE_PUBLISHABLE_KEY'],
  },
};
