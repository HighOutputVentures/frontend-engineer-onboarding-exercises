import { Flex } from '@chakra-ui/react'
import Layout from '@components/Layout'
import NextImage from 'next/image'
import { FC } from 'react'

const Home: FC = () => (
  <Layout title="Welcome to HOV">
    <Flex p={8} alignItems="center" justifyContent="center">
      <NextImage src="/logo.png" width={200} height={200} />
    </Flex>
  </Layout>
)

export default Home
