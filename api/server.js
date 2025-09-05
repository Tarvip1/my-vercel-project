export default function handler(req, res) {
  // ตัวอย่าง API ตรวจสอบ server
  res.status(200).json({ status: 'ออนไลน์ ✅' });
}
