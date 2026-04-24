import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ckomkaodygbqqjgvyiou.supabase.co";
const supabaseAnonKey = "sb_publishable_aljXW3IWvaPGQYb03Ms5tA_jKCsW8iP";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);