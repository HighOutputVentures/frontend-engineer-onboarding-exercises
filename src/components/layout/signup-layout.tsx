import { Container, Flex, Grid, GridItem } from '@highoutput/ui-components'
import { FC, ReactNode } from 'react'

interface SignupLayoutProps {
  children: ReactNode
}

const SignupLayout: FC<SignupLayoutProps> = ({ children }) => (
  <Grid templateColumns={{ md: 'repeat(5, 1fr)' }} minH="100vh">
    <GridItem colSpan={{ md: 2 }} bg="papayawhip" />
    <GridItem colSpan={{ md: 3 }}>
      <Container h="full">
        <Flex h="full" alignItems="center">
          {children}
        </Flex>
      </Container>
    </GridItem>
  </Grid>
)

export default SignupLayout
