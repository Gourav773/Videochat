// import { useState, useEffect } from "react";
// import { ReactMediaRecorder } from "react-media-recorder";
// import axios from "axios";

// export default function Video() {
//   const [autoUpload, setAutoUpload] = useState(false);
//   const [recordedBlob, setRecordedBlob] = useState(null);

//   useEffect(() => {
//     if (autoUpload && recordedBlob) {
//       const formData = new FormData();
//       formData.append("id", `rec-${Date.now()}`);
//       formData.append("meeting_name", "Meeting Recording");
//       formData.append("date", new Date().toISOString().split("T")[0]);
//       formData.append("recording", recordedBlob, "recorded-video.webm");

//       axios.post("http://localhost:5050/addrecording", formData)
//         .then(() => console.log("Recording uploaded successfully"))
//         .catch(console.error);

//       setAutoUpload(false);
//       setRecordedBlob(null);
//     }
//   }, [autoUpload, recordedBlob]);

//   return (
//     <ReactMediaRecorder
//       screen
//       render={({ status, startRecording, stopRecording }) => (
//         <div className="flex space-x-2 mt-2">
//           <button onClick={() => { startRecording(); setAutoUpload(true); }} className="bg-green-600 p-2 rounded text-white" disabled={status === "recording"}>
//             Start
//           </button>
//           <button onClick={() => { stopRecording(); setAutoUpload(true); }} className="bg-red-600 p-2 rounded text-white" disabled={status === "stopped"}>
//             Stop
//           </button>
//         </div>
//       )}
//       onStop={(blobUrl, blob) => setRecordedBlob(blob)}
//     />
//   );
// }


import { useState, useEffect } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import axios from "axios";

export default function Video() {
  const [autoUpload, setAutoUpload] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState(null);

  useEffect(() => {
    if (autoUpload && recordedBlob) {
      const formData = new FormData();
      formData.append("id", `rec-${Date.now()}`);
      formData.append("meeting_name", "Meeting Recording");
      formData.append("date", new Date().toISOString().split("T")[0]);
      formData.append("recording", recordedBlob, "recorded-video.webm");

      axios.post("https://videomeet-2-f733.onrender.com/addrecording", formData)
        .then(() => console.log("Recording uploaded successfully"))
        .catch(console.error);

      setAutoUpload(false);
      setRecordedBlob(null);
    }
  }, [autoUpload, recordedBlob]);

  return (
    <ReactMediaRecorder
      screen
      render={({ status, startRecording, stopRecording }) => (
        <div className="flex space-x-2 mt-2">
          <button onClick={() => { startRecording(); setAutoUpload(true); }} className="bg-green-600 p-2 rounded text-white" disabled={status === "recording"}>
            Start
          </button>
          <button onClick={() => { stopRecording(); setAutoUpload(true); }} className="bg-red-600 p-2 rounded text-white" disabled={status === "stopped"}>
            Stop
          </button>
        </div>
      )}
      onStop={(blobUrl, blob) => setRecordedBlob(blob)}
    />
  );
}

