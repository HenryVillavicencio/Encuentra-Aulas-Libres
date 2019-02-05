import { createStackNavigator } from 'react-navigation'
import Login from '../Login'
import Register from '../SingUp'

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