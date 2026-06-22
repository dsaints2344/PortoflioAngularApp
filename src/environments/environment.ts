export const environment = {
  production: true,
  supabase: {
    url: import.meta.env['NG_APP_SUPABASE_URL'],
    anonKey: import.meta.env['NG_APP_SUPABASE_ANON_KEY'],
  },
};
