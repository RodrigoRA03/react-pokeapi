import React from "react";
import ReactPlayer from "react-player";
import { useCompetidorStore } from "../../hooks/useCompetidorStore/useCompetidorStore";

export const AudioComponent = ({ url }) => {
  const { muteAudio } = useCompetidorStore();
  return (
    <ReactPlayer
      url={url}
      playing={muteAudio}
      loop={true}
      width={0}
      height={0}
      controls={true}
    />
  );
};
