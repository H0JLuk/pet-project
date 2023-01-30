type Mods = Record<string, string | boolean>;

export function classNames(cls: string, mods: Mods, additional: string[] = []): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([_className, value]) => !value)
      .map(([className]) => className),
  ].join(' ');
}
