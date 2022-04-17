import React, {useState, useEffect} from 'react'


function useDocumentTitle() {
    const [count, setCount]
    useEffect(() => {
        document.title = 'Count ${count}'
    }) 
  
    return (
        <div>
            
        </div>
    )
}

export default useDocumentTitle
