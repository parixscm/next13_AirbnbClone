export async function getNearbyData() {
  const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
  return res.json();
}

export async function getLiveAnywhereData() {
  const res = await fetch("https://www.jsonkeeper.com/b/VHHT");
  return res.json();
}

export async function getSearchResults() {
  const res = await fetch("https://www.jsonkeeper.com/b/5NPS", {
    cache: "no-store",
  });
  return res.json();
}
