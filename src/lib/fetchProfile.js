// Client-side live fetch, on every page load. Calls our own Netlify
// Function rather than Google directly, so the service account private
// key never reaches the browser.

export async function fetchProfile() {
  const res = await fetch("/.netlify/functions/profile");
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Profile function responded ${res.status}: ${body}`);
  }
  return res.json();
}
