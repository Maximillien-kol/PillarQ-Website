export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  console.log('Test API called with method:', req.method);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);

  res.status(200).json({ 
    success: true, 
    message: 'API is working!',
    method: req.method,
    timestamp: new Date().toISOString()
  });
}
