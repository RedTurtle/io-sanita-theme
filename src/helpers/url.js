const RESOLVEUID_RE = /^[./]*resolve[Uu]id\/([^/]*)\/?(.*)$/;

export function isResolveUID(url) {
  const match = url?.match(RESOLVEUID_RE);
  return Boolean(match);
}
