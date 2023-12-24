

function Home(props) {
    console.log(props)

    return <h1 className="heading">My is is {props.data.age} {props.data.name}</h1>
}

export default Home