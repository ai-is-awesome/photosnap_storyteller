import React from 'react'
import UserStory from '../../UserStory/UserStoryContainer'
import USTopCard from '../../UserStory/USTopCard'
import AddStory from './AddStory'

export default function StoriesPage() {
  return (
    <>
      <USTopCard />
      <UserStory page="stories" />
      <AddStory />
    </>
  )
}
