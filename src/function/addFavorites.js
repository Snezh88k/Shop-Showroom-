export default function addFavorites(id) {
  if (
    localStorage.getItem("favorites") &&
    JSON.parse(localStorage.getItem("favorites")).find((item) => item === id)
  ) {
    return;
  }
  const favorites = localStorage.getItem("favorites")
    ? [...JSON.parse(localStorage.getItem("favorites"))]
    : [];

  favorites.push(id);
  localStorage.setItem("favorites", JSON.stringify(favorites));
}
