// import Header from "./Component/Header";
// import Footer from "./Component/Footer";
// import JoinForm from "./Component/Preview";
// import Conference from "./Component/Conference";
// import { useEffect } from "react";
// import { selectIsConnectedToRoom, useHMSActions, useHMSStore } from "@100mslive/react-sdk";

// export default function App() {
//   const isConnected = useHMSStore(selectIsConnectedToRoom);
//   const hmsActions = useHMSActions();

//   useEffect(() => {
//     window.onunload = () => {
//       if (isConnected) hmsActions.leave();
//     };
//   }, [hmsActions, isConnected]);

//   return (
//     <div className="App min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-1">
//         {isConnected ? <Conference /> : <JoinForm />}
//       </main>
//       {isConnected && <Footer />}
//     </div>
//   );
// }



import { useHMSStore, selectIsConnectedToRoom } from "@100mslive/react-sdk";
import Preview from "./Component/Preview";
import Conference from "./Component/Conference";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { useState } from "react";
import "./App.css";

export default function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const [showParticipants, setShowParticipants] = useState(false);
  const [showChat, setShowChat] = useState(false);

  if (!isConnected) return <Preview />;

  return (
    <div className="app-container">
      <Header
        toggleParticipants={() => setShowParticipants(!showParticipants)}
        toggleChat={() => setShowChat(!showChat)}
      />

      <div className="meeting-body">
        <Conference />
        {showParticipants && <div className="sidebar">Participants Panel</div>}
        {showChat && <div className="sidebar">Chat Panel</div>}
      </div>

      <Footer />
    </div>
  );
}
