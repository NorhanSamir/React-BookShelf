import BookInterface from "../Common/Book.interface";

export const BookReducer = function (state:BookInterface[]=[], action:any) {

    switch (action.type) {
        case "UPDATEBOOKS":
            return {...state, books:action.data};
        case "UPDATE_MOVEMENT":
            return state.map((item) =>
                 item.id === action.data.id ? { ...item, ...action.data } : item,
            );
          
      default:
        return {...state, books:[]};

    }

  };