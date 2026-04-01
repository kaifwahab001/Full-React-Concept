import React from 'react'
import { useState } from 'react'
import NotesCard from './NoteCard'

const NotesScreen = () => {
  const [title, settitle] = useState('')
  const [description, setDescription] = useState('')
  const [notes, setNotes] = useState([])

  const onSubmitNote = () => {
    const addNotes = [...notes]
    addNotes.push({ title, description })

    setNotes(addNotes)

    settitle('')
    setDescription('')
  }


  const deleteNote=(idx)=>{
    console.log('delete note ',idx);
    
    const deleteNotes = [...notes]
    deleteNotes.splice(idx,1)
    
    setNotes(deleteNotes)

  }

  return (
    <div className='flex gap-5'>
      <div className='flex flex-col lg:w-1/2 gap-5'>
        <input
          type="text"
          placeholder='title'
          value={title}
          onChange={(e) => settitle(e.target.value)}
          className='p-5 border border-gray-500 rounded-xl'
        />

        <textarea
          placeholder='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className='p-5 border border-gray-500 rounded-xl resize-none'
        />

        <button
          onClick={onSubmitNote}
          className='bg-blue-600 text-white py-5 rounded-2xl font-bold text-m active:scale-[97%]'>
          Take Note
        </button>
      </div>

      {/* notes */}
      <div className='p-5 grid grid-cols-4 gap-5'>
        {notes.map((elem, idx) => {
          return <NotesCard key={idx} title={elem.title} desc={elem.description} deleteNote={()=>deleteNote(idx)} />
        })}
      </div>
    </div>
  )
}

export default NotesScreen