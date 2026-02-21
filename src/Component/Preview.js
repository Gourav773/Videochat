// import { useState } from "react";
// import { useHMSActions } from "@100mslive/react-sdk";
// import axios from "axios";

// export default function JoinForm() {
//   const hmsActions = useHMSActions();
//   const [username, setUsername] = useState("");
//   const [role, setRole] = useState("guest");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [roomId, setRoomId] = useState("");
//   const [generatedRoomId, setGeneratedRoomId] = useState("");
//   const [copied, setCopied] = useState(false);

//   const joinRoom = async () => {
//     try {
//       if (!username || (role === "guest" && !roomId))
//         return setError("Please enter your name and meeting ID");
//       setLoading(true);
//       setError("");

//       let roomToJoin = roomId;

//       if (role === "host" && !roomToJoin) {
//         const createRes = await axios.post("http://localhost:5050/create-room", {
//           name: `Meeting-${Date.now()}`,
//         });
//         roomToJoin = createRes.data.room.id;
//         setGeneratedRoomId(roomToJoin);
//       }

//       const tokenRes = await axios.post("http://localhost:5050/get-token", {
//         room_id: roomToJoin,
//         user_id: username,
//         role,
//       });

//       await hmsActions.join({ authToken: tokenRes.data.token, userName: username });
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       setError("Failed to join room. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const generateMeeting = async () => {
//     try {
//       setLoading(true);
//       setError("");
//       const createRes = await axios.post("http://localhost:5050/create-room", {
//         name: `Meeting-${Date.now()}`,
//       });
//       const newRoomId = createRes.data.room.id;
//       setGeneratedRoomId(newRoomId);
//       setRoomId(newRoomId);
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       setError("Failed to generate meeting");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const copyMeetingLink = () => {
//     if (!generatedRoomId) return;
//     const link = `${window.location.origin}/?roomId=${generatedRoomId}`;
//     navigator.clipboard.writeText(link).then(() => {
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     });
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900 p-6">

//       {/* Left side illustration */}
//       <div className="hidden md:flex flex-1 justify-center items-center">
//         <div className="text-center">
//           <img
//             src="https://img.icons8.com/ios-filled/200/ffffff/video-call.png"
//             alt="Video Call Illustration"
//             className="w-64 h-64 mb-6"
//           />
//           <h1 className="text-4xl font-bold text-white mb-2">QuickMeet</h1>
//           <p className="text-gray-300 text-lg">
//             Fast, simple, and secure video meetings
//           </p>
//         </div>
//       </div>

//       {/* Right side join form */}
//       <div className="flex-1 w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8 flex flex-col gap-5">
//         <h2 className="text-2xl font-bold text-white text-center tracking-tight">
//           Join a Meeting
//         </h2>

//         <input
//           type="text"
//           placeholder="Your Name"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="p-4 rounded-xl bg-white/10 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
//         />

//         <select
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           className="p-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
//         >
//           <option value="host">Host</option>
//           <option value="guest">Guest</option>
//         </select>

//         {role === "guest" && (
//           <input
//             type="text"
//             placeholder="Meeting ID"
//             value={roomId}
//             onChange={(e) => setRoomId(e.target.value)}
//             className="p-4 rounded-xl bg-white/10 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
//           />
//         )}

//         {role === "host" && (
//           <div className="flex gap-3">
//             <button
//               onClick={generateMeeting}
//               disabled={loading}
//               className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-xl transition"
//             >
//               {loading ? "Generating..." : "Generate Meeting"}
//             </button>
//             {generatedRoomId && (
//               <button
//                 onClick={copyMeetingLink}
//                 className="flex-1 bg-white/20 hover:bg-white/30 text-white font-semibold py-3 rounded-xl transition"
//               >
//                 {copied ? "Copied!" : "Copy Link"}
//               </button>
//             )}
//           </div>
//         )}

//         {generatedRoomId && role === "host" && (
//           <p className="text-center text-gray-200 font-semibold">
//             Meeting ID: {generatedRoomId}
//           </p>
//         )}

