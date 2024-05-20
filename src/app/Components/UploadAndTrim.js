"use client"

// import React, { useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import { useState } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';

// const ffmpeg = FFmpeg.createFFmpeg({ log: true });

const UploadAndTrim = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [trimmedAudio, setTrimmedAudio] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div>
      <label htmlFor="audioFileInput" className="button-17">
        Browse Mp3
      </label>
      <input
        id="audioFileInput"
        type="file"
        accept=".wav,.mp3,.aac,.ogg,.wma,.flac,.alac,.aiff,audio/*"
        style={{ display: "none" }} // Hide the default file input
      />
      {audioFile && <button onClick={handleTrimAudio} class="button-17" role="button" className="upload">Browse Mp3</button>}
      {/* {audioFile && <button onClick={handleTrimAudio}>Trim Audio</button>} */}
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
