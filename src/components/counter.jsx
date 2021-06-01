import React, { Component } from 'react';
class counter extends Component {
    // state={
    //         value :this.props.counter.value
    //         // tags : ["tag1","tag2","tag3"]

    //     }; 
    // handleIncrement=()=>{
    //     this.setState({value:this.props.counter.value+1});
    //      console.log("Increment Clicked",this);


    // };
    // renderTags(){
    //     if(this.state.value===0) return <p>There are no Tags</p>;

    //     return  <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>;

    // }   
    


    
    render() {
       
        // console.log('props',this.props);
        return( 
        <div>
        
        <span  className={this.getBadgeClasses()}>{this.formatvalue()}</span>
        <button 
        onClick={()=>this.props.onIncrement(this.props.counter)} 
        className="btn btn-secondary btn-sm">Increment</button>
        {/* {this.state.value===0 && "Please create a new tag"} */}
        {/* {this.renderTags()} */}
        <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-1">Delete</button>
        </div>
        );
    }
    getBadgeClasses(){
        let classes="badge m-2 bg-";
        classes+=this.props.counter.value===0 ? "warning" : "primary";
        return classes;

    }
    formatvalue(){
        const {value} = this.props.counter;
        return value=== 0 ? "Zero" : value;
    }
}
 
export default counter;