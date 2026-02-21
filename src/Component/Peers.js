// import { useVideo } from "@100mslive/react-sdk";

// export default function Peer({ peer }) {
//   const { videoRef } = useVideo({ trackId: peer.videoTrack });
//   return (
//     <div className="relative bg-black rounded">
//       <video ref={videoRef} autoPlay muted={peer.isLocal} className="w-full rounded" />
//       <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white px-2 py-1 rounded-tr">
//         {peer.name} {peer.isLocal && "(You)"}
//       </div>
//     </div>
//   );
// }


import {
  useVideo,
  useHMSStore,
  selectDominantSpeaker
} from "@100mslive/react-sdk";

export default function Peer({ peer }) {
  const { videoRef } = useVideo({ trackId: peer.videoTrack });
  const dominantSpeaker = useHMSStore(selectDominantSpeaker);

  const isActive = dominantSpeaker?.id === peer.id;

  return (
    <div className={`peer-tile ${isActive ? "active" : ""}`}>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={peer.isLocal}
      />

      <div className="peer-name">
        {peer.name} {peer.isLocal && "(You)"}
      </div>

      {peer.metadata === "handRaised" && (
        <div className="hand-indicator">✋</div>
      )}

    </div>
  );
}