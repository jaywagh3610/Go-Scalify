import { useEffect, useState } from "react";
import axios from "axios";

function Converter() {
  const [isListening, setIsListening] = useState(false);
  const [recognizing, setRecognizing] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [audioFile, setAudioFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState("");

  useEffect(() => {
    const speechRecognizer =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (speechRecognizer) {
      const recognizer = new speechRecognizer();
      recognizer.continuous = true;
      recognizer.interimResults = true;
      recognizer.lang = "en-US";
      setRecognizing(recognizer);

      recognizer.onresult = (event) => {
        let finalResult = "";
        let midspeech = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcriptPart = event.results[i][0].transcript;
          console.log(transcriptPart);
          if (event.results[i].isFinal) {
            finalResult += transcriptPart;
          } else {
            midspeech += transcriptPart;
          }
        }
        setTranscript(finalResult || midspeech);
      };

      return () => {
        recognizer.stop();
      };
    }
  }, []);

  function handleStopListening() {
    if (recognizing) {
      recognizing.stop();
      setIsListening(false);
    }
  }

  function handleStartListening() {
    if (recognizing) {
      recognizing.start();
      setIsListening(true);
    }
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      setAudioFile(file);
    }
  }

  async function handleUpload() {
    if (!audioFile) {
      alert("Please upload an audio file.");
      return;
    }

    setIsUploading(true);
    const url = "https://api.assemblyai.com/v2/upload";
    const token = "81fc36f1f37d4342b074a1329c50c9e1";
    try {
      const response = await axios.post(url, audioFile, {
        headers: {
          Authorization: token,
          "Content-Type": audioFile.type,
        },
      });
      console.log(response);
      const audioUrl = response.data.upload_url;
      console.log(audioFile);
      const transcriptionResponse = await axios.post(
        "https://api.assemblyai.com/v2/transcript",
        {
          audio_url: audioUrl,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log("response:", transcriptionResponse);
      const transcriptId = transcriptionResponse.data.id;
      console.log(transcriptId);
      await getTranscriptionResult(transcriptId);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsUploading(false);
    }
  }

  async function getTranscriptionResult(transcriptId) {
    const url = `https://api.assemblyai.com/v2/transcript/${transcriptId}`;
    const token = "81fc36f1f37d4342b074a1329c50c9e1";
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: token,
        },
      });

      if (response.data.status === "completed") {
        setUploadResult(response.data.text);
        setTranscript(response.data.text);
      } else if (response.data.status === "failed") {
        alert("Transcription failed.");
      } else {
        setTimeout(() => getTranscriptionResult(transcriptId), 5000);
      }
    } catch (error) {
      console.error("Error getting transcription result:", error);
    }
  }

  return (
    <div>
      <h1>Voice to Text Converter</h1>
      <button
        onClick={isListening ? handleStopListening : handleStartListening}
      >
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>
      <div>
        <textarea value={transcript} readOnly className="textarea"></textarea>
      </div>

      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={isUploading}>
        {isUploading ? "Uploading..." : "Upload"}
      </button>

      {uploadResult && (
        <div>
          <h2>Transcription Result:</h2>
          <p>{uploadResult}</p>
        </div>
      )}
    </div>
  );
}

export default Converter;
