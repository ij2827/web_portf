import React from 'react';

//Creates a label for Gist languages and adjusts color
let toolCreate = (lang) => {
    
    if(lang.toLowerCase() === "java"){
        return <div key={lang} className="gist--tools-tool bg-blue">{lang}</div>
    } else  if( lang.toLowerCase() === "javascript"  ){
        return <div key={lang} className="gist--tools-tool bg-yellow">{lang}</div>
    } else if(  lang.toLowerCase() === "nodejs" ||
                lang.toLowerCase() === "express" ||
                lang.toLowerCase() === "mongodb"  ){
        return <div key={lang} className="gist--tools-tool bg-green">{lang}</div>
    }else{
        return <div key={lang} className="gist--tools-tool bg-red">{lang}</div>
    }
    
}

const Gist = (props) => (
    <div className="gist">
        
        <div className="gist--content-container">

            <div className="gist--tools">
                <h2>{props.title}</h2>
                {props.tools.map((tool) => 
                    toolCreate(tool)
                )}
            </div>
           
            <div className="gist--content">{props.about}</div>
        </div>
        
        <div className="divider"></div>
        <div className="gist--content-github">
                <a className="gist--link" href={props.url} target="_blank">Github link</a>
        <div className="gist--image"><img src="https://assets-cdn.github.com/images/modules/open_graph/github-mark.png"></img></div>
        </div>
        
    </div>
);

export default Gist;