import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IDragon } from "../types";

export const dragonAPI = createApi({
    reducerPath: "dragonAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.spacexdata.com/v4"
    }),
    endpoints: (build) => ({
        getAllDragons: build.query<IDragon[], string>({
            query: () => ({
                url: "/dragons"
            })
        }),
        getDragonDetails: build.query<IDragon, string | undefined>({
            query: (id) => {
                console.log(id);
                return {
                    url: `/dragons/${id}`
                }
            }
        })
    })
});