import { useRef } from 'react'

import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoTwitch,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io5'
import { TwitchEmbed, TwitchEmbedInstance } from 'react-twitch-embed'

function App() {
  const embed = useRef<TwitchEmbedInstance>()

  const socials = [
    {
      title: 'Twitch',
      icon: IoLogoTwitch,
      to: 'https://www.twitch.tv/lunchbreakdev',
      hover: 'hover:text-[#9146ff] focus-visible:ring-[#9146ff]',
    },
    {
      title: 'YouTube',
      icon: IoLogoYoutube,
      to: 'https://www.youtube.com/@lunchbreakdev',
      hover: 'hover:text-[#ff0000] focus-visible:ring-[#ff0000]',
    },
    {
      title: 'GitHub',
      icon: IoLogoGithub,
      to: 'https://github.com/lunchbreakdev',
      hover: 'hover:text-[#6e5494] focus-visible:ring-[#6e5494]',
    },
    {
      title: 'Twitter',
      icon: IoLogoTwitter,
      to: 'https://twitter.com/lunchbreakdev',
      hover: 'hover:text-[#1da1f2] focus-visible:ring-[#1da1f2]',
    },
    {
      title: 'Instagram',
      icon: IoLogoInstagram,
      to: 'https://instagram.com/lunchbreakdev',
      hover: 'hover:text-[#405de6] focus-visible:ring-[#405de6]',
    },
    {
      title: 'TikTok',
      icon: IoLogoTiktok,
      to: 'https://tiktok.com/@lunchbreakdev',
      hover: 'hover:text-[#ff2c55] focus-visible:ring-[#ff2c55]',
    },
  ]

  const handleReady = (e: TwitchEmbedInstance) => {
    embed.current = e
  }

  return (
    <div className="flex-1 py-8 flex flex-col items-center md:justify-center">
      <h1>
        <img
          src="/logo.svg"
          alt="Lunch Break Dev"
          className="h-20 w-auto mb-4 transition-transform duration-150 hover:scale-105"
        />
      </h1>
      <div className="max-w-3xl mx-auto w-full">
        <div className="aspect-video">
          <TwitchEmbed
            channel="lunchbreakdev"
            autoplay
            muted
            withChat={false}
            darkMode
            onVideoReady={handleReady}
            height="100%"
            width="100%"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 my-4">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.to}
            target="_blank"
            rel="noreferrer"
            className={`${
              social.hover ? social.hover + ' ' : ''
            }transition-colors duration-300 p-2 rounded-full focus-visible:ring-[3px] focus-visible:outline-none`}
          >
            <span className="sr-only">{social.title}</span>
            <social.icon className="h-8 w-8" aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  )
}

export default App
