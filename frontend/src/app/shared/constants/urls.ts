import { environment } from "../../../environments/environment";

const BASE_URL=environment.production? '' :'http://localhost:5000';
export const CHILD_DATA_URL = BASE_URL+'/api/childdata';
export const CHILD_DATA_SEARCH_URL = CHILD_DATA_URL+'/search/';
export const CHILD_DATA_ID_URL = CHILD_DATA_URL+'/';
export const EDITOR_DATA_URL = BASE_URL+'/api/editordata';
export const EDITOR_DATA_SEARCH_URL = EDITOR_DATA_URL+'/search/';
export const EDITOR_DATA_ID_URL = EDITOR_DATA_URL+'/';
export const EXAM_DATA_URL = BASE_URL+'/api/exambookdata';
export const EXAM_DATA_SEARCH_URL = EXAM_DATA_URL+'/search/';
export const FIC_DATA_URL = BASE_URL+'/api/ficdata';
export const FIC_DATA_SEARCH_URL = FIC_DATA_URL+'/search/';
export const FIC_DATA_ID_URL = FIC_DATA_URL+'/';
export const EXAM_DATA_ID_URL = EXAM_DATA_URL+'/';
export const MYTHOLOGY_DATA_URL = BASE_URL+'/api/mythologydata';
export const MYTHOLOGY_DATA_SEARCH_URL = MYTHOLOGY_DATA_URL+'/search/';
export const MYTHOLOGY_DATA_ID_URL = MYTHOLOGY_DATA_URL+'/';
export const TEXTBOOK_DATA_URL = BASE_URL+'/api/textbookdata';
export const TEXTBOOK_DATA_SEARCH_URL = TEXTBOOK_DATA_URL+'/search/';
export const TEXTBOOK_DATA_ID_URL = TEXTBOOK_DATA_URL+'/';
export const USER_LOGIN_URL = BASE_URL+'/api/users/login';
export const USER_REGISTER_URL = BASE_URL+'/api/users/register';
export const ORDER_URL = BASE_URL+'/api/orders';
export const ORDER_CREATE_URL = ORDER_URL+'/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL=ORDER_URL+'/newOrderForCurrentUser';
export const ORDER_PAY_URL=ORDER_URL+'/pay';


