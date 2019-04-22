import { useState, useEffect } from "react"

const useRandomPath = () => {
  const [top, setTop] = useState(Math.random() * 100)
  const [left, setLeft] = useState(Math.random() * 100)

  const change = () => Math.random() * 20 - 10

  useEffect(
    setInterval(() => {
      setTop(top + change())
      setLeft(left + change())
    }, 500),
    []
  )

  return [top, left]
}

export default useRandomPath
