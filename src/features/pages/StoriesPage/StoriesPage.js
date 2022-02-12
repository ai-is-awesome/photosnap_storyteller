import React from 'react'
import UserStory from '../../UserStory/UserStoryContainer'
import USTopCard from '../../UserStory/USTopCard'

export default function StoriesPage() {
  return (
    <>
      <USTopCard />
      <UserStory page="stories" />
    </>
  )
}
