import React, { createRef, useEffect } from 'react'

const src = process.env.GATSBY_UTTERANCES_SRC
const repo = process.env.GATSBY_REPO_URL

interface UtterancesAttributesType {
  src: string
  repo: string
  'issue-term': string
  label: string
  theme: string
  crossorigin: string
  async: string
}

function Comments() {
  const element = createRef<HTMLDivElement>()

  useEffect(() => {
    if (element.current === null) return

    const utterances: HTMLScriptElement = document.createElement('script')

    const attributes: UtterancesAttributesType = {
      src: src as string,
      repo: repo as string,
      'issue-term': 'pathname',
      label: 'Comment',
      theme: `github-light`,
      crossorigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value as string)
    })

    element.current.appendChild(utterances)
  }, [])

  return <div ref={element} />
}

export default Comments
