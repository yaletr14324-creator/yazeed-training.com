import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html lang="ar" dir="rtl">
        <Head />
        <body style={{ direction: 'rtl', textAlign: 'right', fontFamily: 'sans-serif' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
