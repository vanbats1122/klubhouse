import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>KlubHouse</title>
          <link rel="icon" type="image/svg+xml" href="/klubhouselogo.svg"/>
          <meta property="og:site_name" content="KlubHouse" />
          {/* <meta property="twitter:site" content="@KlubHouse" /> */}
          <meta property="twitter:card" content="summary" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={`${process.env.NEXT_PUBLIC_CLIENT_BASE_URL}/klubhouselogo.svg`} />
          <meta property="twitter:image" content={`${process.env.NEXT_PUBLIC_CLIENT_BASE_URL}/klubhouselogo.svg`} />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
            integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
            crossOrigin="anonymous"
          />
        </Head>
        <body className="font-body" style={{ backgroundColor: '#DAE0E6'}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument