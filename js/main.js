const c = document.getElementById('countdown');
const launch = new Date('2026-01-31');

function update() {
  const diff = launch - new Date();
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  c.innerHTML = `${d} days ${h} hrs ${m} mins left`;
}

update();
setInterval(update, 60000);
