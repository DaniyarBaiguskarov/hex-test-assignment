import $api from "../http";
import { AxiosResponse } from "axios";
import { ILink } from "../types//store/links";

export default class LinksService {
  static fetchStatistics(params: string): Promise<AxiosResponse<ILink[]>> {
    return $api.get<ILink[]>("/statistics?" + params);
  }

  static async squeeze(link: string): Promise<AxiosResponse<ILink>> {
    return $api.post<ILink>("/squeeze", {}, { params: { link: link } });
  }
}
