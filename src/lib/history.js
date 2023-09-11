import {createBrowserHistory} from 'history';
import {useHistory} from "react-router";

const HISTORY = createBrowserHistory();

export const navigateReplace = url => {
    HISTORY.replace(url);
};

export default HISTORY;