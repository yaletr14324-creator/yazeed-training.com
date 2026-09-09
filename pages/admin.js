import { useState } from 'react';
export default function Admin() {
  const [pw, setPw] = useState('');
  const [rows, setRows] = useState(null);
  const [err, setErr] = useState('');
  async function load() {
    setErr('جارٍ التحميل...');
    const res = await fetch('/api/get-submissions', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ admin_password: pw }) });
    if (res.ok) {
      const json = await res.json();
      setRows(json.data);
      setErr('');
    } else {
      const j = await res.json().catch(()=>({error:'حصل خطأ'}));
      setErr(j.error || 'خطأ في المصادقة');
    }
  }
  return (
    <main style={{maxWidth:900, margin:'2rem auto', fontFamily:'sans-serif'}}>
      <h1>لوحة النتائج (المسؤول)</h1>
      <div style={{marginBottom:12}}>
        <input type="password" placeholder="أدخل كلمة مرور المسؤول" value={pw} onChange={e=>setPw(e.target.value)} />
        <button onClick={load}>عرض الردود</button>
      </div>
      {err && <p>{err}</p>}
      {rows && (
        <table border="1" cellPadding="6" style={{width:'100%', borderCollapse:'collapse'}}>
          <thead><tr><th>الوقت</th><th>الاسم</th><th>البريد</th><th>العمر</th><th>الخيار</th><th>الرسالة</th></tr></thead>
          <tbody>{rows.map(r=>(
            <tr key={r.id}>
              <td>{new Date(r.created_at).toLocaleString('ar-EG')}</td>
              <td>{r.name}</td><td>{r.email}</td><td>{r.age}</td><td>{r.option}</td><td>{r.message}</td>
            </tr>
          ))}</tbody>
        </table>
      )}
    </main>
  );
}
