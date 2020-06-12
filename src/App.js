import React,{useEffect,useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe'

const App=()=>{
const APP_ID='ad7c5a70'
const  APP_KEY="aab221a12c8353251380ec4d729e7fc5	"
const [recipes,setRecipes]=useState([]);
const [search,setSearch]=useState('');
const [query,setQuery]=useState('banana')
// const exampleReq=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

// const[counter,setCounter]=useState(0)

useEffect(() => {
 getRecipies();
},[query]);

const getRecipies= async()=>{
  const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data= await response.json()
 setRecipes(data.hits);
 console.log(data.hits)
}
const updateSearch=e=>{
  setSearch(e.target.value)
}

const getSearch=e=>{
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

  return(
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
         <button  className='search-button' type='submit'>search</button>
      </form>
      {/* <h1 onClick={()=>setCounter(counter+1)}>{counter}</h1> */}
      <div className='recipe'>
      {recipes.map(recipe=>(
        <Recipe title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
