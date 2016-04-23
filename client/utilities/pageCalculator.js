export function groupPages(pages, spread) {
  const pagesPerGroup = spread ? 2 : 1
  let groups = []
  let cursor = 0

  while (cursor <= pages.length) {
    let end = cursor + pagesPerGroup
    let nextGroup = pages.filter((page, index) => index >= cursor && index < end)
    let oneIsDouble = nextGroup.some(page => page.format === 'double')

    if (oneIsDouble) {
      groups.push([nextGroup[0]])
      cursor += 1
    } else {
      groups.push(nextGroup)
      cursor += pagesPerGroup
    }
  }

  return groups
}
