"use client";
import PlayerContent from "./PlayerContent";
import useGetSongById from "@/hooks/songs/useGetSongById";
import useLoadSongUrl from "@/hooks/songs/useLoadSongUrl";
import usePlayer from "@/hooks/songs/usePlayer";

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);

  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.activeId) {
    return null;
  }

  return (
    <div
      className="
        fixed 
        bottom-0 
        bg-black 
        w-full 
        py-2 
        h-[80px] 
        px-4
      "
    >
      <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
    </div>
  );
};

export default Player;
