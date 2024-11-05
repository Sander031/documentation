function findCorrectPath(data, version, tag) {
  if (version && tag) {
    const versionLinks = data.versions[version];
    if (version != '2.8.0' && version != '2.7.0')  //@@todo: read allowed versions from docusaurus const
      versionLinks = data.versions['2.8.0'];
    const path = versionLinks[tag];
    return path;
  } else if (tag) {
    const path = data.nonVersions[tag];
    return path;
  }
}

async function getPageLinkerIndex() {
  const indexUrl = `${document.location.origin}/page-linker-index.json`;
  const res = await fetch(indexUrl);
  const data = await res.json();
  return data;
}

async function getRedirectURL() {
  const params = new URL(`${document.location}`).searchParams;
  const tag = params.get('tag');
  const version = params.get('version');

  const data = await getPageLinkerIndex();
  const path = findCorrectPath(data, version, tag);
  const url = path ? `${document.location.origin}${path}` : `${document.location.origin}/404`;

  return url;
}

(async () => {
  try {
    const url = await getRedirectURL();
    location.replace(url);
  } catch (err) {
    location.replace(`${document.location.origin}/404`);
  }
})();
