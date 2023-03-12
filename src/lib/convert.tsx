export const convert: (text: string) => JSX.Element = (text: string) => {
  const bold_start = text.indexOf('**')
  const bold_end = text.indexOf('**', bold_start + 2)
  const link_start = text.indexOf('(')
  const link_end = text.indexOf(')')
  const link_title_start = text.indexOf('[')
  const link_title_end = text.indexOf(']')

  // 提取加粗文本和链接信息
  const bold_text = bold_start !== -1 && bold_end !== -1 ? text.substring(bold_start + 2, bold_end) : null
  const link_href = link_start !== -1 && link_end !== -1 ? text.substring(link_start + 1, link_end) : null
  const link_title = link_title_start !== -1 && link_title_end !== -1 ? text.substring(link_title_start + 1, link_title_end) : null

  // 将加粗文本和链接信息高亮
  let result = text
  if (bold_text) {
    result = result.replace(`**${bold_text}**`, `<strong>${bold_text}</strong>`)
  }
  if (link_href) {
    result = result.replace(`[${link_title}](${link_href})`, `<a href="${link_href}">${link_title}</a>`)
  }

  return <li dangerouslySetInnerHTML={{ __html: result }}></li>
}
