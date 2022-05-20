
import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';
import blog from './Blog/blog';
import Footer from './components/footer';

function createPost(blog) {
  return(
  <Card
    key={blog.id}
    title={blog.title}
    imgUrl={blog.imgUrl}
    author={blog.author}
    post={blog.post} />
  )
}

function App() {
  return (
    <div>
      <Navbar />
      
      <div>{blog.map(createPost)}</div>
      <Footer />




    </div>
  )
}

export default App;
