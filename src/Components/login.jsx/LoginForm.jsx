function LoginForm() {
  return (
    
    <div className="login-page">
      <form action="#" method="post">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" />

            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" name="lastname" placeholder="Enter your last name" required/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required/>

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default LoginForm

