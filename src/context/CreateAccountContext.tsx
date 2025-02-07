import { CreateAccountState, Gender } from "@/types/createAccount.type.tsx";
import { createContext, Dispatch, ReactNode, useReducer } from "react";

type CreateAccountAction = {
  type: string;
  payload: string | boolean | Gender | Date;
};

const initialState = {
  first_name: "",
  middle_name: "",
  last_name: "",
  suffix: "",
  address: "",
  contact_number: "",
  birthdate: new Date(),
  gender: "prefer not to say" as Gender,
  email: "",
  password: "",
  confirmPassword: "",
  error: "",
  success: "",
  loading: false,
};

type CreateContextType = {
  state: CreateAccountState;
  dispatch: Dispatch<CreateAccountAction>;
};

const CreateAccountContext = createContext<CreateContextType | undefined>(
  undefined
);

const createAccountReducer = (
  state: CreateAccountState,
  action: CreateAccountAction
): CreateAccountState => {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return { ...state, first_name: action.payload as string };
    case "SET_MIDDLE_NAME":
      return { ...state, middle_name: action.payload as string };
    case "SET_LAST_NAME":
      return { ...state, last_name: action.payload as string };
    case "SET_SUFFIX":
      return { ...state, suffix: action.payload as string };
    case "SET_ADDRESS":
      return { ...state, address: action.payload as string };
    case "SET_CONTACT_NUMBER":
      return { ...state, contact_number: action.payload as string };
    case "SET_DATE_OF_BIRTH":
      return { ...state, birthdate: action.payload as Date };
    case "SET_EMAIL":
      return { ...state, email: action.payload as string };
    case "SET_GENDER":
      return { ...state, gender: action.payload as Gender };
    case "SET_PASSWORD":
      return { ...state, password: action.payload as string };
    case "SET_CONFIRM_PASSWORD":
      return { ...state, confirmPassword: action.payload as string };
    case "SET_ERROR":
      return { ...state, error: action.payload as string };
    case "SET_SUCCESS":
      return { ...state, success: action.payload as string };
    case "SET_LOADING":
      return { ...state, loading: action.payload as boolean };
    default:
      return state;
  }
};

const CreateAccountProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(createAccountReducer, initialState);

  return (
    <CreateAccountContext.Provider value={{ state, dispatch }}>
      {children}
    </CreateAccountContext.Provider>
  );
};

export { CreateAccountProvider, CreateAccountContext };
