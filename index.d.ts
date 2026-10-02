declare module '@citation-js/title' {
  interface Title {
    value?: string
    'sentence-case'?: string
    'title-case'?: string
    verbatim?: boolean
  }

  export function parseTitle (value: string, context: Title): string
  export function formatTitle (value: string): Title
}
