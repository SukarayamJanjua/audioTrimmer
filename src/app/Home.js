
import UploadAndTrim from './Components/UploadAndTrim.js';

const Home = () => {
    return (
        <>
            <main className="pages">
        <div className="page centered">
          <div className="top-menu sticky">
            <menu>
              <li><a>How it works</a></li>
              <li><a href="/joiner" className="">Joiner</a></li>
            </menu>
          </div>
          <h1>Audio Cutter</h1>
          
          <h3>Free editor to trim and cut any audio file online</h3>
          <UploadAndTrim/>
          {/* <input hidden type="file" accept=".wav,.mp3,.aac,.ogg,.wma,.flac,.alac,.aiff,audio/*" />
          <button class="button-17" role="button" className="upload">Browse Mp3</button> */}
          {/* <UploadAndTrim /> */}
        </div>
        <div className="page info">
          <h2>How to cut audio</h2>
          <p>
            This app can be used to trim and/or cut audio tracks, remove an audio fragment. 
            Fade in and fade out your music easily to make the audio harmoniously.
            <br /><br />
            It is fast and easy to use. You can save the audio file in any format 
            (codec parameters are configured)
            <br /><br />
            It works directly in the browser, no need to install any software, 
            and is available for mobile devices.
          </p>
          <h4>
            <svg aria-hidden="true" width="1em" height="1em" fill="currentColor" stroke="currentColor">
              <use xlinkHref="#icon-security"></use>
            </svg>
            Privacy and Security Guaranteed
          </h4>
          <p>This is a serverless app. Your files do not leave your device</p>
        </div>
      </main>
    </>
    )
}

export default Home;