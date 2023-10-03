import { Button } from "@chakra-ui/react"
import theme from "../constants/theme"

const ButtonAll = ({ onClick, isDisabled, label, width, height, variant, customBackgroundColor, customColor }) => {
    return (
        <Button
            width={width}
            height={height}
            variant={variant}
            color={
                customColor !== undefined ? customColor : variant === "outline" ? theme.colors.blue : theme.colors.white}
            backgroundColor={
                customBackgroundColor !== undefined ? customBackgroundColor : variant === "outline" ? "transparent" : theme.colors.blue
            }
            _hover={{
                color: variant === "outline" ? "white" : "white",
                backgroundColor: variant === "outline" ? theme.colors.blue : theme.colors.blueNavy,
                borderColor: variant === "outline" ? theme.colors.blue : "transparent",
            }}
            _focus={{
                outlineColor: variant === "outline" ? theme.colors.outline : "transparent",
            }}
            onClick={onClick}
            isDisabled={isDisabled}
        >
            {label}
        </Button>
    )
}
export default ButtonAll