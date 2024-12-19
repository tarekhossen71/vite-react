import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
    const [text, setText] = useState('')
    const [preview, setPreview] = useState('')

    const clickHandle = () => {
        let upper = text.toUpperCase()
        setText(upper)
        // setPreview(upper)
    }
    const speakText = () => {
        // Speak text
        let msg = new SpeechSynthesisUtterance()
        msg.text = text
        window.speechSynthesis.speak(msg)
    }
    const resetInput = () => {
        setText('')
        // setPreview('')
    }
  return (
    <>
      <div className='container'>
        <div className='row justify-content-center mt-3'>
            <div className="col-md-6">
                <h1 className="text-white text-center py-3 bg-success">Vite + React</h1>
                <div className="my-3">
                    
                    <textarea type="text" value={text} onChange={(e)=> setText(e.target.value)} className="form-control" placeholder='Enter your text' ></textarea>
                    <button className='btn btn-primary mt-2' onClick={clickHandle}>Change to Upper</button>
                    <button className='btn btn-primary mt-2 ms-2' onClick={speakText}>Speak Text</button>
                    <button className='btn btn-danger mt-2 ms-2' onClick={resetInput}>Reset</button>
                </div>
                <div>
                    <h3>Text Summery</h3> 
                    <div className='d-flex gap-2 bg-light'>
                        <p>{text.length} of characters</p> |
                        <p>{text.split(' ').length} of words</p> |
                        <p>{text.split('\n').length} of lines</p>
                    </div>
                    
                    <div className="my-3">
                        
                        {
                            text.length > 0 && <div>
                                <h3>Preview</h3> <p>{text}</p>
                                {/* <h3>Preview</h3> <p>{preview}</p> */}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
