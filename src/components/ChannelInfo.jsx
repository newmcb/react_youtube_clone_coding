import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ["channel", id],
    () => youtube.chanelImageUrl(id),
    { staleTime: 1000 * 60 * 5 }
  );

  return (
    <div className="flex my-4 mb-8 items-center">
      {url && <img src={url} alt={name} className="w-10 h-10 rounded-full" />}
      <p className="text-l font-medium ml-2">{name}</p>
    </div>
  );
}
