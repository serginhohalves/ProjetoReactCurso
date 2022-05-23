import './App.css';
import React from 'react';


  class App extends React.Component {
    // Component é  uma classe que herda de React.Component que é a classe mais importante do React
    //lifecycle methods sao metodos que executam automaticamente quando o componente é renderizado 
    state = {
            counter: 0,
            posts: [
              {
                id:1,
                title: 'Post 1',
                body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.' 
              },
              {
                id:2,
                title: 'Post 2',
                body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
              },
              {
                id:3,
                title: 'Post 3',
                body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
              }
            ]
          };

    
          timeoutUpdate = null;
      
    componentDidMount(){ 
      this.handleTimeout();
    }

    componentDidUpdate(){
      this.handleTimeout();
    }

    componentWillUnmount(){
      clearTimeout(this.timeoutUpdate);
    }


    handleTimeout = () => { // função que atualiza o estado
      const{posts, counter} = this.state
      posts[0].title = 'title changed';

      this.timeoutUpdate =  setTimeout(()=>{
        this.setState({
          posts, counter: counter + 1
        })
      }, 1000)
      
    }  

    render() {
      const {posts, counter} = this.state
      return (
        
        <div className="App">
          <h1>{counter}</h1>
          { 
            posts.map(post => (
              
              <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              </div>
            ))
          }
   
        </div>
      );
    }
  }

export default App;
