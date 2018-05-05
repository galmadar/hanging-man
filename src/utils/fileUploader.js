import React, { Component } from 'react';
import firebase from './HangmanFirebase';
import FileUploader from 'react-firebase-file-uploader';

class FileUploaderComp extends Component {
state = {
picture: '',
isUploading: false,
progress: 0,
pictureURL: ''
};
handleUploadStart = () => this.setState({isUploading: true, progress: 0});
handleProgress = (progress) => this.setState({progress});
handleUploadError = (error) => {
this.setState({isUploading: false});
console.error(error);
}
handleUploadSuccess = (filename) => {
this.setState({picture: filename, progress: 100, isUploading: false});
firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({pictureURL: url}));
};
render() {
return (
<div>
<form>
<label>Imaganman Image:</label>
{this.state.isUploading &&
<p>Progress: {this.state.progress}</p>
}
{this.state.pictureURL &&
<img src={this.state.pictureURL} />
}
<FileUploader
accept="image/*"
name="picture"
randomizeFilename
storageRef={firebase.storage().ref('images')}
onUploadStart={this.handleUploadStart}
onUploadError={this.handleUploadError}
onUploadSuccess={this.handleUploadSuccess}
onProgress={this.handleProgress}
/>
</form>
</div>
);
}
}
export default FileUploaderComp;