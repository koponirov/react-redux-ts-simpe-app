import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import  ActionCreators from '../store/action-creators/'


export const useActionCreators = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}
