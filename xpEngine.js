let totalXP = 0;
let level = 0;

document.getElementById("xp-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const task = document.getElementById("task-name").value;
  const xp = parseInt(document.getElementById("xp-value").value);
  const subsystem = document.getElementById("subsystem").value;

  totalXP += xp;
  level = Math.floor(totalXP / 1000);

  document.getElementById("xp").innerText = totalXP;
  document.getElementById("level").innerText = level;

  syncToNotion(task, xp, subsystem);
});