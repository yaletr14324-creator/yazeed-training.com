import
 { useState } 
from
 
'react'
;
export
 
default
 
function
 
Home
(
) 
{
  
const
 [status, setStatus] = useState(
''
);
  
const
 [isSubmitting, setIsSubmitting] = useState(
false
);
  
async
 
function
 
handleSubmit
(
e
) 
{
    e.preventDefault();
    setIsSubmitting(
true
);
    setStatus(
'جاري الإرسال...'
);
    
const
 form = 
new
 FormData(e.currentTarget);
    
const
 body = 
Object
.fromEntries(form);
    
try
 {
      
const
 res = 
await
 fetch(
'/api/submit'
, {
        
method
: 
'POST'
,
        
headers
: {
          
'Content-Type'
: 
'application/json'
,
        },
        
body
: 
JSON
.stringify(body),
      });
      
if
 (res.ok) {
        setStatus(
'تم إرسال النموذج بنجاح ✅'
);
        e.currentTarget.reset();
      } 
else
 {
        
const
 data = 
await
 res.json().catch(
() =>
 ({}));
        setStatus(data.error || 
'حدث خطأ، يرجى المحاولة لاحقًا'
);
      }
    } 
catch
 {
      setStatus(
'تعذر الاتصال بالخادم، يرجى المحاولة لاحقًا'
);
    } 
finally
 {
      setIsSubmitting(
false
);
    }
  }
  
const
 inputStyle = {
    
width
: 
'100%'
,
    
padding
: 
'12px'
,
    
marginTop
: 
'6px'
,
    
marginBottom
: 
'16px'
,
    
border
: 
'1px solid #d1d5db'
,
    
borderRadius
: 
'8px'
,
    
fontSize
: 
'16px'
,
    
boxSizing
: 
'border-box'
,
    
direction
: 
'rtl'
,
  };
  
return
 (
    <main
      dir="rtl"
      lang="ar"
      style={{
        maxWidth: '600px',
        margin: '2rem auto',
        padding: '24px',
        fontFamily: 'Tahoma, Arial, sans-serif',
        direction: 'rtl',
      }}
    >
      <h1>استمارة المشاركة</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">الاسم</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="أدخل الاسم"
          required
          style={inputStyle}
        />
        <label htmlFor="email">البريد الإلكتروني</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="أدخل البريد الإلكتروني"
          required
          style={inputStyle}
        />
        <label htmlFor="age">العمر</label>
        <input
          id="age"
          name="age"
          type="number"
          placeholder="العمر - اختياري"
          min="1"
          style={inputStyle}
        />
        <label htmlFor="option">الخيار</label>
        <select
          id="option"
          name="option"
          required
          defaultValue=""
          style={inputStyle}
        >
          <option value="" disabled>
            اختر خيارًا
          </option>
          <option value="option1">الخيار الأول</option>
          <option value="option2">الخيار الثاني</option>
        </select>
        <label htmlFor="message">الرسالة</label>
        <textarea
          id="message"
          name="message"
          placeholder="اكتب رسالتك هنا"
          rows="5"
          style={{
            ...inputStyle,
            resize: 'vertical',
          }}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: '100%',
            padding: '12px',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: isSubmitting ? '#9ca3af' : '#2563eb',
            color: '#fff',
            fontSize: '16px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
          }}
        >
          {isSubmitting ? 'جاري الإرسال...' : 'إرسال النموذج'}
        </button>
      </form>
      {status && (
        <p
          role="status"
          style={{
            marginTop: '16px',
            textAlign: 'center',
          }}
        >
          {status}
        </p>
      )}
    </main>
  );
}