// import { useAVToggle } from "@100mslive/react-sdk";
// import Video from "./Video";

// export default function Footer() {
//   const { isLocalAudioEnabled, isLocalVideoEnabled, toggleAudio, toggleVideo } = useAVToggle();

//   return (
//     <div className="fixed bottom-4 left-0 w-full flex justify-center items-center space-x-4">
//       <button onClick={toggleAudio} className="bg-red-600 p-2 rounded text-white hover:bg-red-700">
//         {isLocalAudioEnabled ? "Mute" : "Unmute"}
//       </button>
//       <button onClick={toggleVideo} className="bg-blue-600 p-2 rounded text-white hover:bg-blue-700">
//         {isLocalVideoEnabled ? "Hide" : "Unhide"}
//       </button>
//       <Video />
//     </div>
//   );
// }



import {
  useAVToggle,
  useHMSActions,
  useHMSStore,
  selectIsLocalAudioEnabled,
  selectIsLocalVideoEnabled,
  selectIsLocalScreenShared,
  selectLocalPeer
} from "@100mslive/react-sdk";

export default function Footer() {
  const { toggleAudio, toggleVideo } = useAVToggle();
  const hmsActions = useHMSActions();

  const isAudioOn = useHMSStore(selectIsLocalAudioEnabled);
  const isVideoOn = useHMSStore(selectIsLocalVideoEnabled);
  const isScreenShared = useHMSStore(selectIsLocalScreenShared);
  const localPeer = useHMSStore(selectLocalPeer);

  const isHandRaised = localPeer?.metadata === "handRaised";

  const toggleScreenShare = async () => {
    await hmsActions.setScreenShareEnabled(!isScreenShared);
  };

  const toggleHand = async () => {
    await hmsActions.changeMetadata(
      isHandRaised ? "" : "handRaised"
    );
  };

  return (
    <div className="footer">

      <button onClick={toggleAudio}>
        {isAudioOn ? "🎤 On" : "🔇 Off"}
      </button>

      <button onClick={toggleVideo}>
        {isVideoOn ? "📷 On" : "📷 Off"}
      </button>

      <button onClick={toggleScreenShare}>
        {isScreenShared ? "🛑 Stop Share" : "🖥️ Share"}
      </button>

      <button onClick={toggleHand}>
        {isHandRaised ? "✋ Raised" : "✋ Raise"}
      </button>

    </div>
  );
}