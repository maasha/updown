import React from 'react';
import Upload from '../../client/components/upload';
import Download from '../../client/components/download';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      file: null,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.setState({ file: event.target.value });
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
