import React from "react"

function useHash() {
  const [hash, setHash] = React.useState<string | undefined>()

  React.useEffect(() => {
    function onHashChange() {
      setHash(window.location.hash)
    }

    onHashChange()

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return hash
}

export default useHash
