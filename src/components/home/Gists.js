import React from 'react'
import Gist from './Gist'

const githubData = require('../../data/gists.json').gists.gist;


const gitJsonData = githubData.map((i) => 
        <Gist key={i.id} title={i.title} about={i.about} tools={i.tools} colors={i.colors} url={i.url}/>

);


class Gists extends React.Component {

    render(){
        return(
            <div className="gist--main">
               {gitJsonData}
            </div>
        )
    }
};

export default Gists;