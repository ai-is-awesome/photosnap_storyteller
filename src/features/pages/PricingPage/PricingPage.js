import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Compare from './Compare'

export default function PricingPage() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return (
    <>
      <Compare desktop={isDesktop} />
    </>
  )
}
