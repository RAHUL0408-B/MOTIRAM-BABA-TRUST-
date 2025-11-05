import { createClient } from '@supabase/supabase-js';

// Load environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// In dev, avoid throwing to prevent blank screen; warn instead
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase env missing or invalid. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
}

// Create client only when both are present; otherwise export a no-op placeholder
export const supabase: any = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {};
