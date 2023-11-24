import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabaseUrl = "https://jwvbdcxfjcsrjkybmhyq.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3dmJkY3hmamNzcmpreWJtaHlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1MTQ0OTEsImV4cCI6MjAxNjA5MDQ5MX0.HuMSoz_v4hCu43teLOFQAdiWmEYrsjcbO-Os3WLH7hs"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)