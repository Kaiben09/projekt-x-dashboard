async function syncToNotion(task, xp, subsystem) {
  const databaseId = "DEINE_NOTION_DATABASE_ID";
  const notionToken = "DEIN_SECRET_TOKEN";

  const response = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${notionToken}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28"
    },
    body: JSON.stringify({
      parent: { database_id: databaseId },
      properties: {
        "Task": { title: [{ text: { content: task } }] },
        "XP": { number: xp },
        "Subsystem": { select: { name: subsystem } },
        "Datum": { date: { start: new Date().toISOString() } }
      }
    })
  });

  if (!response.ok) {
    console.error("Fehler bei Notion-Sync:", await response.text());
  }
}