import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qnklnxbaenoirnjrjncj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFua2xueGJhZW5vaXJuanJqbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5MzE0MDgsImV4cCI6MjAzNTUwNzQwOH0.3ToH__pwXinsJGcuMAVHmiVdohL1OSKqSqT5M2g2MoY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
