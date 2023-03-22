import React from 'react';
import ReactMarkdown from 'https://esm.sh/react-markdown@7'
import './App.css';

const precode = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({input: event.target.value.match(/[\r\n|\r|\n]$/) ? event.target.value.replace(/\r\n|\r|\n|\s\s\r\n/g,`  \r\n`) : event.target.value});
  }
  componentDidMount(){
    this.setState({
      input: precode  })}
  

  render() {
    return (
      <div className="app">
      <div className="editorWrap">
        <div className="toolbar">Editor</div>
      <textarea id="editor" value={this.state.input} onChange={this.handleChange}>my nae</textarea>
      </div>
      <div className="previewWrap">
      <div className="toolbar">Previewer</div>
      <div id="preview" className='preview'><ReactMarkdown children={this.state.input} /></div>

      </div>
      </div>
    )
  }
}

export default App;
