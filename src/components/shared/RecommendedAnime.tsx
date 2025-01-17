import React from "react";
import Cards from "./cards/Cards";
import ContentNotFound from "../error/Contentnotfound";
import { getAnimeDetails } from "@/lib/AnimeFetch";
export async function RecommendedAnime({ episode }: { episode: number }) {
    const details = await getAnimeDetails(episode);
    return (
        <>
            {details.recommendations.length > 0 ? (
                <>
                    <h1 className=" text-4xl font-semibold">Recommended</h1>
                    <Cards props={details.recommendations} />
                </>
            ) : (
                <ContentNotFound message="recommendations" />
            )}
        </>
    );
}
