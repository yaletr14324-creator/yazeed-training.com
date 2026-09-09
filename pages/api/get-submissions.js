import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { admin_password } = req.body;
  if (!admin_password || admin_password !== process.env.ADMIN_PASSWORD) return res.status(401).json({ error: 'غير مصرح بالدخول' });
  const { data, error } = await supabase.from('submissions').select('*').order('created_at', { ascending: false });
  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json({ data });
}
