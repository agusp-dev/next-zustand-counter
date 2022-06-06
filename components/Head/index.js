import { default as HtmlHead } from 'next/head'

export const Head = ({ title, description }) => {
  return (
    <HtmlHead>
      <title>{ title }</title>
      <meta name='description' content={description} />
      <link rel='icon' href='/favicon.ico' />
    </HtmlHead>
  )
}
