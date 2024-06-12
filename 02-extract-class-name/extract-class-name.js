function extractClassName(sessionTitle) {
  const months = {
    Januar: "01",
    Februar: "02",
    März: "03",
    Maerz: "03",
    April: "04",
    Mai: "05",
    September: "09",
  };

  const yearMatch = sessionTitle.match(/Class (\d{4})/);
  if (!yearMatch) return null;
  const year = yearMatch[1];

  for (const [month, code] of Object.entries(months)) {
    if (sessionTitle.includes(month)) {
      return `${year}-${code}`;
    }
  }

  return null;
}
