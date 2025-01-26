// MyDropzone.js
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { addFiles, clearFiles, setLblRes } from '../features/fileSlice';
import axios from 'axios';

export default function MyDropzone() {
    const dispatch = useDispatch();
    const files = useSelector(state => state.file.files);

    const dstyle = {
        border: "2px dashed rgb(0,0,0)",
        padding: "40px",
        borderRadius: "2px",
        textAlign: "center",
        cursor: "pointer",
        width: "100%",
        height: "100%",
        color: "rgb(0,0,0)",
        backgroundColor: "rgb(250, 194, 148)",
    };
    const handleSubmit = async (file) => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('http://localhost:8000/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            dispatch(setLblRes(res.data));
            console.log(res.data);

        } catch (err) {
            console.error(err);
        }
    };

    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles?.length) {
            const filesWithPreviews = acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }));
            dispatch(addFiles(filesWithPreviews));
            handleSubmit(acceptedFiles[0]);
        }
    }, [dispatch, handleSubmit]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div>
            <div {...getRootProps({ style: dstyle })}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files.</p>
                }
            </div>
            <div>
                <small style={{ background: 'yellow' }}>files</small>
                <ul style={{ display: "flex", listStyle: "none" }}>
                    {files.map((file, index) => (
                        <li key={index}>
                            <img src={file.preview} alt={`file preview ${index}`} width="100" height="100" style={{ padding: "2px" }} />
                        </li>
                    ))}
                </ul>
                <div className="container" style={{ display: "flex", justifyContent: "center" }}>

                    <button style={{
                        background: "#000",
                        color: '#fff',
                        padding: "0 5px",
                        margin: "4px 0",
                        fontSize: "15px"
                    }} onClick={() => dispatch(clearFiles())}>clear</button>
                </div>
            </div>
        </div>
    );
}
