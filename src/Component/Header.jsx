// import { useHMSActions, useHMSStore, selectIsConnectedToRoom } from "@100mslive/react-sdk";

// export default function Header() {
//   const isConnected = useHMSStore(selectIsConnectedToRoom);
//   const hmsActions = useHMSActions();

//   return (
//     <header className="bg-white shadow-md p-4 flex justify-between items-center">
//       <div className="flex items-center gap-2">
//         <img className="h-8" src="https://www.100ms.live/assets/logo.svg" alt="Logo" />
//         <span className="font-bold text-lg">My 100ms App</span>
//       </div>
//       {isConnected && (
//         <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={() => hmsActions.leave()}>
//           Leave Room
//         </button>
//       )}
//     </header>
//   );
// }


import { useHMSActions } from "@100mslive/react-sdk";
import { useEffect, useState } from "react";

export default function Header({ toggleParticipants, toggleChat }) {
  const hmsActions = useHMSActions();
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="header">
      <h2>QuickMeet</h2>

      <div className="header-controls">
        <span className="timer">{formatTime()}</span>
        <span className="rec-indicator">● REC</span>
        <button onClick={toggleParticipants}>👥</button>
        <button onClick={toggleChat}>💬</button>
        <button onClick={() => hmsActions.leave()} className="leave-btn">
          Leave
        </button>
      </div>
    </div>
  );
}