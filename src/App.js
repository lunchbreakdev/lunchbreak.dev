import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto w-full">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            title="Twitch Stream"
            src={`https://player.twitch.tv/?channel=lunchbreakdev&parent=${
              !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ?
              'localhost' :
              'lunchbreak.dev'
            }&muted=true`}
            className="w-full h-full"
            allowFullScreen={true}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
