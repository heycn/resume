export const convert: (text: string) => JSX.Element = (text: string) => {
  const bold_regex: RegExp = /\*\*(.*?)\*\*/g
  const link_regex: RegExp = /\[(.*?)\]\((.*?)\)/g
  let bold_matches: RegExpExecArray | null
  let link_matches: RegExpExecArray | null
  let result: string = text
  // 将 ** 加粗
  while ((bold_matches = bold_regex.exec(text)) !== null) {
    result = result.replace(`**${bold_matches[1]}**`, `<strong>${bold_matches[1]}</strong>`)
  }
  // 高亮链接信息
  while ((link_matches = link_regex.exec(result)) !== null) {
    const [match, link_title, link_href] = link_matches
    result = result.replace(match, `<a href="${link_href}">${link_title}</a>`)
  }

  return <li dangerouslySetInnerHTML={{ __html: result }}></li>
}
