// RSS loader (примерен)
// За реална употреба смени RSS_URL с български новинарски RSS,
// напр. Dnevnik, bTV, Nova (според условията им)

const RSS_URL = ""; // <-- постави RSS URL тук

async function loadRSS(sectionId) {
    const container = document.getElementById(sectionId);
    if (!RSS_URL) {
        container.innerHTML = "<p>Няма свързан новинарски източник.</p>";
        return;
    }
}

loadRSS("politics");
loadRSS("geopolitics");
loadRSS("crime");
loadRSS("society");
loadRSS("culture");
loadRSS("history");
