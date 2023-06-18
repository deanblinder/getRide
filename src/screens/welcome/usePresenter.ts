import { useState } from "react"
import { navigationService } from "../../services"

const usePresenter = () => {
const [shouldShowLogin, setShouldShowLogin] = useState(false)

const onSignupPressed = (navigation:any) => {
    navigationService.push('Register', {})
}
const onHaveAccountPressed = () => {
    navigationService.push('Login', {})

}
    return {
        shouldShowLogin,
        onSignupPressed,
        onHaveAccountPressed
    }
}
export default usePresenter