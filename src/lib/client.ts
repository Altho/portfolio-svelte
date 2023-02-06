import { createClient } from '@supabase/auth-helpers-sveltekit'
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from '$env/static/public'

const supabaseUrl = PUBLIC_SUPABASE_URL  as string
const supabaseKey = PUBLIC_SUPABASE_KEY as string
export const supabase = createClient(supabaseUrl, supabaseKey)
