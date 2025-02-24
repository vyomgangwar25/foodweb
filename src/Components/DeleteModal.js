import React from 'react'

const DeleteModal = (props) => { 
   

    const passid=()=>{
     props.deleteApi(props.id)
    }
    if (!props.isOpen) return null; 
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="fixed inset-0 bg-black opacity-50"></div>
    <div className="bg-white rounded-lg p-6 z-10 w-96">
      <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
      <p className="mb-6">Are you sure you want to delete this item?</p>
      <div className="flex justify-end">
        <button   className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2" onClick={props.isClose} >
          Cancel
        </button>
        <button  className="bg-red-500 text-white px-4 py-2 rounded" onClick={passid}>
          Delete
        </button>
      </div>
    </div>
    </div>
  )
}

export default DeleteModal
