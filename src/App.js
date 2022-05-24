import { Component } from "react";

import "./App.css";

class App extends Component {
  // Component é  uma classe que herda de React.Component que é a classe mais importante do React
  //lifecycle methods sao metodos que executam automaticamente quando o componente é renderizado

  // state é um objeto que armazena informações do componente
  state = {
    // estado inicial do componente
    posts: [],
  };

  //metodo que executa quando o componente é renderizado
  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postResponse = fetch("https://jsonplaceholder.typicode.com/posts"); // faz uma requisição ao servidor
    const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");

    const [posts, photos] = await Promise.all([postResponse, photosResponse]); // retorna um array com os dados do postResponse
  
    const postJson = await posts.json(); // transforma o postResponse em json
    const photosJson = await photos.json(); // transforma o photosResponse em json


    const postAndPhotos = postJson.map((post,index)=>{
      return{ ...post, cover: photosJson[index].url}
    })
    this.setState({ posts:postAndPhotos}); // atualiza o estado do componente
  }; 

  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <div className="posts">
          {posts.map((post) => (
            <div className="post">
              <img src={post.cover} alt={post.title}/>
              <div key={post.id} className="post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
