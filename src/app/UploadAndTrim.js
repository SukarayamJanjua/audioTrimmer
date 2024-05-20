import React, { useState, useEffect } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const UploadAndTrim = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [trimmedAudio, setTrimmedAudio] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isClient, setIsClient] = useState(false); // State to track if component is on the client side
  // const ffmpeg = createFFmpeg({ log: true });

  useEffect(() => {
    setIsClient(true); // Mark the component as client-side when it mounts
  }, []);

  const handleFileChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handleTrimAudio = async () => {
    setIsLoading(true);
    if (!ffmpeg.isLoaded()) {
      await ffmpeg.load();
    }
    ffmpeg.FS('writeFile', 'input.mp3', await fetchFile(audioFile));

    const startTime = '00:00:00';
    const duration = '00:00:30'; // 30 seconds duration

    await ffmpeg.run(
      '-i', 'input.mp3',
      '-ss', startTime,
      '-t', duration,
      'output.mp3'
    );

    const data = ffmpeg.FS('readFile', 'output.mp3');
    const url = URL.createObjectURL(new Blob([data.buffer], { type: 'audio/mp3' }));
    setTrimmedAudio(url);
    setIsLoading(false);
  };

  if (!isClient) return null; // Render nothing if component is not yet on the client side

  return (
    <div>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      {audioFile && <button onClick={handleTrimAudio}>Trim Audio</button>}
      {isLoading && <p>Loading...</p>}
      {trimmedAudio && (
        <audio controls>
          <source src={trimmedAudio} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default UploadAndTrim;
