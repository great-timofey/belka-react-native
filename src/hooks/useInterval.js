import { useEffect, useRef } from 'react'

export function useInterval(callback) {
  const savedCallback = useRef(null)

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }

    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
}
