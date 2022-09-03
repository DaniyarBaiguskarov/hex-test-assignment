import { Dispatch } from "redux";
import { LinksAction, LinksActionTypes } from "../../types/store/links";
import LinksService from "../../services/LinksService";
import { AxiosError } from "axios";
import { AuthResponseError } from "../../types/response/AuthResponse";
import { API_URL } from "../../http";

export const fetchLinks = (params: string) => {
  return async (dispatch: Dispatch<LinksAction>) => {
    try {
      dispatch({ type: LinksActionTypes.FETCH_LINKS });
      const response = await LinksService.fetchStatistics(params);
      if (response.data.length === 0) {
        dispatch({
          type: LinksActionTypes.SET_IS_LAST_PAGE,
          payload: true,
        });
      }

      const addBasePath = response.data.map((item) => {
        item.short = API_URL + "/s/" + item.short;
        return item;
      });
      dispatch({
        type: LinksActionTypes.FETCH_LINKS_SUCCESS,
        payload: addBasePath,
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: LinksActionTypes.FETCH_LINKS_ERROR,
        payload: "Произошла ошибка при загрузке",
      });
    }
  };
};
export function setLinksPage(page: number): LinksAction {
  return { type: LinksActionTypes.SET_LINKS_PAGE, payload: page };
}

export function sortLinks(field: string) {
  return async (dispatch: Dispatch<LinksAction>) => {
    dispatch({
      type: LinksActionTypes.SORT_LINKS,
      payload: field,
    });
  };
}

export function setCount(short: string): LinksAction {
  return {
    type: LinksActionTypes.SORT_LINKS,
    payload: short,
  };
}

export const squeeze = (link: string) => {
  return async (dispatch: Dispatch<LinksAction>) => {
    try {
      await LinksService.squeeze(link);
    } catch (e) {
      const err =
        (e as AxiosError<AuthResponseError>).response?.data.detail || "Error";
      dispatch({
        type: LinksActionTypes.FETCH_LINKS_ERROR,
        payload: err,
      });
    }
  };
};
