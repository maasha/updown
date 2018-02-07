import React from 'react';
import Upload from '../../client/components/upload.jsx';
import Download from '../../client/components/download.jsx';
import Files from '../../imports/api/files.collection.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      file: null,
      fileId: null,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      console.log(e.target.result)
    };

    reader.readAsText(file);
  }

  render() {
    return (
      <div className="app">
        <h1 className="title">UpDown</h1>
        <Upload handleOnChange={this.handleOnChange} />
        <Download file={this.state.file} />
      </div>
    );
  }
}

export default App;