//         {error && <p className="text-red-400 text-center font-medium">{error}</p>}

//         <button
//           onClick={joinRoom}
//           disabled={loading}
//           className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-xl transition"
//         >
//           {loading ? "Joining..." : "Join Meeting"}
//         </button>
//       </div>
//     </div>
//   );
// }







// import { useState } from "react";
// import { useHMSActions } from "@100mslive/react-sdk";
// import axios from "axios";

// export default function JoinForm() {
//   const hmsActions = useHMSActions();
//   const [username, setUsername] = useState("");
//   const [role, setRole] = useState("guest");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [roomId, setRoomId] = useState("");
//   const [generatedRoomId, setGeneratedRoomId] = useState("");
//   const [copied, setCopied] = useState(false);

//   const joinRoom = async () => {
//     try {
//       if (!username || (role === "guest" && !roomId)) {
//         setError("Please enter your name and meeting ID");
//         return;
//       }
//       setLoading(true);
//       setError("");

//       let roomToJoin = roomId;

//       if (role === "host" && !roomToJoin) {
//         const createRes = await axios.post("http://localhost:5050/create-room", {
//           name: `Meeting-${Date.now()}`,
//         });
//         roomToJoin = createRes.data.room.id;
//         setGeneratedRoomId(roomToJoin);
//       }

//       const tokenRes = await axios.post("http://localhost:5050/get-token", {
//         room_id: roomToJoin,
//         user_id: username,
//         role,
//       });

//       await hmsActions.join({ authToken: tokenRes.data.token, userName: username });
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       setError("Failed to join room. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const generateMeeting = async () => {
//     try {
//       setLoading(true);
//       setError("");
//       const createRes = await axios.post("http://localhost:5050/create-room", {
//         name: `Meeting-${Date.now()}`,
//       });
//       const newRoomId = createRes.data.room.id;
//       setGeneratedRoomId(newRoomId);
//       setRoomId(newRoomId);
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       setError("Failed to generate meeting");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const copyMeetingLink = () => {
//     if (!generatedRoomId) return;
//     const link = `${window.location.origin}/?roomId=${generatedRoomId}`;
//     navigator.clipboard.writeText(link).then(() => {
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     });
//   };

//   return (
//     <div className="join-card">
//       <h2 className="title">Join or Create a Meeting</h2>

//       {error && <p className="error">{error}</p>}

//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>

//       <div className="input-container">
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="host">Host</option>
//           <option value="guest">Guest</option>
//         </select>
//       </div>

//       {role === "guest" && (
//         <div className="input-container">
//           <input
//             type="text"
//             placeholder="Meeting ID"
//             value={roomId}
//             onChange={(e) => setRoomId(e.target.value)}
//           />
//         </div>
//       )}

//       {role === "host" && (
//         <div className="input-container" style={{ display: "flex", gap: "10px" }}>
//           <button className="btn-primary" onClick={generateMeeting} disabled={loading}>
//             {loading ? "Generating..." : "Generate Meeting"}
//           </button>
//           {generatedRoomId && (
//             <button className="btn-primary" onClick={copyMeetingLink}>
//               {copied ? "Copied!" : "Copy Link"}
//             </button>
//           )}
//         </div>
//       )}

//       {generatedRoomId && role === "host" && (
//         <p>Meeting ID: <b>{generatedRoomId}</b></p>
//       )}

//       <button className="btn-primary" onClick={joinRoom} disabled={loading}>
//         {loading ? "Joining..." : "Join Meeting"}
//       </button>
//     </div>
//   );
// }



import { useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";
import axios from "axios";

export default function JoinForm() {
  const hmsActions = useHMSActions();
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("guest");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [roomId, setRoomId] = useState("");
  const [generatedRoomId, setGeneratedRoomId] = useState("");
  const [copied, setCopied] = useState(false);

  const joinRoom = async () => {
    try {
      if (!username || (role === "guest" && !roomId)) {
        setError("Please enter your name and meeting ID");
        return;
      }
      setLoading(true);
      setError("");

      let roomToJoin = roomId;

      if (role === "host" && !roomToJoin) {
        const createRes = await axios.post("http://localhost:5050/create-room", {
          name: `Meeting-${Date.now()}`,
        });
        roomToJoin = createRes.data.room.id;
        setGeneratedRoomId(roomToJoin);
      }

      const tokenRes = await axios.post("http://localhost:5050/get-token", {
        room_id: roomToJoin,
        user_id: username,
        role,
      });

      await hmsActions.join({ authToken: tokenRes.data.token, userName: username });
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError("Failed to join room. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const generateMeeting = async () => {
    try {
      setLoading(true);
      setError("");
      const createRes = await axios.post("http://localhost:5050/create-room", {
        name: `Meeting-${Date.now()}`,
      });
      const newRoomId = createRes.data.room.id;
      setGeneratedRoomId(newRoomId);
      setRoomId(newRoomId);
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError("Failed to generate meeting");
    } finally {
      setLoading(false);
    }
  };

  const copyMeetingLink = () => {
    if (!generatedRoomId) return;
    const link = `${window.location.origin}/?roomId=${generatedRoomId}`;
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(180deg,#061021 0%, #071428 100%)",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          background: "#0b1220",
          borderRadius: "16px",
          padding: "30px 25px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
            padding: "15px",
            borderRadius: "12px",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "#fff",
            marginBottom: "10px",
          }}
        >
          QuickMeet
        </div>

        {error && <p style={{ color: "#ef4444", textAlign: "center" }}>{error}</p>}
        <label>Name:</label>
        <input
          type="text"
          placeholder="Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.05)",
            color: "#e6eef8",
            outline: "none",
          }}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "12px",
            border: "1px solid #4b5563", // gray border
            background: "linear-gradient(145deg, #111827, #1f2937)", // dark gray gradient
            color: "#e0f2fe", // soft blue text
            outline: "none",
            fontWeight: "500",
            transition: "all 0.2s ease",
            cursor: "pointer",
          }}
          onFocus={(e) => (e.target.style.border = "1px solid #0ea5e9")} // bright blue on focus
          onBlur={(e) => (e.target.style.border = "1px solid #4b5563")} // revert to gray
        >
          <option value="host">Host</option>
          <option value="guest">Guest</option>
        </select>


        {role === "guest" && (
          <input
            type="text"
            placeholder="Meeting ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.05)",
              color: "#e6eef8",
              outline: "none",
            }}
          />
        )}

        {role === "host" && (
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              className="btn-primary"
              onClick={generateMeeting}
              disabled={loading}
              style={{
                flex: 1,
                background: "#06b6d4",
                fontWeight: "bold",
                padding: "12px",
                borderRadius: "10px",
                cursor: "pointer",
                border: "none",
              }}
            >
              {loading ? "Generating..." : "Generate Meeting"}
            </button>
            {generatedRoomId && (
              <button
                className="btn-primary"
                onClick={copyMeetingLink}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.1)",
                  fontWeight: "bold",
                  padding: "12px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  border: "none",
                  color: "#e6eef8",
                }}
              >
                {copied ? "Copied!" : "Copy Link"}
              </button>
            )}
          </div>
        )}

        {generatedRoomId && role === "host" && (
          <p style={{ textAlign: "center", color: "#e6eef8" }}>
            Meeting ID: <b>{generatedRoomId}</b>
          </p>
        )}

        <button
          className="btn-primary"
          onClick={joinRoom}
          disabled={loading}
          style={{
            background: "#3b82f6",
            fontWeight: "bold",
            padding: "12px",
            borderRadius: "10px",
            cursor: "pointer",
            border: "none",
            color: "#fff",
          }}
        >
          {loading ? "Joining..." : "Join Meeting"}
        </button>
      </div>
    </div>
  );
}
