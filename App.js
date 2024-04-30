import logo from './logo.svg';
import './App.css';
function Header(props){     //props를 이용해서 속성? 약간 매개변수로 생각하면 괜찮을 것 같음
  console.log('props', props, props.title);
  return       <header>
  <h1><a href="/" onClick={function(event){
    event.preventDefault();
    props.onChangeMode();
  }}>WEB</a></h1>
</header>
}
function Nav(props){
  const lis = []
for(let i = 0; i<props.topics.length; i++){
  let t = props.topics[i];
  lis.push(<li key={t.id}>
    <a id={t.id} href = {'/read/'+t.id} onClick={event=>{
      event.preventDefault();
      props.onChangeMode(event.target.id);
    }}>{t.title}</a></li>)      //{}로 묶어서 동적으로 만들 수 있음
}   //리엑트는 자동으로 생성한 태그의 경우 리엑트가 이 태그들을 추적해야되는데 이 근거로써 우리가 li key 를 부여해서 정확한 동작하게 구현
 return       <nav>
 <ol>
  {lis}
 </ol>
</nav>
}
function Article(props){
  return       <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}

function App() {
  let topics = [
    {id:1, title: 'html', body:'아 어려워지네'},
    {id:2, title: 'CSS', body:'이 구조를 외워야되나'},
    {id:3, title: 'javascript', body:'내가 할 수 있을까..'}
  ];
  return (
    <div>
      <Header title = "REACT" onChangeMode={()=>{
        alert('Header');
      }}></Header>
      <Nav topics ={topics} onChangeMode={(id)=>{
        alert(id);
      }}></Nav>
      <Article title = "Welcome" body = "Hello,Web"></Article>
      <Article title = "Hi" body = "Wow React"></Article>

    </div>
  );
}
export default App;
