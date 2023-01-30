import { createClient } from '@supabase/auth-helpers-sveltekit'
import { env } from '$env/dynamic/public'

const supabaseUrl = env.PUBLIC_SUPABASE_URL  as string
const supabaseKey = env.PUBLIC_SUPABASE_KEY as string
export const supabase = createClient(supabaseUrl, supabaseKey)
