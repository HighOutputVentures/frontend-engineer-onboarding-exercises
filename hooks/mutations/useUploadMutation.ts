import { GENERATE_UPLOAD_POLICY } from '@graphql/mutations/upload'
import useGraphqlHooks from '@hooks/useGraphqlHooks'
import { GenerateUploadPolicyPayload, MutationGenerateUploadPolicyArgs } from 'types'

const useUploadMutation = () => {
  const { useMutation } = useGraphqlHooks()

  const [generateUploadPolicy] = useMutation<{ generateUploadPolicy: GenerateUploadPolicyPayload }, MutationGenerateUploadPolicyArgs>(GENERATE_UPLOAD_POLICY)

  const generateUploadPolicyAction = async (variables: MutationGenerateUploadPolicyArgs) => {
    return generateUploadPolicy({
      variables,
    })
  }

  return { generateUploadPolicyAction }
}

export default useUploadMutation
