const fs = require('fs');

const db = JSON.parse(fs.readFileSync('./akses.json'));
db.data = db.data.map(u => {
  if (u.days > 0) u.days -= 1;
  return u;
});
fs.writeFileSync('./akses.json', JSON.stringify(db, null, 2));
console.log("✅ Days dikurangi 1 untuk semua user");
