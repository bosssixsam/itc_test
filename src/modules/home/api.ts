import axiosClient from "@/services/axiosClients";

export const HOMEAPI = {
  getlist(url: string, param?: any): Promise<any> {
    const params = param
      ? {
          ...param,
          limit: 48,
        }
      : {
          limit: 48,
        };

    return axiosClient.get(url, {
      params: {
        limit: 1281,
      },
    });
  },
};
