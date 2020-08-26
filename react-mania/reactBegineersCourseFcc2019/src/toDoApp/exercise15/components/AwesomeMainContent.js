import React from "react";

// function AwesomeMainContent() {
//     return <main>Main content : Lorem  eveniet inventore est aut aperiam?</main>;
// }

class AwesomeMainContent extends React.Component {

    getStyle() {
        const styling = {"color" : "blue"}
        return styling;
    }
   
    render() {
        return ( <main style = {this.getStyle()}>Main content : Lorem  eveniet inventore est aut aperiam?</main>);
    }


}

export default AwesomeMainContent;