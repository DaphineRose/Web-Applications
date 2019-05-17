import React from 'react';
// import ReactDom from 'react-dom';
// import './News.css';

export default class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            articles: []
        }
    }

    // NOTE: Lifecycle Functions...
    componentWillReceiveProps(nextProps) {}

    // NOTE: What will happen when this component mounts
    componentWillMount() {
        console.info('News component will mount shortly.');
        fetch('../data/news.json')
            .then(response => response.json())
            .then(data => {
                console.info('Returned Data', data);
                this.setState({
                    articles: data.data,
                    count: data.count
                });

            })
            .catch(e => console.error(e));
    }

    // NOTE: What will happen when this component did mount
    componentDidMount() {
        console.info('News component mounted.');

    }

    // NOTE: What will happen when this component will update
    componentWillUpdate() {}

    showData = () => {
        return <div>
            <h3>News Data</h3>
            <table id="table" class="" border="1">
        <tr>
            <th>Publication Date</th>
            <th>Info</th>
            <th></th>
        </tr>
        </table>
        <tbody>
                <tr><td>' + record.pubDate + '</td><td><h2><a href ="' + record.url + '">' +  record.headline + '</a> by ' + record.byLine + '</h2><p>' + record.description + '</p></td><td> <div class = "btn-group"></div>    <button>Edit</button>    <button>View</button>    <button>Delete</button> </td></tr>')} </tbody>
            })
            .catch(e => console.error(e));

            {this.state.articles.map((article) => <div key={article.uuid}>
            <h3>{article.headline}</h3>
            <p>{article.description}</p>
            </div>
            )}
        </div>
    }

    render() {
        return this.showData(); 
    }

}
