import { legacy_createStore as createStore} from 'redux';
import { BookReducer } from '../reducers/bookReducer';
export const store = createStore(BookReducer);

