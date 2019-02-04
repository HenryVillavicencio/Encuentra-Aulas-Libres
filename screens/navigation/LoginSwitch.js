import { createSwitchNavigator } from 'react-navigation'
import LoginStack from './LoginStack'
import HomeTab from './HomeTab';
const LoginSwitch = createSwitchNavigator(
    {
        LoginStack,
        HomeTab

    },{
        initialRouteName: "LoginStack"
    }
);
export default LoginSwitch;