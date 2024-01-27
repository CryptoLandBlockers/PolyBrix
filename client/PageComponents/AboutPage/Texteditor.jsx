import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const Texteditor = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
    // var myContent = tinymce.get("myTextarea").getContent();
    var myContent = tinymce.activeEditor.getContent();
    console.log(myContent)
  };

  return (
    <div class="rn-about-banner-area rn-section-gapTop">
      <div class="container mb--30">
        <div class="row">
          <div class="col-12">
          <>
      <Editor
        apiKey='n8z7ers49gjfyb9u10oog7hz4nv7sc0qi7m6calv5q5zkv0c'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p></p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Texteditor;
