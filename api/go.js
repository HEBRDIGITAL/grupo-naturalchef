module.exports = (req, res) => {
  const grupos = [
    "https://chat.whatsapp.com/GOq9gbFeSx2CNLJtUiRoDm",
    "https://chat.whatsapp.com/EHL5KA5ApVdIYl0xcbNkCR"
  ];
  const destino = grupos[Math.floor(Math.random() * grupos.length)];
  res.setHeader("Cache-Control", "no-store");
  res.statusCode = 307;
  res.setHeader("Location", destino);
  res.end();
};
