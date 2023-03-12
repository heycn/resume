export const convert: (text: string) => JSX.Element = (text: string) => {
  const boldRegex: RegExp = /\*\*(.*?)\*\*/g
  const linkRegex: RegExp = /\[(.*?)\]\((.*?)\)/g
  let boldMatches: RegExpExecArray | null
  let linkMatches: RegExpExecArray | null
  let result: string = text
  // 将 ** 加粗
  while ((boldMatches = boldRegex.exec(text)) !== null) {
    result = result.replace(`**${boldMatches[1]}**`, `<strong>${boldMatches[1]}</strong>`)
  }
  // 高亮链接信息
  while ((linkMatches = linkRegex.exec(result)) !== null) {
    const [match, linkTitle, linkHref] = linkMatches
    result = result.replace(match, `<a href="${linkHref}">${linkTitle}</a>`)
  }

  return <span dangerouslySetInnerHTML={{ __html: result }} />
}
