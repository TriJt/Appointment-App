import { BiUser, BiWalletAlt, BiCog, BiLogOutCircle } from 'react-icons/bi'

const user_menu = [
    {
        icon: <BiUser />,
        content: "Profile"
    },
    {
        icon: <BiWalletAlt />,
        content: "My Wallet"
    },
    {
        icon: <BiCog />,
        content: "Settings"
    },
    {
        icon: <BiLogOutCircle />,
        content: "Logout"
    }
]

export default user_menu;