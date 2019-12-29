
import React from 'react'

export default (proportion: string | boolean): string => {
  const [classes, setClasses] = React.useState<string>('')
  React.useEffect(() => {
    if (!proportion) return
    if (typeof proportion === 'string') {
      setClasses(`sled-proportion sled-proportion-${proportion.replace(':', '-')}`)
    }
    if (typeof proportion === 'boolean') {
      setClasses(`sled-proportion`)
    }
  }, [proportion])
  return classes
}
