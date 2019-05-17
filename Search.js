import React from 'react';
import ReactDom from 'react-dom'
import React from 'news.html'
// import './Search.css';

function Search() {
  const News = ({publicationDate, Info}) =>
  {
  return (
    <section>
      <h1>
      <table id="table" class="" border="1">
        <tr>
            <th>Publication Date</th>
            <th>Info</th>
            <th></th>
        </tr>
    </table>
      </h1>
    </section>
  )
}

  return (
    <div className="search">
        <p>NEWS</p>
        <form>
            <input className="search-form"></input>
            
        </form>
    </div>
  );
}

render (
  <news />,
  document.getElementById('root')
)

class Square extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
  
    render() {
      return (
        <button className="square" 
        OnClick={() => this.setState({value: 'X'})}
        >
          {this.props.value}
        </button>
      );
    }
  }



export default Search;
