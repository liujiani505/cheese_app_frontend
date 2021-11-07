import { useState } from "react"
import { Link } from "react-router-dom"


function Index(props) {

  // state to hold formData
  const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    title: "",
  })

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({...newForm, [event.target.name]: event.target.value})
  }

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault()
    props.createCheese(newForm)
    setNewForm({
      name: "",
      image: "",
      title: "",
    })
  }

  const loaded = () => {
    return( 
      <section className="cheeseContainer">
      {props.cheese.map((cheese) => (
      <div className="cheese" key={cheese._id}>
        <Link to={`/cheese/${cheese._id}`}><h1>{cheese.name}</h1></Link>
        <img src={cheese.image} alt={cheese.name} />
        <h3>{cheese.name}</h3>
      </div>
    ))}
    </section>
    )
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="name" value={newForm.name} onChange={handleChange}/>
          <input type="text" name="image" placeholder="image URL" value={newForm.image} onChange={handleChange}/>
          <input type="text" name="title" placeholder="title" value={newForm.title} onChange={handleChange}/>
          <input type="submit" value="Create Cheese" />
        </form>
      {props.cheese ? loaded() : loading()}
      </section>
    )
  }
  
  export default Index;