import {
  IOrder,
  LinksAction,
  LinksActionTypes,
  LinksState,
} from "../../types/store/links";

const initialState: LinksState = {
  links: [],
  page: 10,
  error: null,
  limit: 10,
  isLoading: false,
  isLastPage: false,
  sortField: "",
  order: { short: true, target: true, counter: false },
};

class Order {
  short!: boolean;
  target!: boolean;
  counter!: boolean;
  constructor(property: string, current: IOrder) {
    for (let key in current) {
      if (key === property) {
        this[property as "short" | "target" | "counter"] =
          !current[key as "short" | "target" | "counter"];
      } else {
        this[key as "short" | "target" | "counter"] =
          current[key as "short" | "target" | "counter"];
      }
    }
  }
}

export const linksReducer = (
  state = initialState,
  action: LinksAction
): LinksState => {
  switch (action.type) {
    case LinksActionTypes.FETCH_LINKS:
      return { ...state, isLoading: true };
    case LinksActionTypes.FETCH_LINKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        links: action.payload,
      };
    case LinksActionTypes.FETCH_LINKS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case LinksActionTypes.SET_LINKS_PAGE:
      console.log(state.page);
      return { ...state, page: action.payload };
    case LinksActionTypes.SET_IS_LAST_PAGE:
      return { ...state, isLastPage: action.payload };
    case LinksActionTypes.SORT_LINKS:
      return {
        ...state,
        sortField: action.payload,
        order: new Order(action.payload, state.order),
      };
    case LinksActionTypes.SET_LINKS:
      return { ...state, links: action.payload, page: 1 };
    case LinksActionTypes.SET_COUNT:
      const changeByShort = state.links.map((item) => {
        if (item.short === action.payload) {
          console.log(item.short);
          item.counter = item.counter + 1;
        }
        return item;
      });
      return { ...state, links: changeByShort };
    default:
      return state;
  }
};
