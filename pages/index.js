import { useState } from 'react';
export default function Home() {
  const [status, setStatus] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('جاري الإرسال...');
    const form = new FormData(e.target);
    const body = Object.fromEntries(form);
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    if (res.ok) { setStatus('تم الإرسال ✅'); e.target.reset(); } else { setStatus('حدث خطأ'); }
  }
  return (
    <main style={{maxWidth:600, margin:'2rem auto', fontFamily:'sans-serif'}}>
      <h1>استمارة مشاركة</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="الاسم" required style={{width:'100%',marginBottom:8}}/>
        <input name="email" type="email" placeholder="البريد" required style={{width:'100%',marginBottom:8}}/>
        <input name="age" type="number" placeholder="العمر (اختياري)" style={{width:'100%',marginBottom:8}}/>
        <select name="option" required style={{width:'100%',marginBottom:8}}>
          <option value="">اختر</option>
          <option value="option1">خيار 1</option>
          <option value="option2">خيار 2</option>
        </select>
        <textarea name="message" placeholder="رسالتك" rows="5" style={{width:'100%',marginBottom:8}}/>
        <button type="submit">إرسال</button>
      </form>
      <p>{status}</p>
    </main>
  );
}
