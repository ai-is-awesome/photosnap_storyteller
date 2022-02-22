import React, { useState } from 'react'
import UserStory from '../../UserStory/UserStoryContainer'
import USTopCard from '../../UserStory/USTopCard'
import AddStory from './AddStory'
import StoryForm from './StoryForm/StoryForm'

export default function StoriesPage() {
  const [storyForm, setStoryForm] = useState(false)

  return (
    <>
      <USTopCard />
      <UserStory page="stories" />
      <AddStory setStoryForm={setStoryForm} />
      {storyForm ? 
      <StoryForm storyForm={storyForm} setStoryForm={setStoryForm}/> 
      : ""
      }
    </>
  )
}
