import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { name, email, age, option, message } = req.body;
  const { error } = await supabase.from('submissions').insert([{ name, email, age: age || null, option, message }]);
  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json({ ok: true });
}
