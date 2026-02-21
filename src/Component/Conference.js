// import { selectPeers, useHMSStore } from "@100mslive/react-sdk";
// import Peer from "./Peers";

// export default function Conference() {
//   const peers = useHMSStore(selectPeers);
//   return (
//     <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//       {peers.map((peer) => (
//         <Peer key={peer.id} peer={peer} />
//       ))}
//     </div>
//   );
// }

import { selectPeers, useHMSStore } from "@100mslive/react-sdk";
import Peer from "./Peers";

export default function Conference() {
  const peers = useHMSStore(selectPeers);

  const screenPeer = peers.find(p => p.type === "screen");

  return (
    <div className="conference-container">

      {screenPeer && (
        <div className="screen-large">
          <Peer peer={screenPeer} />
        </div>
      )}

      <div className="peers-grid">
        {peers
          .filter(p => p !== screenPeer)
          .map(peer => (
            <Peer key={peer.id} peer={peer} />
          ))}
      </div>

    </div>
  );
}