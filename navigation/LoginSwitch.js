import { createSwitchNavigator } from 'react-navigation'
import LoginStack from './LoginStack'
import HomeTab from './HomeTab';
import Loading from '../screens/Loading'
const LoginSwitch = createSwitchNavigator(
    {
        LoginStack,
        HomeTab,
        Loading
    },{
        initialRouteName: "Loading"
    }
);
export default LoginSwitch;