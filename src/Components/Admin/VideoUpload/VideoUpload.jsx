import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './VideoUpload.css';

const VideoUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/video');
            setVideos(response.data);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const allowedTypes = ['video/mp4', 'video/quicktime']; // Allowed video file types
        if (file) {
            if (allowedTypes.includes(file.type)) {
                setSelectedFile(file);
                setUploadStatus('');
            } else {
                setSelectedFile(null);
                setUploadStatus('Please select a valid video file (MP4 or MOV)');
            }
        }
    };

    const handleUpload = () => {
        if (!selectedFile) {
            setUploadStatus('Please select a file to upload');
            return;
        }
        console.log('running');
        const formData = new FormData();
        formData.append('video', selectedFile); // Updated to 'video' to match the backend

        axios.post('http://localhost:5000/api/video', formData)
            .then(response => {
                setUploadStatus('Upload successful');
                fetchVideos();
            })
            .catch(error => {
                if (error.response) {
                    setUploadStatus('Upload failed: ' + error.response.data.message);
                } else {
                    setUploadStatus('Upload failed: ' + error.message);
                }
                console.error('There was an error uploading the file!', error);
            });
    };

    const handleDelete = (videoId) => {
        axios.delete(`http://localhost:5000/api/video/${videoId}`)
            .then(response => {
                setUploadStatus('Video deleted successfully');
                fetchVideos(); // Fetch updated list of videos after deletion
            })
            .catch(error => {
                setUploadStatus('Error deleting video: ' + error.message);
                console.error('There was an error deleting the video!', error);
            });
    };

    const handleEdit = (videoId) => {
        // Implement edit functionality here
        // For example, you could set up a modal to edit video details
    };

    return (
        <div className="video-upload-container" style={{ marginTop: '50px' }}>
            <h1>Upload Video</h1>
            <input type="file" accept="video/*" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {uploadStatus && <p className="upload-status">{uploadStatus}</p>}

            <h2 style={{ color: '#fff' }}>Uploaded Videos</h2>
            <div className="video-list">
                {videos.map((video, index) => (
                    <div key={index} className="video-item">
                        <video width="320" height="240" controls>
                            <source src={`http://localhost:5000/Public/videos/${video.video}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button onClick={() => handleDelete(video.id)}>Delete</button>
                        <button onClick={() => handleEdit(video.id)}>Edit</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoUpload;
