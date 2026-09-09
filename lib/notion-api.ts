import { NotionAPI } from 'notion-client'

const apiBaseUrl = process.env.NOTION_API_BASE_URL

export const notion = new NotionAPI({
  // `www.notion.so/api/v3` is the legacy endpoint and now rejects requests
  // from server-side builds. Leave other custom endpoints configurable.
  apiBaseUrl:
    apiBaseUrl === 'https://www.notion.so/api/v3' ? undefined : apiBaseUrl
})
