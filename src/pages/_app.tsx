import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@highoutput/ui-components'
import client from '@graphql/apollo-client'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'
import theme from 'theme'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <Head>
      <title>{process.env.appName}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </ApolloProvider>
)

export default App
