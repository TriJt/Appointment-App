import React, { useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'

export default function TextEditor({ ...props }) {
    const editorRef = useRef();

    const handleChange = (content, editor) => {
        props.onEditorChange(content)
    }
    return (
        <div className='texteditor' id={props.id}>
            {props.label && <label>{props.label}</label>}
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                value={props.value}
                init={props.init}
                onEditorChange={handleChange}
            />

            {props.error && <p style={{color: 'red'}}>{props.error}</p>}
        </div>
    )
}
