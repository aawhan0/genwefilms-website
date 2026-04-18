import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jccyilrxeskcuicqsdla.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjY3lpbHJ4ZXNrY3VpY3FzZGxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0ODUxNjIsImV4cCI6MjA5MjA2MTE2Mn0.N-1PK4Ghk2NcGLvWGhXUpIr4z0C2vVjtJ1oQ8awXGBg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);