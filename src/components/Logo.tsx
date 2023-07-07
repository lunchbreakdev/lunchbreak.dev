import { useEffect, useState } from 'react'

const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  const [isLVisible, setIsLVisible] = useState(false)
  const [isBVisible, setIsBVisible] = useState(false)
  const [isDVisible, setIsDVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLVisible(true)

      setTimeout(() => {
        setIsBVisible(true)

        setTimeout(() => {
          setIsDVisible(true)
        }, 1000)
      }, 1000)
    }, 1000)
  }, [])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 434.32 440.31"
      {...props}
    >
      <path
        className={`${
          isLVisible ? 'opacity-100' : 'opacity-0'
        } fill-[#d1682a] transition-opacity`}
        d="m100.03,88.71h69.57v204.66h66.49v58.24H100.03V88.71Z"
      />
      <path
        className={`${
          isBVisible ? 'opacity-100' : 'opacity-0'
        } fill-[#804097] transition-opacity`}
        d="m266.35,268.29c0-19.41-11.32-27.5-38.83-27.5h-27.5v-48.54h22.65c22.65,0,32.36-11.32,32.36-27.5s-9.71-22.65-32.36-22.65h-22.65v-53.39s24.27,0,24.27,0c55.01,0,98.69,13.75,98.69,65.52,0,22.65-13.75,48.53-44.49,56.62v1.62c37.21,7.28,55.81,26.69,55.81,61.48,0,42.78-28.22,66.4-67.95,74.46v-80.12Z"
      />
      <path
        className={`${
          isDVisible ? 'opacity-100' : 'opacity-0'
        } fill-[#a87c51] transition-opacity`}
        d="m416.27,90.27c-11.76-22.5-28.64-41.41-50.17-56.19C333.63,11.78,291.3,0,243.7,0H0v440.31h243.7c47.61,0,89.93-11.78,122.4-34.08,21.53-14.78,38.41-33.69,50.17-56.19,11.98-22.92,18.05-48.52,18.05-76.09v-107.59c0-27.57-6.07-53.17-18.05-76.09Zm-51.51,183.68c0,18.08-3.85,34.6-11.43,49.11-7.31,13.98-17.91,25.81-31.52,35.15-22.72,15.6-53.65,23.85-89.43,23.85H69.57V58.24h162.81c35.79,0,66.71,8.25,89.43,23.85,13.61,9.34,24.22,21.17,31.52,35.15,7.58,14.51,11.43,31.03,11.43,49.11v107.59Z"
      />
    </svg>
  )
}

export default Logo
