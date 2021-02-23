function MyComponent(props) {
  return(
    <div>
      <h1>Header</h1>
    {props.isLoading ? (
      <h1>Loading. Please wait.</h1>
    ) : (
      <h1>Welcome to our app!!</h1>
    )}
    <h1>Footer</h1>
    </div>
  )

}

export default MyComponent;
