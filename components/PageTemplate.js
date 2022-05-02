import Head from 'next/head'

function PageTemplate({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}

export default PageTemplate