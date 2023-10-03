import { Input, Stack } from "@chakra-ui/react"

const InputEmail = ({ placeholder, onChange, value }) => {
    return (
        <Stack spacing={3}>
            <Input
                placeholder={placeholder}
                onChange={onChange}
                value={value.toLowerCase()}
                size='md'
                width='25rem'
            />
        </Stack>
    )
}
export default InputEmail