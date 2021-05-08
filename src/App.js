import logo from './logo.png';
import { RiTwitchFill, RiTwitterFill, RiYoutubeFill, RiGithubFill } from "react-icons/ri"

function SocialLink({title, icon, href, className}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${className ? className + ' ' : ''}transition-colors duration-300`}>
      <span className="sr-only">{title}</span>
      {icon}
    </a>
  )
}

function App() {
  return (

    <div className="min-h-screen flex flex-col items-center bg-green-100 py-8 md:justify-center">
    <img src={logo} alt="Lunch Break Dev" className="h-20 w-auto mb-4" />
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
      <p className="font-bold text-xs mt-4 text-gray-600">View live above or the archives on social:</p>
      <div className="flex items-center justify-center gap-4 text-4xl mt-2">
        <SocialLink
          title="Twitch"
          icon={<RiTwitchFill />}
          href="https://www.twitch.tv/lunchbreakdev"
          className="hover:text-indigo-700"
        />
        <SocialLink
          title="YouTube"
          icon={<RiYoutubeFill />}
          href="https://www.youtube.com/channel/UCpc6vLv7stDzb9vPnJJsNCQ"
          className="hover:text-red-600"
        />
        <SocialLink
          title="Twitter"
          icon={<RiTwitterFill />}
          href="https://twitter.com/lunchbreakdev"
          className="hover:text-blue-400"
        />
        <SocialLink
          title="GitHub"
          icon={<RiGithubFill />}
          href="https://github.com/lunchbreakdev/"
          className="hover:text-gray-600"
        />
      </div>
    </div>
  );
}

export default App;
