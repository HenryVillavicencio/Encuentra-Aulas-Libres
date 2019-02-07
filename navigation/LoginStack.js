import { createStackNavigator } from 'react-navigation'
import Login from '../screens/Login'
import Register from '../screens/SingUp'

const LoginStack = createStackNavigator(
    {
        Login:{
            screen: Login,
            navigationOptions:{
                header: null
            }
        }
        ,
        Register:{
            screen: Register,
            navigationOptions:{
                title: "Crear una cuenta nueva"
            }
        }
    })
    ;
export default LoginStack;