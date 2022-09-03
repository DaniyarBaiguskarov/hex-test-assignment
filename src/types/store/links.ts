export interface ILink {
  id: number;
  short: string;
  target: string;
  counter: number;
}

export interface IOrder {
  short: boolean;
  target: boolean;
  counter: boolean;
}

export enum LinksActionTypes {
  FETCH_LINKS = "FETCH_LINKS",
  FETCH_LINKS_SUCCESS = "FETCH_LINKS_SUCCESS",
  FETCH_LINKS_ERROR = "FETCH_LINKS_ERROR",
  SET_LINKS_PAGE = "SET_LINKS_PAGE",
  SET_IS_LAST_PAGE = "SET_IS_LAST_PAGE",
  SORT_LINKS = "SORT_LINKS",
  SET_LINKS = "SET_LINKS",
  SET_COUNT = "SET_COUNT",
}

export interface LinksState {
  links: ILink[];
  isLoading: boolean;
  isLastPage: boolean;
  error: null | string;
  page: number;
  limit: number;
  sortField: string;
  order: IOrder;
}

interface FetchLinksAction {
  type: LinksActionTypes.FETCH_LINKS;
}
interface FetchLinksSuccessAction {
  type: LinksActionTypes.FETCH_LINKS_SUCCESS;
  payload: ILink[];
}
interface FetchLinksErrorAction {
  type: LinksActionTypes.FETCH_LINKS_ERROR;
  payload: string;
}
interface SetLinksPage {
  type: LinksActionTypes.SET_LINKS_PAGE;
  payload: number;
}
interface SetIsLastPage {
  type: LinksActionTypes.SET_IS_LAST_PAGE;
  payload: boolean;
}

interface SortLinks {
  type: LinksActionTypes.SORT_LINKS;
  payload: string;
}
interface SetLinks {
  type: LinksActionTypes.SET_LINKS;
  payload: ILink[];
}

interface SetCount {
  type: LinksActionTypes.SET_COUNT;
  payload: string;
}

export type LinksAction =
  | FetchLinksAction
  | FetchLinksErrorAction
  | FetchLinksSuccessAction
  | SetLinksPage
  | SetIsLastPage
  | SortLinks
  | SetLinks
  | SetCount;
