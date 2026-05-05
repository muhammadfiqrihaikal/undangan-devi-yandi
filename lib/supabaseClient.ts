import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL  = 'https://ogfhlubtgvgzfvvkixpp.supabase.co';
const SUPABASE_KEY  = 'sb_publishable_pNlX8l1Mk8grzF-2N4Sn9w_Ytms8wp2';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
